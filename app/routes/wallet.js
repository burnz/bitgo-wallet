import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openModal: function(name) {
      debugger;
      $('.ui.' + name + '.modal').modal('show');
    }
  },
  controllerName: 'wallet'
});
