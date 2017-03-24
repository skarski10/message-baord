import Ember from 'ember';

export default Ember.Component.extend({
  addQuestion: false,
  actions: {
    questionForm() {
      this.set('addQuestion', true);
    },

    saveQuestion() {
      var params = {
        name: this.get('name'),
        title: this.get('title'),
        question: this.get('question'),
        date: this.get('date'),
      };
      this.set('addQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
