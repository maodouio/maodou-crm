Router.route('users', {
  template: 'users',
  path: '/users',
  waitOn: function () {
    return Meteor.subscribe('users');
  },
  data: {
    users: function(){
      return  Meteor.users.find({}, {sort: {createdAt: -1}});
    }
  }
});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  pwd
]);

// Accounts.ui.config({
//   passwordSignupFields: 'USERNAME_AND_EMAIL'
// });