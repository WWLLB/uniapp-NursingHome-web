<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			
				
			<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
			
			
					<view class="uni-margin-wrap">
						<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
							:duration="duration">
							<swiper-item>
								<view class="swiper-item bg-image3"></view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item bg-image4"></view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item bg-image5"></view>
							</swiper-item>
						</swiper>
					</view>
					
					<view class="swiper-list">
						<view class="uni-list-cell uni-list-cell-pd">
							<view class="uni-list-cell-db">指示点</view>
							<switch :checked="indicatorDots" @change="changeIndicatorDots" />
						</view>
						<view class="uni-list-cell uni-list-cell-pd">
							<view class="uni-list-cell-db">自动播放</view>
							<switch :checked="autoplay" @change="changeAutoplay" />
						</view>
					</view>
					
					<view class="uni-padding-wrap">
						<view class="uni-common-mt">
							<text>幻灯片切换时长(ms)</text>
							<text class="info">{{duration}}</text>
						</view>
						<slider @change="durationChange" :value="duration" min="500" max="2000" />
						<view class="uni-common-mt">
							<text>自动播放间隔时长(ms)</text>
							<text class="info">{{interval}}</text>
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
            autoplay: true,
            interval: 2000,
            duration: 500
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
