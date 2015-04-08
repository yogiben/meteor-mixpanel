Meteor.startup(function() {
    if (Meteor.settings && Meteor.settings.public && Meteor.settings.public.mixpanel) {
    	var mp = Meteor.settings.public.mixpanel;
        global.Mixpanel = Npm.require('mixpanel');
        global.mixpanel = Mixpanel.init(mp.token);
    }
})