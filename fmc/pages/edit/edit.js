// pages/edit/edit.js
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

  formSubmit: function (event) {

    let id = this.data.stories.id

    let story = {
      name: event.detail.value.name,
      content: event.detail.value.content
    }

    wx.request({
      url: `http://localhost:3000/api/v1/stories/${id}`,
      method: 'PUT',
      data: story,
      success(res) {
        // console.log(res)
        wx.navigateTo({
          url: `/pages/show/show?id=${id}`
        }) 
      }
    });
  },
})
