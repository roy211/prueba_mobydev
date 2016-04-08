App.service("dataResource",[ '$resource', function ($resource) {
	
    return $resource("https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD",
      				{}, 
        			{ get: { method: "GET"}

  			})
}])