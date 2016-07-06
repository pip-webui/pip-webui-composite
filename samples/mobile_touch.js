/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appComposite.MobileTouch', []);

    thisModule.controller('MobileTouchController',
        function($scope, pipAppBar) {
            pipAppBar.hideShadow();

            onClear();

            $scope.onClear = onClear;
            $scope.onTouchDouwn = onTouchDouwn;
            $scope.onTouchUp = onTouchUp;

            return;

            function onTouchUp() {
                $scope.touchUpCount += 1;
            };

            function onTouchDouwn() {
                $scope.touchDownCount += 1;
            };

            function onClear() {
                $scope.touchDownCount = 0;
                $scope.touchUpCount = 0;

            };
        }
    );

})();
