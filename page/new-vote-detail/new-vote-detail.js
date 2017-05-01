Page({
    data: {
        index: 0,
        date: '2016-09-01',
        time: '12:01',
        options: [],
        option: "",
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

    bindKeyInput: function(e) {
        this.setData({
            option: e.detail.value
        })
    },

    addOption: function(e) {
        var newOptions = this.data.options;
        newOptions.push(this.data.option);
        console.log(newOptions[0]);
        this.setData({
            options: newOptions,
            option: ""
        })
    }
});