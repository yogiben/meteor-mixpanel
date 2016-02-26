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
3. `mixpanel.track('purchase, {productId: 1})`

## Easy Tracking of users on the client ##
MixPanel lets you track users.

Add this somewhere in your code e.g. `/client/lib/`

```javascript
// This is an example.

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

## Mixpanel on the server ##
Biggest difference to client API is associated events with users. See the [api](https://github.com/mixpanel/mixpanel-node) for more details.
