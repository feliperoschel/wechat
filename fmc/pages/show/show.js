// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {
    stories: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${options.id}`,
      method: 'GET',
      success(res) {
        const story = res.data.story;
        page.setData({
          stories: story
        });
        wx.hideToast();
      }
    });
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

  goToEditPage: function (event) {
    let id = event.currentTarget.dataset.id.id
    wx.navigateTo({
      url: `/pages/edit/edit?id=${id}`
    })
  },


  deleteStory: function (event) {

    let id = event.currentTarget.dataset.id.id

    wx.request({
      url: `http://localhost:3000/api/v1/stories/${id}`,
      method: 'DELETE',
      success() {
        wx.reLaunch({
          url: '/pages/stories/stories'
        });
      }
    });
  },


})