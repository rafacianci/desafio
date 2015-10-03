(function () {
    'use strict';

    angular
        .module('desafio')
        .directive('listFriends', listFriends);

    /** @ngInject */
    function listFriends() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/friends/list-friends.html',
            controller: listFriendsController,
            controllerAs: 'lf',
            bindToController: true
        };

        return directive;

        function listFriendsController(dataservice){
            var vm = this;
            vm.friends = [];

            dataservice.getUsers(function(users){
                vm.friends = users;
            });

        }
    }

})();
