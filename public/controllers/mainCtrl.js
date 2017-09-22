app.controller('mainCtrl', ["$http", "$scope", "dataFactory",
	function($http, $scope, dataFactory) {
		console.log("mainCtrlmainCtrlmainCtrl");

		$scope.newUser = {};
        $scope.search = {};

		$scope.getData = function() {
			dataFactory.getData()
				.then(function(res) {
					if (res.status === 200) {
						dataFactory.setUsers(res.data);
						$scope.users = dataFactory.getUsers();
					}
				})
				.catch(function(err) {
					if (err.status === 404) {
						$scope.error = err;
					}
				});
		};
        $scope.getData();

		$scope.addUser = function(newUser) {
			// new user if ID isnt supplied, else it is for editing
			if (!newUser.id) {
				newUser.id = $scope.users.length + 1;
				$scope.users = dataFactory.addUser(newUser);
			} else {
				$scope.users = dataFactory.editUser(newUser);
			}

			$scope.newUser = {};
		};

		$scope.editUser = function(user) {
			$scope.newUser = angular.copy(user);
		};

        $scope.changeOrder = function(order){
            $scope.order = order;

        };

	}
]);
