// pages/stories/stories.js
Page({

  /**
   * Page initial data
   */

  data: {
    stories: [],
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
    let page = this;

    // Get api data
    wx.request({
      url: "http://localhost:3000/api/v1/stories",
      method: 'GET',
      success(res) {
        const stories = res.data.stories;
        // Update local data
        page.setData({
          stories: stories
        });
        wx.hideToast();
      }
    });
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

  goToShowPage: function (event) {
    let id = event.currentTarget.dataset.id.id
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`
    })
  },
})