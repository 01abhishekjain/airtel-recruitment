var app = angular.module('code', []);
app.config(function() {
	console.log("config");
});
app.constant('API_END_POINT', {
	url: "https://jsonplaceholder.typicode.com/"
});
app.run(function() {
	console.log("run");
});
