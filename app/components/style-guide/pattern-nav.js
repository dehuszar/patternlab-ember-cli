import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function() {
        this.$('.sg-acc-handle').on('click', function() {
            $(this).toggleClass('active');
            $(this).next().toggleClass('active');
        });
    }
});
