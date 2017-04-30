Page({
    data: {
        index: 0,
        date: '2016-09-01',
        time: '12:01'
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
    }
});