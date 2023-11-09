<template>
	<view>
		<view class="content">
				<text>\n南京街巷小吃</text>
	
		
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="flase" :autoplay="autoplay" :interval="4000"
				:duration="3500">
				<swiper-item>
					<view class="swiper-item1 bg-image"></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item1 bg-image1"></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item1 bg-image2"></view>
				</swiper-item>
			</swiper>
		</view>
		
		
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="flase" :autoplay="autoplay" :interval="3000"
				:duration="3000">
				<swiper-item>
					<view class="swiper-item1 bg-image11"></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item1 bg-image22"></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item1 bg-image33"></view>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				
				<text>\n纵向滑动</text>
			</view>
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
				@scrolltolower="lower" @scroll="scroll">
				<view id="demo1" class="scroll-view-item bg-image"></view>
				<view id="demo2" class="scroll-view-item bg-image1"></view>
				<view id="demo3" class="scroll-view-item bg-image2"></view>
			</scroll-view>
		</view> -->
			<!-- <view @tap="goTop" class="uni-link uni-center uni-common-mt">
				点击这里返回顶部
			</view> -->
		
			<view class="uni-title uni-common-mt">
			
				<text>\n欢迎来到小吃街</text>
				
				
		<view class="uni-margin-wrap1">
			
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
						@scrolltolower="lower" @scroll="scroll">
						<swiper-item>
							<view class="swiper-item1 bg-image"></view>
						</swiper-item>
						<view id="demo1" class="scroll-view-item bg-image"></view>
						<!-- <view id="demo2" class="scroll-view-item bg-image1"></view> -->
						<!-- <view id="demo3" class="scroll-view-item bg-image2"></view> -->
					</scroll-view>
			
		</view>	
			
			
			
		
				
			<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
			
			
					<!-- <view class="uni-margin-wrap">
						<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
							:duration="duration">
							<swiper-item>
								<view class="swiper-item bg-image"></view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item bg-image1"></view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item bg-image2"></view>
							</swiper-item>
						</swiper>
					</view>
					 -->
					<view class="swiper-list" style="display: none;">
						<view class="uni-list-cell uni-list-cell-pd">
							<view class="uni-list-cell-db">指示点</view>
							<switch :checked="indicatorDots" @change="changeIndicatorDots" />
						</view>
						<view class="uni-list-cell uni-list-cell-pd">
							<view class="uni-list-cell-db">自动播放</view>
							<switch :checked="autoplay" @change="changeAutoplay" />
						</view>
					</view>
					
				<view class="uni-padding-wrap" style="display:none;">
				  <view class="uni-common-mt">
				    <text>幻灯片切换时长(ms)</text>
				    <text class="info">{{duration}}</text>
				  </view>
				  <slider @change="durationChange" :value="duration" min="500" max="2000" />
				  <view class="uni-common-mt">
				    <text>自动播放间隔时长(ms)</text>
				    <<text class="info">{{interval}}</text>
				  </view>
				  <slider @change="intervalChange" :value="interval" min="2000" max="10000" />
				</view> 
				</view>
			
	
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				title:'南京',
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		methods: {
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			}
		}
	}
</script>
<script>
export default {
    data() {
        return {
            background: ['color1', 'color2', 'color3'],
            indicatorDots: true,  
            autoplay: true,//自动播放
            interval: 5000,
            duration: 5000
        }
    },
    methods: {
        changeIndicatorDots(e) {
            this.indicatorDots = !this.indicatorDots
        },
        changeAutoplay(e) {
            this.autoplay = !this.autoplay
        },
        intervalChange(e) {
            this.interval = e.target.value
        },
        durationChange(e) {
            this.duration = e.target.value
        }
    }
}
</script>

<style>
  @import '@/static/style1.css';

</style>
