Template.users.helpers({
  isAdmin: function() {
    console.log(this);
    
    if (Roles.userIsInRole(this._id, ['admin']))
      return true;

    return false;
  }
});

Template.users.events({
  'click #upgrade'(event, instance) {
    console.log('Upgrade to admin');
    console.log(event);
    console.log(instance);
    console.log(this);
    // Roles.addUsersToRoles(this._id, ['admin']);

    var userId = this._id;
    Meteor.call("upgradeToAdmin", userId, function(e, r) {
    });
  },
  'click #downgrade'(event, instance) {
    console.log('Downgrade to user');
    console.log(event);
    console.log(instance);
    console.log(this);
    // Roles.addUsersToRoles(this._id, ['admin']);

    var userId = this._id;
    Meteor.call("downgradeToUser", userId, function(e, r) {
    });
  },
});