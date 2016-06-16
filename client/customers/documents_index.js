Template.customersIndex.rendered = function() {
};

Template.customersIndex.helpers({
  sayHello: function () {
    return "Hallo!";
  }
});

Template.customersIndex.events ({
  'click .delete-customer': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("Are you sure?")) {
      Customers.remove(item._id);
      console.log("Deleted!")
    }
  }
});
