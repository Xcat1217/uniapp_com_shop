<template>
	<view class="category">
		<!-- 搜索框区域 -->
		<search-input></search-input>
		<!-- 商品分类区域 -->
		<view class="category-container">
			<!-- 左侧菜单区域 -->
			<scroll-view scroll-y class="container-left">
				<view @click="handleItemTap(index)" :class="index===currentIndex?'active':''" class="left-item" v-for="(item,index) in leftCategories" :key="index">{{item}}</view>
			</scroll-view>
			<!-- 右侧商品区域 -->
			<scroll-view scroll-y class="container-right">
				<view class="goods-group" v-for="(item1,index1) in rightList" :key="index1">
					<view class="goods-title">（ {{item1.cat_name}} )</view>
					<view class="goods-list">
						<navigator v-for="(item2,index2) in item1.children" :key="item2.cat_id">
							<image :src="item2.cat_icon" mode="widthFix"></image>
							<view class="goods-name">{{item2.cat_name}}</view>
						</navigator>
					</view>
				</view>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	import searchInput from '../../components/search/search.vue'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				// 被点击的左侧菜单
				currentIndex:0,
			}
		},
		onLoad() {
			this.$store.dispatch('getCategories')
		},
		computed:{
			...mapState(['leftCategories','rightList'])
		},
		methods: {
			// 左侧菜单的点击事件
			handleItemTap (i) {
				this.currentIndex = i
			}
		},
		components:{
			'search-input':searchInput
		}
	}
</script>

<style lang="scss">
.category{
	width: 100%;
	.category-container{
		height: calc(100vh - 90rpx);
		display: flex;
		.container-left{
			flex: 2;
			.left-item{
				height: 80rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30rpx;
			}
			.active{
				color: #f10e2c;
				border-left: 5rpx solid #f10e2c;
			}
		}
		.container-right{
			flex: 5;
			.goods-group{
				.goods-title{
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 10rpx 0;
					padding-top: 10rpx;
					color: #f10e2c;
					font-size: 45rpx;
				}
				.goods-list{
					display: flex;
					flex-wrap: wrap;
					navigator{
						width: 33.33%;
						text-align: center;
						image{
							width: 50%;
						}
						.goods-name{
							font-size: 30rpx;
						}
					}
				}
			}
		}
	}
}
</style>
