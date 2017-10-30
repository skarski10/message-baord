import Ember from 'ember';

export default Ember.Component.extend({
  addAnswer: false,
  actions: {
    showAnswer() {
      this.set('addAnswer', true);
    },
    saveAnswer() {
      var params = {
        name: this.get('name'),
        answer: this.get('answer'),
        date: this.get('date'),
        question: this.get('question')
      };
      this.set('addAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
