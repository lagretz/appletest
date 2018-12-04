var shuffleApp = angular.module('shuffle', []);

shuffleApp.controller('shuffleCtrl', function($scope, $http){
	
	$scope.addUser = function addUser(name) {
		var name = $scope.name;
		var lastName = $scope.lastName;
		var email = $scope.email;
		var password = $scope.password;
		console.log(name + lastName + email + password);
		$http.post("http://localhost:8080/appletest/users/insert/"+name+"/"+lastName+"/"+email+"/"+password)
		.success(function(data) {
			console.log("added?");
		});
	};
});