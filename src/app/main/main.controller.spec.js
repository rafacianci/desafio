(function () {
    'use strict';

    describe('controllers', function () {
        var vm,
        toastr;

        beforeEach(module('desafio'));
        beforeEach(inject(function (_$controller_, _toastr_) {
            vm = _$controller_('MainController');
            toastr = _toastr_;
        }));
    });
})();
