// create the module adminApp
var adminApp = angular.module('adminApp', ['ngRoute']);


// configure our routes
adminApp.config(['$httpProvider','$routeProvider',function($httpProvider,$routeProvider) {

	//Http Provider
	$httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

	//Route Provider
	$routeProvider

		
		// route for the home page
		.when('/', {
			templateUrl : '../Pages/Reservations.html',
			controller  : 'mainController'
		})

		// route for the reservations page
		.when('/Reservations', {
			templateUrl : '../Pages/Reservations.html',
			controller  : 'mainController'
		})

		// route for the Seatings page
		.when('/Seatings', {
			templateUrl : '../Pages/Seatings.html',
			controller  : 'seatingController'
		})

		// route for the Contact List page
		.when('/Contacts', {
			templateUrl : '../Pages/Contacts.html',
			controller  : 'contactsController'
		})

		// route for the waitlist page
		.when('/Waitlist',{
			templateUrl : '../Pages/Waitlist.html',
			controller : 'waitlistController'
		});
	}]);

// create the controller and inject Angular's $scope
adminApp.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';

	//Creating an object to populate the table
	$scope.reservations=[{
		"RID" : "ABC123",
		"FName" : "Ashwin",
		"LName" : "Mishra",
		"Date" : "01/01/14",
		"NoOfGuest" : "4"
	},{
		"RID" : "ABC124",
		"FName" : "Ashwin",
		"LName" : "Mishra",
		"Date" : "01/02/14",
		"NoOfGuest" : "5"
	},{
		"RID" : "ABC125",
		"FName" : "Ashwin",
		"LName" : "Mishra",
		"Date" : "01/03/14",
		"NoOfGuest" : "6"
	},{
		"RID" : "ABC126",
		"FName" : "Ashwin",
		"LName" : "Mishra",
		"Date" : "01/04/14",
		"NoOfGuest" : "6"
	}];
});

adminApp.controller('seatingController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

adminApp.controller('contactsController', function($scope, $http) {


    // We'll get Angular to populate this list of users
    $scope.listOfUsers = [];

    $http.get('http://localhost:15021/Service1.svc/GetAllCustomers')
        .success(function (data) {
            $scope.listOfUsers = data.GetAllCustomersResult;
        })
        .error(function (data, status, headers, config) {
            $scope.errorMessage = "Couldn't load the list of users, error # " + status;
        });
	
});

adminApp.controller('waitlistController', function($scope) {
	$scope.message = 'Work in Progress!';
});