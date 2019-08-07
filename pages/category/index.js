import { request } from '../../request/index.js'
Page({
  data: {
    navList:[],
    rightList:[],
    //选中颜色
    currentIndex:0,
    //滚动条位置
    scrollTop:0
  },
  Cates:[],
  onLoad(){
  this.getNavList();
  },
  getNavList(){
    request({url:'/categories'})
    .then((res)=>{
      this.Cates = res
      console.log(res);
      const navList = this.Cates.map(v=>({cat_id:v.cat_id,cat_name:v.cat_name}))
      const rightList = this.Cates[0].children
      this.setData({
        navList,
        rightList
      })
    })   
  },
  handleMenuChange(e){
  console.log(e);
  // 选中那个根据index切换
  const {index} = e.currentTarget.dataset; 
  const rightList = this.Cates[index].children
  this.setData({
    currentIndex:index,
    rightList,
    scrollTop:0
  })
  }
})