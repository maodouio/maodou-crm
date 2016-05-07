Meteor.methods({
  upgradeToAdmin: function(userId) {
    console.log('upgradeToAdmin on server side, user id is ', userId);
    Roles.addUsersToRoles(userId, ['admin']);
  },

  upgradeToMember: function(userId) {
    console.log('upgradeToMember on server side, user id is ', userId);
    Roles.addUsersToRoles(userId, ['member']);
  },

  downgradeToUser: function(userId) {
    console.log('downgradeToUser on server side, user id is ', userId);
    //Roles.addUsersToRoles(userId, ['user']);
    Roles.setUserRoles(userId, ['']);
    Roles.addUsersToRoles(userId, ['user']);
  }
});