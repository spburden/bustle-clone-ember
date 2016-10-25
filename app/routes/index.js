import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },

  actions: {
    saveArticle3(params) {
      var newArticle = this.store.createRecord('article', params);
      newRental.save();
      this.transitionTo('index');
    },

    // destroyArticle (article) {
    //   article.destroyRecord();
    //   this.transitionTo('index');
    // }
    }
});
