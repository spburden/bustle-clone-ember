import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    saveArticle1() {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        image: this.get('image'),
        author: this.get('author'),
        date: moment.now().valueOf()
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle2', params);

    }
  }
});
