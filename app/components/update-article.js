import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleForm() {
      this.set('updateArticleForm', true);
    },
    update(article) {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        image: this.get('image'),
        author: this.get('author'),
        date: moment.now().valueOf()
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});
