Page({
  data:{
    expressCom:"sf",
    expressNum:"",
    expressInfo:null,
    company: [
      {
        "com": "顺丰",
        "no": "sf",
        "checked":"true"
      },
      {
        "com": "申通",
        "no": "sto"
      },
      {
        "com": "圆通",
        "no": "yt"
      },
      {
        "com": "韵达",
        "no": "yd"
      },
      {
        "com": "天天",
        "no": "tt"
      },
      {
        "com": "EMS",
        "no": "ems"
      },
      {
        "com": "中通",
        "no": "zto"
      },
      {
        "com": "德邦",
        "no": "db"
      },
      {
        "com": "京东快递",
        "no": "jd"
      }
    ]
  },
  radioChange:function(e)
  { 
    //console.log(e.detail.value);
    //更新快递公司编号
    this.setData({
      expressCom:e.detail.value
    })
  },

  expressNumInput:function(e)
  {
    //更新快递单号
    this.setData({
      expressNum:e.detail.value
    })
  },

  queryBtn:function()
  {
    var that = this;
    var expressCom=this.data.expressCom;//获取快递公司编号
    var expressNum=this.data.expressNum;//获取快递单号
    //console.log(expressCom,expressNum);
    //根据快递公司编号和快递公司单号调用快递查询API接口
    wx.request({
      url:"https://v.juhe.cn/exp/index",
      data:{
        key:"53e570d85ad11bb70255f72daab73481",
        com:expressCom,
        no:expressNum
      },
      success:function(res){
        console.log(res.data.result.list);//这里可以不注释，打这个log方便了在vConsole上进行调试
        that.setData({
          expressInfo: res.data.result.list
        })
      }
    })
  }
})

//快递号：804331325676604797 圆通