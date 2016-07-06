/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appComposite.CompositeEmpty', []);

    thisModule.controller('CompositeEmptyController',
        function($scope, pipAppBar) {
            
            pipAppBar.hideShadow();
            
            $scope.emptyComposite = [];

            $scope.onDisableClick = function() {
                $scope.emptyChecklistDisabled = !$scope.emptyChecklistDisabled;
            };

            $scope.isDisabled = function() {
                return $scope.emptyChecklistDisabled === true;
            };

            $scope.onReset = function () {
                $scope.emptyComposite = [];
            };

            $scope.onChange = function() {
                console.log('onChange');
            };


        }
    );

})();
