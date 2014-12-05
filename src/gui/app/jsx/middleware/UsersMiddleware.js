// Users Middleware
// ================
// Handle the lifecycle and event hooks for the Users channel of the middleware

"use strict";

var Middleware = require("./middleware");

var UsersActionCreators = require("../actions/UsersActionCreators");

module.exports = {

    subscribe: function() {
      console.log("Middleware subscribed to Users channel");
    }

  , unsubscribe: function() {
      console.log("Middleware unsubscribed to Users channel");
    }

  , requestUsersList: function() {
      Middleware.call( "accounts.query_users", null, function ( rawUsersList ) {
        UsersActionCreators.receiveUsersList( rawUsersList );
      });
    }

};