Meteor.startup(function() {
    if (Meteor.settings && Meteor.settings.public && Meteor.settings.public.mixpanel) {

        var mp = Meteor.settings.public.mixpanel;

        // Allows you to send events
        if (mp.token) {
            mixpanel.init(mp.token)
        }

        // One size fits all user identifying
        // Copied from https://github.com/percolatestudio/meteor-mixpanel
        if (mp.identifyUsers) {
            Tracker.autorun(function() {
                var user = Meteor.user();
                if (!user) return;
                mixpanel.identify(user._id);
                mixpanel.people.set({
                    "Name": user.profile.firstName + ' ' + user.profile.lastName,
                    // special mixpanel property names
                    "$first_name": user.profile.firstName,
                    "$last_name": user.profile.lastName,
                    "$email": user.emails[0].address,
                    "$created": user.createdAt.toISOString()
                });
            });
        }
    }
})