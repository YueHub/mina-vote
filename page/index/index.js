
Page({
  // data
  data: {
    // courses
    courses: [
          {
              "courseNo" : "001",
              "courseName" : "用户体验设计/陈妍",
              "courseDesc" : "腾讯传奇部门CDC倾情传授",
              "courseType" : "艺术课",
              "courseScore" : "9.5",
              "evaluation" : [ 
                  {
                      name : "纯干货",
                      data : 90,
                  }, 
                  {
                      
                      name : "给分高",
                      data : 95,
                  }, 
                  {
                      name : "实践性",
                      data : 100,
                  }, 
                  {
                      name : "签到少",
                      data : 666,
                  }
              ]
          }, {
              "courseNo" : "002",
              "courseName" : "动漫欣赏与实践/王伟",
              "courseDesc" : "教你学会动漫欣赏",
              "courseType" : "艺术课",
              "courseScore" : 9.4,
              "evaluation" : [ 
                  {
                      name : "纯干货",
                      data : 85,
                  }, 
                  {
                      
                      name : "给分高",
                      data : 45,
                  }, 
                  {
                      name : "实践性",
                      data : 35,
                  }, 
                  {
                      name : "签到少",
                      data : 85,
                  }
              ]
          },{
              "courseNo" : "003",
              "courseName" : "计算机动画/许捷",
              "courseDesc" : "教你学会计算机动画",
              "courseType" : "艺术课",
              "courseScore" : "9.4",
              "evaluation" : [ 
                  {
                      name : "纯干货",
                      data : 75,
                  }, 
                  {
                      
                      name : "给分高",
                      data : 55,
                  }, 
                  {
                      name : "实践性",
                      data : 25,
                  }, 
                  {
                      name : "签到少",
                      data : 95,
                  }
              ]
          },{
              "courseNo" : "004",
              "courseName" : "国画技法/李维红",
              "courseDesc" : "教你学会国画技法",
              "courseType" : "艺术课",
              "courseScore" : "9.4",
              "evaluation" : [ 
                  {
                      name : "纯干货",
                      data : 95,
                  }, 
                  {
                      
                      name : "给分高",
                      data : 95,
                  }, 
                  {
                      name : "实践性",
                      data : 95,
                  }, 
                  {
                      name : "签到少",
                      data : 95,
                  }
              ]
          },{
              "courseNo" : "005",
              "courseName" : "导演制作/王强",
              "courseDesc" : "教你学会导演制作",
              "courseType" : "艺术课",
              "courseScore" : "9.4",
              "evaluation" : [ 
                  {
                      name : "纯干货",
                      data : 95,
                  }, 
                  {
                      
                      name : "给分高",
                      data : 95,
                  }, 
                  {
                      name : "实践性",
                      data : 95,
                  }, 
                  {
                      name : "签到少",
                      data : 95,
                  }
              ]
          },{
              "courseNo" : "006",
              "courseName" : "场景设计/王伟",
              "courseDesc" : "教你学会场景设计",
              "courseType" : "艺术课",
              "courseScore" : "9.3",
              "evaluation" : [ 
                  {
                      name : "纯干货",
                      data : 45,
                  }, 
                  {
                      
                      name : "给分高",
                      data : 35,
                  }, 
                  {
                      name : "实践性",
                      data : 25,
                  }, 
                  {
                      name : "签到少",
                      data : 15,
                  }
              ]
          }
          
        ],

    // swiper
    activities:['../resources/activities/activity-1.jpg', '../resources/activities/activity-2.jpg', '../resources/activities/activity-3.jpg', '../resources/activities/activity-4.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,

    // 模态
    collegeIndex: 0,
    majorIndex: 0,
    colleges: ['软件与微电子学院', '数学科学学院','物理学院', '化学与分子工程学院', '生命科学学院', '城市与环境学院', '地球与空间科学学院',
     ,'心理与认知科学学院', '建筑与景观设计学院', '信息科学技术学院', '工学院', '环境科学与工程学院', '计算机科学技术研究所',],
    majors: ['大数据与云计算', '软件工程技术', '机器学习', '人工智能', '系统软件', '应用软件开发'],
    inputShowed: false,
    inputVal: "",
  }, 
 
  onShow: function () {
    // 请求课程数据
    wx.request({
      url: '127.0.0.1', 
      data: {
       
      },
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
      },
      fail: function(res) {
        
      }
    })
  },

  // pull refresh
  onPullDownRefresh: function () {
    wx.showToast({
      title: 'loading...',
      icon: 'loading'
    })
    console.log('onPullDownRefresh', new Date())
  },
  stopPullDownRefresh: function () {
    wx.stopPullDownRefresh({
      complete: function (res) {
        wx.hideToast()
        console.log(res, new Date())
      }
    })
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

  // search 
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
  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu);
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
        // 跳转到选课主页
        wx.navigateTo({
          url: '../index-class-select-main/index-class-select-main'
        });
        
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
  bindCollegePickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      collegeIndex: e.detail.value
    })
  },
  bindMajorPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      majorIndex: e.detail.value
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
  },
  
  // noteGraph
  noteGraph: function(e) {
    var evaluation = e.currentTarget.dataset.evaluation;

    wx.navigateTo({
      url: '../vote-graph/vote-graph?evaluation=' + JSON.stringify(evaluation)
    });
  }
});