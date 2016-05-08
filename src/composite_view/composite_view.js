/**
 * @file Composite view control
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipCompositeView", [
        'pipCore', 'pipDocuments', 'pipLocations', 'pipPictures', 'pipComposite.Templates']);

    thisModule.directive('pipCompositeView',
        function () {
            return {
                restrict: 'EA',
                scope: {
                    ngDisabled: '&',
                    pipDisabledChecklist: '&',
                    pipChanged: '&',
                    pipContents: '='
                },
                templateUrl: 'composite_view/composite_view.html',
                controller: 'pipCompositeViewController'
            }
        }
    );

    thisModule.controller('pipCompositeViewController',
        function ($scope, $element, $attrs, pipUtils) {

            $scope.rebind = pipUtils.toBoolean($attrs.pipRebind);
            $scope.disableControl = pipUtils.toBoolean($scope.ngDisabled()) != false;
            $scope.disabledChecklist = pipUtils.toBoolean($scope.pipDisabledChecklist()) != false;
            $scope.selected = {};
            $scope.selected.isChanged = false;
            generateList($scope.pipContents);

            $scope.onContentChange = onContentChange;
            $scope.isDisabled = isDisabled;

            // Watch for options changes
            if (pipUtils.toBoolean($attrs.pipRebind)) {
                $scope.$watchCollection('pipContents', function (newValue) {
                    if (!Array.isArray($scope.pipContents)) {
                        // throw new Error('Error: Attribute pip-contents must be array!');
                        return;
                    }
                    if (!$scope.selected.isChanged) {
                        generateList($scope.pipContents);
                    } else {
                        $scope.selected.isChanged = false;
                    }
                });
            }

            // Add class
            $element.addClass('pip-composite-view');

            return;

            function isDisabled() {
                return pipUtils.toBoolean($scope.pipDisabledChecklist()) == true ||
                    pipUtils.toBoolean($scope.ngDisabled()) == true;
            };

            function updateContents() {
                $scope.selected.isChanged = true;
                $scope.pipContents = $scope.compositeContent;
            };

            function onContentChange() {
                onCompositeChange();
            };

            function onCompositeChange() {
                updateContents();
                if ($scope.pipChanged)
                    $scope.pipChanged();
            };

            function generateList(content) {
                if (!content ||  content.length < 1) {
                    clearList();
                    return;
                } else {
                    $scope.compositeContent = [];
                    var id = 0;
                    _.each(content, function(item){
                        if (typeof(item) != 'object' || item == null) {
                            throw new Error('Error: content error!');
                        }
                        item.id = id;
                        id ++;
                        $scope.compositeContent.push(item);
                    });
                }
            };

            function clearList() {
                $scope.compositeContent = [];
            };

        }
    );

})();
