app.directive('aiTableHead', function() {
	return {
		restrict: 'A',
		replace: true,
		template: function(el, attr) {
			return '<thead>' +
				'<td ai-table-head-t="id"></td>' +
				'<td ai-table-head-t="name"></td>' +
				'<td ai-table-head-t="username"></td>' +
				'<td ai-table-head-t="email"></td>' +
				'<td ai-table-head-t="address.street"></td>' +
				'<td ai-table-head-t="phone"></td>' +
				'<td ai-table-head-t="website"></td>' +
				'<td ai-table-head-t="company.name"></td>' +
				'</thead>';
		}
	};
});

app.directive('aiTableHeadT', function() {
	return {
		restrict: 'A',
		replace: true,
		template: function(el, attr) {
			return '<td ng-click="changeOrder(\'' + attr.aiTableHeadT + '\')">' +
				attr.aiTableHeadT.toUpperCase() +
				'</td>';
		}
	};
});
