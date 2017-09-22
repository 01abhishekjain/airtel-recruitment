app.directive('aiSearchUser', function() {
	return {
		restrict: 'A',
		replace: true,
		template: function(el, attr) {

			return '<tr><td>&nbsp;</td>' +
				// '<td ai-search-i="search.id" ai-search-pl="id" ></td>' +
				'<td ai-search-i="search.name" ai-search-pl="name" ></td>' +
				'<td ai-search-i="search.username" ai-search-pl="username" ></td>' +
				'<td ai-search-i="search.email" ai-search-pl="email" ></td>' +
				'<td ai-search-i="search.address.street" ai-search-pl="address" ></td>' +
				'<td ai-search-i="search.phone" ai-search-pl="phone" ></td>' +
				'<td ai-search-i="search.website" ai-search-pl="website" ></td>' +
				'<td ai-search-i="search.company.name" ai-search-pl="company" ></td>' +
				'</tr>';
		}
	};
});

app.directive('aiSearchI', function() {
	return {
		restrict: 'A',
		require: 'aiSearchUser',
		replace: true,
		template: function(el, attr) {
			function getPlace() {
				return "Search " + attr.aiSearchPl;
			}

			return '<td><input type="text" placeholder="' + getPlace() + '" class="form-control" ng-model="' + attr.aiSearchI + '"> </td>';
		}
	};
});
