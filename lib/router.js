// Router.route('/users', function () {
//   this.render('users');
// });

Router.route('/users', function () {
  this.render('users', {
    data: {
      users: function(){
        return  Meteor.users.find({}, {sort: {createdAt: -1}});
      }
    }

  });
});