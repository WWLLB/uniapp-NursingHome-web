<!-- <template>
	<view>
		这是list页面
		<button @click='goHome'>返回上一页</button>
	</view>
</template>

<script>
	export default{
		methods(){
			return {
				goHome(){
					uni.navigateBack();
				}
			}
		}
	}
</script>

<style>
</style>
 -->
<template>
	<view class="content">
	<view class="text-area">
	  <button class="button-left" @click="gonews2">美食街</button>
	  <text class="title">{{title}}</text>
	  <button class="button-right" @click="gonews">小吃街</button>
	</view>
		<image class="logo" src="/static/images/盐水鸭2.jfif"></image>
		<!-- <view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '“盐水鸭是南京著名的特产，属金陵菜，是金陵菜的代表之一，又叫桂花鸭，是中国地理标志产品。因南京有“金陵”别称，故也称“金陵盐水鸭”，久负盛名，至今已有两千五百多年历史。南京盐水鸭制作历史悠久，积累了丰富的制作经验。鸭皮白肉嫩、肥而不腻、香鲜味美，具有香、酥、嫩的特点。而以中秋前后，桂花盛开季节制作的盐水鸭色味最佳，名为桂花鸭。”'
			}
		},
		onLoad() {

		},
		methods: {
			// goList(){
			// 		uni.navigateTo({
			// 			url:'/pages/List/list'
			// 		})
			// 	},
			// 	gonews(){
			// 			uni.redirectTo({
			// 				url:'/pages/news/news'
			// 			})

			// 		},
				gonews(){
						uni.navigateTo({
				 			url:'/pages/news/news'
						})
				},
				gonews2(){
						uni.navigateTo({
				 			url:'/pages/menu1'
						})
				}	
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
  height: 50vh;
  width: 90vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

	.text-area {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  flex-direction: row;
	  font-size: 36rpx;
	}

	.title {
	  font-size: 15rpx;
	  color: #000000;
	  font-weight: bold;
	}
	
	.button-left {
	  margin-right: 20px;
	}
	
	.button-right {
	  margin-left: 20px;
	}
	
	
</style>
