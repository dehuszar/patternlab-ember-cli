import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function() {
        this.$('.sg-acc-handle').on('click', function() {
            Ember.$(this).toggleClass('active');
            Ember.$(this).next().toggleClass('active');
        });
    }
});
