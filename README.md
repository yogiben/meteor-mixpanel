# meteor-mixpanel
Client wrapper for MixPanel with optional user tracking

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
MixPanel lets you track users. If you set `identifyUsers` to `true`, users will be identified with the following code ([modified from Percolate Studio's package](https://github.com/percolatestudio/meteor-mixpanel))
```
{
  "public": {
    "mixpanel": {
      "token": "18c8346c615ee36b40d3d5c267285ad0",
      "identifyUsers": true
    }
  }
}
```

```
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
```
This is a 'one size fits all' solution. You pay want to modify this code and include it in your `Meteor.startup` functions instead of setting the `identifyUsers` property to `true`.
