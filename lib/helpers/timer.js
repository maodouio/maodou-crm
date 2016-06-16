// ***************************************************************
// COMMON HELPERS (shared with client and server)
// ***************************************************************

// Style link as active if it is the current path
// Usage: <li class="{{active 'frontpage'}}"><a href="{{pathFor 'frontpage'}}">Home</a></li>
UI.registerHelper('active', function(path) {
  var route = Router.routes[path].path()
  if (Iron.Location.get().originalUrl === route) {
    return 'active';
  }
});

// Outputs e.g. 12 days ago or 2 hours ago
UI.registerHelper('showTimeAgo', function(date) {
  return !date ? "" : moment(date).fromNow();
});

// Outputs e.g. Jan, 2013
UI.registerHelper('showMonthYear', function(date) {
  return !date ? "" : moment(date).format("MMM, YYYY");
});

// Outputs e.g. 12th Jan, 2013
UI.registerHelper('showDayMonthYear', function(date) {
  return !date ? "" : moment(date).format("Do MMM, YYYY")
});

// Outputs August 30th 2014, 5:33:46 pm
UI.registerHelper('showPrettyTimestamp', function(date) {
  return !date ? "" : moment(date).format("MMMM Do YYYY, h:mm:ss a")
});