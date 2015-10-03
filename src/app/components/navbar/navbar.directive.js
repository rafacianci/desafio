(function () {
    'use strict';

    angular
        .module('desafio')
        .directive('navbar', navbar);

    /** @ngInject */
    function navbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html'
        };

        return directive;
    }

})();
