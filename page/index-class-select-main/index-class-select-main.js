var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  // data
  data: {
    // tabs
    voteTabs: ["综合", "纯干货", "给分高", "实践性强", "签到少"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    // coursesSet 
    coursesSet1: [
          {
              "courseNo" : "001",
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "xxxxx倾情传授",
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
          }
        ],
  coursesSet2: [
          {
              "courseNo" : "001",
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "xxxxx传授",
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
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "教你学会xxxxx",
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
          }
        ],
  coursesSet3: [
          {
              "courseNo" : "001",
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "xxxxx倾情传授",
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
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "教你学会xxxxx",
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
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "教你学会xxxxx",
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
          }
        ],
    coursesSet4: [
          {
              "courseNo" : "001",
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "xxxxx倾情传授",
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
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "教你学会xxxxx",
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
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "教你学会xxxxx",
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
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "教你学会xxxxx",
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
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "教你学会xxxxx",
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
          }
        ],
    coursesSet5: [
          {
              "courseNo" : "001",
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "xxxxx倾情传授",
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
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "教你学会xxxxx",
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
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "教你学会xxxxx",
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
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "教你学会xxxxx",
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
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "教你学会xxxxx",
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
              "courseName" : "xxxxxx/xx",
              "courseDesc" : "教你学会xxxxx",
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
// noteGraph
noteGraph: function(e) {
  var evaluation = e.currentTarget.dataset.evaluation;

  wx.navigateTo({
    url: '../vote-graph/vote-graph?evaluation=' + JSON.stringify(evaluation)
  });
}

});

