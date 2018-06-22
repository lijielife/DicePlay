<template lang='pug'>
.container
	.click(
		@click='changeDices'
	)
	.dices
		img.dice(
			v-for='(item, index) of dices' :key='index'
			:src="diceImgs['dice' + item]"
		)
	.results
		span.straight(
			v-if='results.length === 1'
		) 顺子, 全部 0 个
		span.result(
			v-if='results.length > 1'
			v-for='(item, index) of results' :key='index'
		) {{item.count}} 个
			img.dice-small(
				:src="diceImgs['dice' + item.dice]"
			)
	button.help(
		@click='clickHelp'
	) ?
	ad(unit-id="adunit-ede294d3b4c78650")
</template>

<script>
import index from './index.coffee'

export default {
	...index
}
</script>

<style scoped lang='sass'>
$normalWidth: 100rpx

.container
	padding: 0

	.click
		width: 440rpx
		height: 92rpx
		margin-top: 80rpx
		border-radius: 46rpx
		background: url('~@/assets/button.png') no-repeat center center / auto 100%

		&:active
			box-shadow: 0 2rpx 4rpx 4rpx #d8d8d8 inset

	.dices
		margin-top: 16rpx
		text-align: center

		.dice
			display: inline-block
			height: $normalWidth
			width: $normalWidth

		.dice:nth-child(3)
			display: block
			margin-left: calc(50% - 50rpx)

		.dice:nth-child(2)
			margin-left: $normalWidth * 2

		.dice:nth-child(5)
			margin-left: $normalWidth * 2

	.results
		display: flex
		flex-wrap: wrap
		box-sizing: border-box
		border-left: 0
		border-bottom: 0
		margin: 16rpx 5% 0 5%

		.straight
			line-height: 96rpx
			width: 100%
			text-align: center
			font-size: 48rpx
			box-sizing: border-box
			color: #0000aa

		.result
			display: flex
			align-items: center
			justify-content: center
			width: 50%
			text-align: center
			font-size: 40rpx
			color: #333
			margin-top: 40rpx

		.dice-small
			display: inline-block
			height: 40rpx
			width: 40rpx
			margin-left: 16rpx

	.help
		position: absolute
		top: 100rpx
		right: 16rpx
		width: 80rpx
		height: 80rpx
</style>
