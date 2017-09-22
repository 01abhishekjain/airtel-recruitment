
app.directive('aiAddUser', function() {
	return {
		restrict: 'A',
		replace: true,
		template: function(el, attr) {

			return '<tr><td>&nbsp;</td>' +
				'<td ai-add-i="newUser.name" ai-add-pl="name"></td>' +
				'<td ai-add-i="newUser.username" ai-add-pl="username"></td>' +
				'<td ai-add-i="newUser.email" ai-add-pl="email"></td>' +
				'<td ai-add-i="newUser.address.street" ai-add-pl="address"></td>' +
				'<td ai-add-i="newUser.phone" ai-add-pl="phone"></td>' +
				'<td ai-add-i="newUser.website" ai-add-pl="website"></td>' +
				'<td ai-add-i="newUser.company.name" ai-add-pl="company"></td>' +
				'<td><button type="button" class="btn btn-primary btn-xs" ng-click="addUser(newUser)">ADD</button></td>' +
				'</tr>';
		}
	};
});

app.directive('aiAddI', function() {
	return {
		restrict: 'A',
		require: 'aiAddUser',
		replace: true,
		template: function(el, attr) {
			function getPlace(placeHolder) {
				return "Add " + attr.aiAddPl;
			}

			return '<td><input type="text" placeholder="' + getPlace() + '" class="form-control" ng-model="' + attr.aiAddI + '"> </td>';
		}
	};
});
