<template>
	<view class="pages-index">
		<!-- 搜索框区域 -->
		<search-input></search-input>
		<!-- 首页轮播图区域 -->
		<swiper class="swiper" indicator-dots autoplay circular interval="3000" duration="500">
			<swiper-item :key="item.goods_id" v-for="item in swiperImgs">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>
		<!-- 首页导航区域 -->
		<view class="index-nav">
			<navigator v-for="item in catItems" :key="item.name">
				<image mode="widthFix" :src="item.image_src"></image>
			</navigator>
		</view>
		<!-- 商品楼层区域 -->
		<view class="index-floor">
			<view class="floor-group" :key="index1" v-for="(item1,index1) in floorData">
				<view class="floor-title">
					<image :src="item1.floor_title.image_src" mode="widthFix"></image>
				</view>
				<view class="floor-list">
					<navigator :key="index2" v-for="(item2,index2) in item1.product_list">
						<image :src="item2.image_src" :mode="index2===0?'widthFix':'scaleToFill'"></image>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import searchInput from '../../components/search/search.vue'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.$store.dispatch('getSwiperImgs')
			this.$store.dispatch('getCatItems')
			this.$store.dispatch('getFloorData')
		},
		computed:{
			...mapState(['swiperImgs']),
			...mapState(['catItems']),
			...mapState(['floorData'])
		},
		methods: {

		},
		components: {
			'search-input' : searchInput
		}
	}
</script>

<style lang="scss">
.swiper{
		width: 750rpx;
		height: 380rpx;
		image{
			height: 100%;
			width: 100%;
		}
	}
.index-nav{
	display: flex;
	navigator{
		flex: 1;
		padding: 20rpx;
		image{
			width: 100%;
		}
	}
}
.index-floor{
	.floor-group{
		.floor-title{
			margin: 10rpx;
			image{
				width: 100%;
			}
		}
		.floor-list{
			overflow: hidden;
			navigator{
				float: left;
				width: 33.33%;
				box-sizing: border-box;
				border-radius: 20rpx;
				&:nth-last-child(-n+4){
					height: 27.72vw;
					border-left: 10rpx solid #FFFFFF;
				}
				&:nth-child(2),
				&:nth-child(3){
					border-bottom: 10rpx solid #FFFFFF;
				}
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		
	}
}
</style>
