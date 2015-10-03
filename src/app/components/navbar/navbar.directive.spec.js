(function () {
    'use strict';

    /**
     * @todo Complete the test
     * This example is not perfect.
     * Test should check if MomentJS have been called
     */
    describe('directive navbar', function () {
        // var $window;
        var vm,
            el;

        beforeEach(module('desafio'));
        beforeEach(inject(function ($compile, $rootScope) {
            // spyOn(_$window_, 'moment').and.callThrough();
            // $window = _$window_;
            el = angular.element('<navbar></navbar>');

            $compile(el)($rootScope.$new());
            $rootScope.$digest();
            vm = el.isolateScope().vm;
        }));

        it('should be compiled', function () {
            expect(el.html()).not.toEqual(null);
        });

        it('should have isolate scope object with instanciate members', function () {
            expect(vm).toEqual(jasmine.any(Object));
        });

        // it('should call Moment', function () {
        //   console.log($window.moment)
        //   expect($window.moment).toHaveBeenCalled();
        // });
    });
})();
