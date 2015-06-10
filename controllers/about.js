Blogger.AboutController = Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
    showRealName: function() {
      alert('Dracula is not real');
    },
     showPicture: function() {
       this.set('isPictureShowing', true);
   },
      hidePicture: function() {
        this.set('isPictureShowing', false);
      }
  }
});