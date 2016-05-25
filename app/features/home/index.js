'use strict';

let homeController = require('./home.controller.js');

module.exports = angular.module('app.home', [])
.controller( 'HomeController', ['$scope', homeController ]);
