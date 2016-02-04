# Meteor Mixpanel
Client and Server wrapper for MixPanel with optional user tracking

## Quick Start ###
1. `meteor add yogiben:mixpanel`
2. Include your token in the `public` object in your `settings.json`.
```
{
  "public": {
    "mixpanel": {
      "token": "18c8346c615ee36b40d3d5c267285ad0"
    }
  }
}
```

## Easy Tracking of users ##
MixPanel lets you track users.

Add this somewhere in your code e.g. `/client/lib/`

```
// Client
Meteor.startup(function() {
  Tracker.autorun(function() {
    var user = Meteor.user();
    if (!user) return;
    mixpanel.identify(user._id);

    person = {
      "Name": user.profile.firstName + ' ' + user.profile.lastName,

      // special mixpanel property names
      "$first_name": user.profile.firstName,
      "$last_name": user.profile.lastName,
      "$email": user.emails[0].address,
      "$created": user.createdAt.toISOString()
    }

    mixpanel.people.set(person);
  });
};
```
This is a 'one size fits all' solution. You pay want to modify this code and include it in your `Meteor.startup` functions instead of setting the `identifyUsers` property to `true`.
