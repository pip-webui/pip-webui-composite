/**
 * @file Touch start control
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipMobileMousedown", []);

    thisModule.directive('pipMobileMousedown',
        function () {
            return function (scope, elem, attrs) {
                elem.bind("touchstart mousedown", function (e) {
            //        e.preventDefault();
            //        e.stopPropagation();
                    scope.$apply(attrs["pipMobileMousedown"]);
            //        e.preventDefault();
                });
            }
        }
    );

})();
