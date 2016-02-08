Meteor.startup(function() {
  if (Meteor.settings && Meteor.settings.public && Meteor.settings.public.mixpanel) {

    var mp = Meteor.settings.public.mixpanel;

    // Allows you to send events
    if (mp.token) {
      mixpanel.init(mp.token)
    }
  } else {
    // mixpanel.track will cause an error as it is undefined unless
    // the mixpanel.init is called with the right key
    mixpanel.track = function() {
      return;
    }
    mixpanel.identify = function() {
      return;
    }
    mixpanel.people = {
      set: function(){
        return;
      }
    }
  }
})
