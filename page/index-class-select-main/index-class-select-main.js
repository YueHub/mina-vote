var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  // data
  data: {
    // tabs
    voteTabs: ["综合", "纯干货", "给分高", "实践性强", "签到少"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    // list 
    list: [
      {
        id: 'view',
        title: '课程名称/老师',
        content: 'xxxxxxxxx',
        otherInfo: '其它的什么信息',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }, {
        id: 'view',
        title: '课程名称/老师',
        content: 'yyyyyyyyyyyyyyy',
        otherInfo: '其它的什么信息',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      },{
        id: 'view',
        title: '课程名称/老师',
        content: 'zzzzzzzzzzzzzzz',
        otherInfo: '其它的什么信息',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }
    ],


  }, 
// voteTabs
onLoad: function () {
  var that = this;
  wx.getSystemInfo({
    success: function(res) {
      that.setData({
        sliderLeft: (res.windowWidth / that.data.voteTabs.length - sliderWidth) / 2,
        sliderOffset: res.windowWidth / that.data.voteTabs.length * that.data.activeIndex
      });
    }
  });
},
tabClick: function (e) {
  this.setData({
    sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
});