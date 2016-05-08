/**
 * @file Checklist view control
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipChecklistView", ['pipCore', 'pipComposite.Templates']);

    thisModule.directive('pipChecklistView',
        function () {
            return {
                restrict: 'EA',
                replace: false,
                scope: {
                    ngDisabled: '&',
                    pipChanged: '&',
                    pipOptions: '='
                },
                templateUrl: 'checklist_view/checklist_view.html',
                controller: 'pipChecklistViewController'
            }
        }
    );

    thisModule.controller('pipChecklistViewController',
        function ($scope, $element, $attrs, pipUtils) {

            $scope.disableControl = pipUtils.toBoolean($scope.ngDisabled()) != false;
            $scope.rebind = pipUtils.toBoolean($attrs.pipRebind);
            $scope.selected = {};
            $scope.selected.isChanged = false;

            generateList($scope.pipOptions);

            // Add class
            $element.addClass('pip-checklist-view');

            // Watch for options changes
            if (pipUtils.toBoolean($attrs.pipRebind)) {
                $scope.$watchCollection('pipOptions', function (newValue) {
                    if (!$scope.selected.isChanged) {
                        generateList($scope.pipOptions);
                    } else {
                        $scope.selected.isChanged = false;
                    }
                });
            }

            $scope.updateContents = updateContents;
            $scope.onClick = onClick;

            return;

            function updateContents() {
                $scope.selected.isChanged = true;
                $scope.pipOptions = $scope.checklistContent;
            };

            function onChecklistChange() {
                updateContents();
                if ($scope.pipChanged) {
                    $scope.pipChanged();
                }
            };

            function clearList() {
                $scope.checklistContent = [];
            };

            function generateList(content) {
                if (!content ||  content.length < 1) {
                    clearList();
                    return;
                } else {
                    $scope.checklistContent = [];
                    _.each(content, function(item){
                        $scope.checklistContent.push(item);
                    });
                }
            };

            function onClick($event, item) {
                if ($event) $event.stopPropagation();
                if ($scope.ngDisabled && $scope.ngDisabled()) return;

                onChecklistChange();
            };

        }
    );

})();
