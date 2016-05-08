/**
 * @file Touch start control
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipMobileMouseup", []);

    thisModule.directive('pipMobileMouseup',
        function () {
            return function (scope, elem, attrs) {
                elem.bind("touchend mouseup", function (e) {
                //    e.preventDefault();
         //           e.stopPropagation();
                    scope.$apply(attrs["pipMobileMouseup"]);
                });
            }
        }
    );

})();
