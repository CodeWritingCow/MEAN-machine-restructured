// inject the user service into our main Angular module
angular.module('userApp', [
	'ngAnimate',
	'app.routes',
	'authService',
	'mainCtrl',
	'userCtrl',
	'userService'
	])

// application configuration to integrate token into requests
.config(function($httpProvider) {
	
	// attach our auth interceptor to the http requests
	$httpProvider.interceptors.push('AuthInterceptor');
});