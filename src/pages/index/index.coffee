import dice1 from '@/assets/1.png'
import dice2 from '@/assets/2.png'
import dice3 from '@/assets/3.png'
import dice4 from '@/assets/4.png'
import dice5 from '@/assets/5.png'
import dice6 from '@/assets/6.png'

rule =
	diceCount: 5
	close: false # 禁止变化, 防止多次
	closeTime: .25 # 两次最小间距时间, 默认 2
	range: 3 # 摇一摇幅度
	max: 6 # 骰子最大值

export default
	data: ->
		dices: [6, 6, 6, 6, 6] # 5 个骰子
		results: [] # 匹配出来的结果列表
		diceImgs: {
			dice1
			dice2
			dice3
			dice4
			dice5
			dice6
		}
		innerAudioContext: wx.createInnerAudioContext()

	mounted: ->
		this.listenShake()
		this.innerAudioContext.src = 'http://yss.yisell.com/yisell/ycys2018050819052088/sound/yisell_sound_201407291721333433_66366.mp3'

	methods:
		listenShake: ->
			wx.onAccelerometerChange (res) => # 监听摇一摇事件
				range = rule.range
				this.changeDices() if res.x > range or res.y > range or res.z > range

		changeDices: ->
			return if rule.close
			this.innerAudioContext.stop()
			this.innerAudioContext.play()

			newDices = []
			newDices.push(Math.floor(Math.random() * rule.max) + 1) for num in [0...rule.diceCount]
			this.dices = newDices

			this.handleDices newDices
			rule.close = true
			setTimeout =>
				rule.close = false
				wx.hideLoading()
			, rule.closeTime * 1000

		handleDices: (newDices) ->
			newResults = []
			if Array.from(new Set(newDices)).length is rule.diceCount  # 去重查看是否是顺子
				newResults.push '顺子, 全部为 0 个'
			else
				countOne = 0 # 1 的特殊处理
				for i in [0...rule.max]
					j = i + 1
					countJ = this.howManyCount j
					countJ = if countJ is rule.max then 7 else countJ + countOne

					newResults.push(
						count: countJ
						dice: j
					)

					countOne = countJ if j is 1 # 1 要留下来充数

			this.results = newResults
			wx.vibrateLong() # 震动

		howManyCount: (point) ->
			count = 0
			count++ for item, index in this.dices when item is point
			count

		clickHelp: ->
			wx.navigateTo url: '/pages/help/main'
