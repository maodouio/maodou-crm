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