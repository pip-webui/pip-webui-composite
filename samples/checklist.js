/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appComposite.Checklist', []);

    thisModule.controller('ChecklistController',
        function($scope, pipEnums, pipTestContent) {

            init();

            $scope.onChange = function () {
console.log('onChange', _.cloneDeep($scope.emptyChecklist));
console.log('onChange1', $scope.emptyChecklist);
            };

            $scope.onDisableViewClick = function() {
                $scope.emptyChecklistViewDisabled = !$scope.emptyChecklistViewDisabled;
            };

            $scope.onDisableClick = function() {
                $scope.emptyChecklistDisabled = !$scope.emptyChecklistDisabled;
            };

            $scope.isDisabled = function() {
                return $scope.emptyChecklistDisabled === true;
            };

            $scope.isDisabledView = function() {
                return $scope.emptyChecklistViewDisabled === true;
            };

            $scope.onReset = function () {
                init();
            };

            function init() {
                $scope.emptyChecklistDisabled = false;
                $scope.emptyChecklistRebind = false;

                $scope.emptyChecklist = [];

                $scope.checklistDynamic = _.union(
                    pipTestContent.getCheckList({
                        size: 6,
                        optionTextType: 'paragraph'
                    }),
                    pipTestContent.getCheckList({
                        size: 6,
                        optionTextType: 'sentence'
                    })
                );

                $scope.viewChecklist = _.union(
                    pipTestContent.getCheckList({
                        size: 6,
                        optionTextType: 'paragraph'
                    }),
                    pipTestContent.getCheckList({
                        size: 6,
                        optionTextType: 'sentence'
                    })
                );

                $scope.viewChecklistEdit = _.union(
                    pipTestContent.getCheckList({
                        size: 6,
                        optionTextType: 'paragraph'
                    }),
                    pipTestContent.getCheckList({
                        size: 6,
                        optionTextType: 'sentence'
                    }), [{
                        text: "http://www.rambler.ru",
                        checked: true
                    }]
                );
            }
        }
    );

})();
