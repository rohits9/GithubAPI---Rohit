github.controller('searchController', function($scope, $http) {
	
	$scope.findRepo = function (searchTerm) {
		$http({
		  method: 'GET',
		  url: 'https://api.github.com/search'+'/users?callback=JSON_CALLBACK&q='+searchTerm
		}).then(function successCallback(response) {
		    var data = response.data.replace("/**/JSON_CALLBACK(", "[");
		    var finalData = data.replace("})", "}]");
		    $scope.result = JSON.parse(finalData);
		    $scope.searchResult = $scope.result[0].data;
		    
		    if($scope.searchResult.items.length == 0){
		    	$scope.errMsg = "No records found.";
		    }
		    $("#myButton4").button('complete');
		}, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		});
	}
	
	$scope.init = function(){

	}
	$scope.init();
	
	$("#myButton4").click(function(){
		$(this).html('Loading...');
	});        
});
