/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {RECEIVE_SWIPERIMGS, RECEIVE_CATITEMS, RECEIVE_FLOORDATA} from './mutation-types.js'

export default {
  [RECEIVE_SWIPERIMGS] (state, {swiperImgs}) {
    state.swiperImgs = swiperImgs
  },
  [RECEIVE_CATITEMS] (state,{catItems}) {
	 state.catItems = catItems
  },
  [RECEIVE_FLOORDATA] (state,{floorData}) {
	 state.floorData = floorData
  },
}