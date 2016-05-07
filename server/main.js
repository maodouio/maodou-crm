import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Accounts.onCreateUser(function(options, user) {
  console.log('--- onCreateUser ---');
  console.log(options);
  console.log(user);
  console.log(user._id);

  return user;
});

Accounts.onLogin(function(user){
  console.log('--- onLogin ---');
  console.log(user);

  var userNumber = Meteor.users.find().count();
  console.log('userNumber = ', userNumber);

  if (userNumber === 1) {
    console.log('The first signup user is admin by default');
    Roles.addUsersToRoles(user.user._id, ['admin']);
  }

  // Every user has role of 'user' by default
  Roles.addUsersToRoles(user.user._id, ['user']);

});
