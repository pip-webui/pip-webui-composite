/**
 * @file Keyboard navigation with scrolling over non-focusable controls
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipCompositeFocused", []);

    thisModule.directive('pipCompositeFocused', function () {
        return {
            restrict: 'A',
            scope: false,
            controller: 'pipCompositeFocusedController'
        };
    });

    thisModule.controller('pipCompositeFocusedController',
        function ($scope, $element, $rootScope) {
            $element.bind("touchstart mousedown", function (e) {
                $rootScope.$broadcast('focusedComposite');
            });
        }
    );

})();

