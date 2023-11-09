<template>
	<view class="content">

		<button @click='gonews'>小吃街</button>
		<button @click='gonews2'>美食街</button>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<image class="logo" src="/static/images/鸭血粉丝.jfif"></image>
		
		<view class="text-area">
			<text class="title">{{title1}}</text>
		</view>
		<image class="logo" src="/static/images/臭豆腐.jfif"></image>
		
		<view class="text-area">
			<text class="title">{{title2}}</text>
		</view>
		<image class="logo" src="/static/images/夫子庙冰糖葫芦.jfif"></image>
		
		<view class="text-area">
			<text class="title">{{title3}}</text>
		</view>
		<image class="logo" src="/static/images/灌汤包.jfif"></image>
		
		<view class="text-area">
			<text class="title">{{title4}}</text>
		</view>
		<image class="logo" src="/static/images/桂花糕.jfif"></image>
		
		<view class="text-area">
			<text class="title">{{title5}}</text>
		</view>
		<image class="logo" src="/static/images/烙饼.jfif"></image>
		
		<view class="text-area">
			<text class="title">{{title6}}</text>
		</view>
		<image class="logo" src="/static/images/梅花糕jfif.jfif"></image>
		
		<view class="text-area">
			<text class="title">{{title7}}</text>
		</view>
		<image class="logo" src="/static/images/南京板鸭.jfif"></image>
		
		<view class="text-area">
			<text class="title">{{title8}}</text>
		</view>
		<image class="logo" src="/static/images/牛肉锅贴.jfif"></image>
		
		<view class="text-area">
			<text class="title">{{title9}}</text>
		</view>
		<image class="logo" src="/static/images/石汤圆.jfif"></image>
		
		<view class="text-area">
			<text class="title">{{title10}}</text>
		</view>
		<image class="logo" src="/static/images/汤包.jfif"></image>
		
		<view class="text-area">
			<text class="title">{{title11}}</text>
		</view>
		<image class="logo" src="/static/images/盐水鸭.jfif"></image>
		
		<view class="text-area">
			<text class="title">{{title12}}</text>
		</view>
		<image class="logo" src="/static/images/紫薯糕.jfif"></image>
		
		<view class="text-area">
			<text class="title">{{title13}}</text>
		</view>
		<image class="logo" src="/static/images/猪肉生煎包.jfif"></image>
		
		<view class="text-area">
			<text class="title">{{title14}}</text>
		</view>
		<image class="logo" src="/static/images/盐水鸭1.jfif"></image>
		
		<view class="text-area">
			<text class="title">{{title15}}</text>
		</view>
		<image class="logo" src="/static/images/盐水鸭2.jfif"></image>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '鸭血粉丝',
				title1: '臭豆腐',
				title2: '夫子庙冰糖葫芦',
				title3: '灌汤包',
				title4: '桂花糕',
				title5: '烙饼',
				title6: '梅花糕',
				title7: '南京板鸭',
				title8: '牛肉锅贴',
				title9: '石汤圆',
				title10: '汤包',
				title11: '盐水鸭',
				title12: '紫薯糕',
				title13: '猪肉生煎包',
				title14: '盐水鸭1',
				title15: '盐水鸭2',
				
			}
		},
		onLoad() {

		},
		methods: {

			gonews() {
				uni.navigateTo({
					url: '/pages/news/news'
				})
			},
			gonews2() {
				uni.navigateTo({
					url: '/pages/youname/youname'
				})
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
	  height: 30vh;
	  width: 90vw;
	  margin-top: 5vh;
	  margin-bottom: 5vh;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
