/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import {myRequst} from './requst.js'

// 获取轮播图数据
export const reqSwiperImgs = () => myRequst({
	url:'home/swiperdata'
})
// 获取首页导航信息
export const reqCatItems = () => myRequst({
	url:'home/catitems'
})
// 获取商品楼层信息
export const reqFloorData = () => myRequst({
	url:'home/floordata'
})