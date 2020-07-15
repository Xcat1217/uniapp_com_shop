// 封装ajax请求模块

// 配置BASE_URL地址
const BASE_URL = 'https://api-hmugo-web.itheima.net/api/public/v1/'

export const myRequst = (options) => {
	return new Promise ((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method:options.method || 'GET',
			data:options.data || {},
			success: (res) => {
				if (res.data.meta.status !== 200 || res.data.error_code !== 0) {
					
				}
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}