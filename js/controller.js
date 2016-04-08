App.controller('appController', ['$scope','NgTableParams','$http' ,'$log' ,function($scope, NgTableParams, $http , $log) {    


	 $http.get('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD').success(function (response) {
        
        $log.debug(response);

        var information = response;
   		$scope.columns = information.meta.view.columns;
   		var data = information.data;

   		$log.debug(data);
   		$log.debug($scope.columns);

   		$scope.tableParams = new NgTableParams({count: 5}, { counts: [] ,dataset: data});


    });


}]);
