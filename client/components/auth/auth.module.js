'use strict';

angular.module('eventOrgApp.auth', ['eventOrgApp.constants', 'eventOrgApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
