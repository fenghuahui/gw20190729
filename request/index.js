export const request = (params)=>{
  // 设置公共接口前缀
  const baseUrl = 'https://api.zbztb.cn/api/public/v1';
  return new Promise((resolve,reject)=>{
    var reqTask = wx.request({
      // 展开
      ...params,
      //设置url
      url:baseUrl+params.url,
      success: (result) => {
        resolve(result.data.message)
      },
      fail: (err) => {
        reject(err)
      }
    });    
  })
}