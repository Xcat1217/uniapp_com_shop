/*
通过mutation间接更新state的多个方法的对象
 */
import {RECEIVE_SWIPERIMGS, RECEIVE_CATITEMS, RECEIVE_FLOORDATA, RECEIVE_CATEGORIES} from './mutation-types.js'
import {reqSwiperImgs, reqCatItems, reqFloorData, reqCategories} from '../api/api.js'

export default {
  // 获取轮播图数据
  async getSwiperImgs ({commit, state}) {
	  const res = await reqSwiperImgs()
	  const swiperImgs = res.data.message
	  console.log(res)
	  commit(RECEIVE_SWIPERIMGS,{swiperImgs})
  },
  // 获取首页导航信息
  async getCatItems ({commit, state}) {
	  const res = await reqCatItems()
	  const catItems = res.data.message
	  console.log(res)
	  commit(RECEIVE_CATITEMS,{catItems})
  },
  // 获取首页导航信息
  async getFloorData ({commit, state}) {
	  const res = await reqFloorData()
	  const floorData = res.data.message
	  console.log(res)
	  commit(RECEIVE_FLOORDATA,{floorData})
  },
  // 获取商品分类信息
  async getCategories ({commit, state}) {
	  const res = await reqCategories()
	  const Cates = res.data.message
	  const leftCategories = Cates.map(v => v.cat_name)
	  const rightList = Cates[0].children
	  console.log(leftCategories, rightList)
	  commit(RECEIVE_CATEGORIES,{leftCategories, rightList})
  }
}