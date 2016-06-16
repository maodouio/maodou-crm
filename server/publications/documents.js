// ***************************************************************
// PUBLICATIONS (For Customers collection)
// ***************************************************************

// DOCUMENTS INDEX
// -------------------------------------------------------
Meteor.publish('customers', function() {
  return Customers.find();
});

// DOCUMENT SHOW
// -------------------------------------------------------
Meteor.publish('customer', function(id) {
  return Customers.find(id);
});