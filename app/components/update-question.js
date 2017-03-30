import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    updateQuestion() {
      this.set('updateQuestion', true);
    },
    update(question) {
      var params = {
        name: this.get('name'),
        title: this.get('title'),
        post: this.get('post'),
        date: this.get('date'),
      };
      this.set('updateQuestion', false);
      this.sendAction('update', question, params);
    }
  }
});
