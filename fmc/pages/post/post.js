// pages/post/post.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    // formReset
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  formSubmit: function (e) {
    let story = {
      name: e.detail.value.name,
      text: e.detail.value.content
    }

    wx.request({
      url: `http://localhost:3000/api/v1/stories`,
      method: 'POST',
      data: story,
      success(res) {
        // console.log(res)
        wx.reLaunch({
          url: '/pages/stories/stories'
        });
      }
    });
  }
})