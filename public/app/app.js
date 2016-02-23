// inject the user service into our main Angular module
angular.module('myApp', ['userService'])

// create a controller and inject the User factory
.controller('userController', function(User){
	
	var vm = this;

	// get all the stuff
	User.all()

	// promise object
	.success(function(data) {
		// bind the data to a controller variable
		// this comes from the stuffService
		vm.user = data;
	});

});