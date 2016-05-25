'use strict';

let loginController = require('./login.controller.js');

module.exports = angular.module('app.login', [])
.controller( 'LoginController', ['$scope', loginController ]);
