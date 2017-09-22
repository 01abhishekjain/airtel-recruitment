angular.module('code')
	.factory('dataFactory', ['$http', 'API_END_POINT',
		function($http, API_END_POINT) {

			var service = {};
			service.users = [];

			service.getData = function() {
				return $http({
					method: 'GET',
					url: API_END_POINT.url + 'users'
				});
			};

			service.setUsers = function(users) {
				this.users = users;
			};

			service.getUsers = function() {
				return this.users;
			};

			service.addUser = function(user) {
				this.users.push(user);
				return this.users;
			};

			service.editUser = function(data) {
				for (var i = 0; i < this.users.length; i++) {
					if (this.users[i].id === data.id) this.users[i] = data;
				}
				return this.users;
			};

			return service;
		}
	]);
