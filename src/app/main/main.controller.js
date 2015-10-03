(function () {
	'use strict';

	angular
		.module('desafio')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($stateParams, $window, $state, toastr, dataservice) {
		var vm = this;

		vm.showForm = 0;
		vm.itemsPerPage = 10;
		vm.showHideForm = showHideForm;
		vm.save = save;
		vm.cancel = cancel;
		vm.feed = [];

		activate();

		function activate() {
			getNews();
		}

		function cancel(){
			closeForm();
		}

		function closeForm(){
			vm.showForm = 0;
		}

		function getNews() {
			dataservice.getNews(function(news){
				vm.feed = news;
			});
		}

		function save(){
			console.log("Teste 035165");
			vm.publish.date = new Date();
			dataservice.publishNews(vm.publish, function(data){
				showToastr(data);
				
			});
		}

		function showHideForm(){
			vm.showForm = !vm.showForm;
		}

		function showToastr(response){
			if(response.status){
				toastr.success(response.message);
				closeForm();
			}else{
				toastr.error(response.message);
			}
		}
	}
})();
