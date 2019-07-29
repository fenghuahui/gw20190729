import { request } from '../../request/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图
    swiperList:[],
    catitemsList:[],
    floordataList:[]

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    //获取轮播图
   this.getSwiperList();
   this.getCatitemsList();
   this.getFloordataList();
  },
  //获取轮播图
  getSwiperList(){
    request({
      url:'/home/swiperdata'
    }).then((res)=>{
      // console.log(res);
      this.setData({
        swiperList:res
      })
    })
  },
  //获取分类目录
  getCatitemsList(){
    request({
      url:'/home/catitems'
    }).then((res)=>{
      // console.log(res);
      this.setData({
        catitemsList:res
      })
    })
  },
  //获取楼层广告
  getFloordataList(){
    request({ url:'/home/floordata'})
    .then((res)=>{
      console.log(res);
      this.setData({
        floordataList:res
      })
    })
  }
})
