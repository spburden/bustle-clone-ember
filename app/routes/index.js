import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },
  // two() {
  //   this.store.findAll('article');
  //   var sentence = article.body.split('\n')[0];
  //   return sentence
  // }

  actions: {
    saveArticle3(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('index');
    }
  }
});
