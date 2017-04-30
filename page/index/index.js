Page({
  // data
  data: {
      // swiper
      activities:['../resources/pic/1.jpg', '../resources/pic/2.jpg', '../resources/pic/1.jpg'],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 2000,
      duration: 500,

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

      // 模态
      array: ['中国', '美国', '巴西', '日本'],
      inputShowed: false,
      inputVal: "",
  }, 


  // swiper
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

// 模态
powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },
  util: function(currentStatu){
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200,  //动画时长
      timingFunction: "linear", //线性
      delay: 0  //0则不延迟
    });
    
    // 第2步：这个动画实例赋给当前的动画实例
    this.animation = animation;

    // 第3步：执行第一组动画
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存
    this.setData({
      animationData: animation.export()
    })
    
    // 第5步：设置定时器到指定时候后，执行第二组动画
    setTimeout(function () {
      // 执行第二组动画
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
      this.setData({
        animationData: animation
      })
      
      //关闭
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)
  
    // 显示
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  },


// picker
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },

    
     kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    },

    
  // 模态
  modalTap: function(e) {
    wx.showModal({
      title: "弹窗标题",
      content: "",
      showCancel: false,
      confirmText: "确定"
    })
  },
  noTitlemodalTap: function(e) {
    wx.showModal({
      content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
      confirmText: "确定",
      cancelText: "取消"
    })
  }
});