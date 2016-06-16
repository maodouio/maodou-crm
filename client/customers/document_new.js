Template.customerNew.rendered = function() {
};

Template.customerNew.helpers({
});

Template.customerNew.events ({
});

AutoForm.addHooks(['customerForm'], {
  after: {
    insert: function(error, result) {
      if (error) {
        console.log("Insert Error:", error);
      } else {
        console.log("Document inserted:", result);
        Router.go('customersIndex')
      }
    },
    update: function(error) {
      if (error) {
        console.log("Update Error:", error);
      } else {
        console.log("Document updated");
        Router.go('customersIndex')
      }
    }
  }
});
