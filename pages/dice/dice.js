// pages/dice/dice.js
Page({
  data: {
    dices: [0, 0, 0, 0, 0], // 5 个骰子
    results: [], // 匹配出来的结果列表
  },
  
  rule: {
    diceCount: 5,
    close: false, // 禁止变化, 防止多次
    closeTime: .25, // 两次最小间距时间, 默认 2
    range: 3 // 摇一摇幅度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.listenShake()
  },

  changeDices: function() {
    if(this.rule.close) return

    let newDices = []
    for(let i = 0; i < this.rule.diceCount; i ++) {
       newDices.push(Math.floor(Math.random() * 6) + 1)
    }

    this.setData({
      dices: newDices
    })

    this.handleDices(newDices)
    this.rule.close = true
    setTimeout(() => {
      this.rule.close = false
      wx.hideLoading()
    }, this.rule.closeTime * 1000)
  },

  handleDices: function (newDices) {
    let newResults = []
    if (Array.from(new Set(newDices)).length === this.rule.diceCount) newResults.push('顺子, 全部为 0 个') // 去重查看是否是顺子
    else {
      let countOne = 0 // 1 的特殊处理
      for(let i = 0; i < 6; i++) {
        let j = i + 1
        let countJ = this.howManyCount(j)
        countJ = countJ === 6 ? 7 : countJ + countOne

        newResults.push({
          count: countJ,
          dice: j,
        })

        if(j === 1) countOne = countJ // 1 要留下来充数
      }
    }

    this.setData({
      results: newResults
    })
    wx.vibrateLong() // 震动
  },

  howManyCount: function(point) {
    let count = 0
    this.data.dices.forEach((item, index) => {
      if(item === point) count++
    })

    return count
  },

  listenShake: function() {
    wx.onAccelerometerChange(res => { // 监听摇一摇事件
      let range = this.rule.range
      if (res.x > range || res.y > range || res.z > range) {
        this.changeDices()
      }
    })
  },

  clickHelp() {
    wx.navigateTo({
      url: '/pages/help/help',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})