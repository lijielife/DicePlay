<template lang='pug'>
.container
	.help-container
		.dices.left
			img.dice(:src="diceImgs['dice1']")
			img.dice(:src="diceImgs['dice2']")
			img.dice(:src="diceImgs['dice3']")
			img.dice(:src="diceImgs['dice4']")
			img.dice(:src="diceImgs['dice5']")
		.content
			span 左侧为您，右侧对手（可多个）。
			br
			span 规则：一人喊
				span.count N
				| 个
				span.number X
				| ，则另一人必须喊
				span.count N+1
				| 个
				span.number X
				| 或
				span.count N
				| 个
				span.count X + 1
				| 又或
				span.count N+1
				| 个
				span.count X+1
				| 这里
				span.special +1
				| 为例子，当然也可以是
				span.special +2、+3
				br
				span.start 胜利条件：某方猜测总数高于实际数，如场上共有
				span.count 4
				| 个
				span.number 3
				| ，而对手猜有
				span.count 5
				| 个
				span.number 3
				| ，则您可以开对方，当然反过来说也是成立。
				br
				| 特殊规则：
				span.special 1
				| 既可以代表
				span.special 1
				| ，也可以代表任何数，如此刻场上您的
				span.special 2
				| 则有
				| 个，一个是
				span.special 1
				| 本身，还有个就是
				span.special 1=>2
				| 导致.
				br
				span.start 那么，开始吧：
				| 假如若干回合后，您喊了
				span.count 4
				| 个
				span.number 2
				| ，对手手上握有
				span.count 2
				| 个
				span.number 2
				| ，他会选择开你（他觉得你没有
				span.count 2
				| 个
				span.number 2
				| ，因此他就输了），也可能他喊其他，我们姑且认为他也喊2，那么根据规则，他必须喊大于
				span.count 4
				| 个
				span.number 2
				| ，假如他就是喊
				span.count 5
				| 个
				span.number 2
				| ，那么您博弈对方，可以开他，那么您赢了，因为一共只有
				span.count 4
				| 个
				span.number 2
				| ，也可以再喊其他，让对手开你，或继续。。。
				br
				span.start 至此，相信您有所了解该规则，感谢阅读。
		.dices.right
			img.dice(:src="diceImgs['dice2']")
			img.dice(:src="diceImgs['dice2']")
			img.dice(:src="diceImgs['dice3']")
			img.dice(:src="diceImgs['dice3']")
			img.dice(:src="diceImgs['dice5']")
	ad(unit-id="adunit-ede294d3b4c78650")
</template>

<script>
import index from './index.coffee'

export default {
	...index
}
</script>

<style scoped lang='sass'>
.container
	padding: 0

	.help-container
		display: flex
		justify-content: space-between
		height: 100%

	.dices
		display: flex
		flex-direction: column
		justify-content: space-around
		height: 100%

		.dice
			display: inline-block
			height: 120rpx
			width: 120rpx

	.left
		color: red

	.right
		color: green

	.content
		flex: 1
		display: flex
		flex-direction: column
		box-sizing: border-box
		padding: 32rpx 16rpx
		overflow-y: auto

		span
			margin-bottom: 16rpx
			font-size: 28rpx

		.start
			display: inline-block
			margin-top: 16rpx

		.special
			color: blue
			padding: 0 16rpx
			border-radius: 8rpx
			background: rgba(190, 190, 190, .4)

		.count
			color: blue
			padding: 0 16rpx
			border-radius: 8rpx
			background: rgba(190, 190, 190, .4)

		.number
			color: green
			padding: 0 16rpx
			border-radius: 8rpx
			background: rgba(190, 190, 190, .4)
</style>
