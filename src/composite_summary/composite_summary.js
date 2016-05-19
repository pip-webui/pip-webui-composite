/**
 * @file Composite summary control
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipCompositeSummary", [
        'pipCore', 'pipDocuments', 'pipLocations', 'pipPictures', 'pipComposite.Templates']);

    thisModule.directive('pipCompositeSummary',
        function () {
            return {
                restrict: 'EA',
                scope: {
                    pipContents: '=',
                    pipChecklistSize: '=',
                    pipTextSize: '=',
                    pipPrimaryBlockLimit: '=',
                    pipSecondaryBlockLimit: '=',
                    pipSecondaryBlockTypes: '='
                },
                templateUrl: 'composite_summary/composite_summary.html',
                controller: 'pipCompositeSummaryController'
            }
        }
    );

    thisModule.controller('pipCompositeSummaryController',
        function ($scope, $element, $attrs, pipUtils) {

            $scope.rebind = pipUtils.toBoolean($attrs.pipRebind);
            $scope.disableControl = true;
            $scope.disabledChecklist = true;

            $scope.secondaryBlockTypes = $scope.pipSecondaryBlockTypes !== undefined &&
                Array.isArray($scope.pipSecondaryBlockTypes) ? $scope.pipSecondaryBlockTypes :
                 ['checklist', 'documents', 'location', 'time'];
            $scope.textSize = $scope.pipTextSize !== undefined && $scope.pipTextSize > 0 ? $scope.pipTextSize : 0;
            $scope.secondaryBlockLimit = $scope.pipSecondaryBlockLimit !== undefined && $scope.pipSecondaryBlockLimit > 0 ? $scope.pipSecondaryBlockLimit : -1;
            $scope.checklistSize = $scope.pipChecklistSize !== undefined && $scope.pipChecklistSize > 0 ? $scope.pipChecklistSize : 0;
            $scope.primaryBlockLimit = $scope.pipPrimaryBlockLimit !== undefined ? $scope.pipPrimaryBlockLimit : -1;

            generateList($scope.pipContents);

            // Watch for options changes
            if (pipUtils.toBoolean($attrs.pipRebind)) {
                $scope.$watchCollection('pipContents', function (newValue) {
                    if (!Array.isArray($scope.pipContents)) {
                        throw new Error('Error: Attribute pip-contents must be array!');
                    }
                    generateList($scope.pipContents);
                });
            }

            // Add class
            $element.addClass('pip-composite-summary');

            return;

            // усекаем чеклист до 3
            function limitChecklist(content, val) {
                if (!val) return;
                _.each(content, function(item) {
                    if (item && item.type == 'checklist') {
                        var checklistLength = item.checklist.length;
                        item.checklist =_.take(item.checklist, val);
                        if (checklistLength > val) item.checklist.push({
                            text: '...',
                             checked: false
                        });
                    }
                });
            };

            // отбираем текст и картинки
            function selectSummary(content) {
                var result = [],
                    i = 0;

                _.each(content, function(item) {
                    if ($scope.primaryBlockLimit >= 0 && i >= $scope.primaryBlockLimit) return result;

                    //if (item.type == 'text' || item.type == 'pictures' ) {
                    if ($scope.secondaryBlockTypes.indexOf(item.type) < 0) {
                        result.push(item);
                        i += 1;
                    }
                });

                return result;
            };

            // отбираем остальные блоки если они есть
            function selectSummarySecondary(content, types) {
                var i, limit =  $scope.secondaryBlockLimit < 0 ? content.length : $scope.secondaryBlockLimit;
                var result = [];

                for (i = 0; i < content.length; i++ ) {
                    if (types.indexOf(content[i].type) > -1) {
                        result.push(content[i]);
                        if (result.length >= limit) break;
                    }
                }

                return result;
            };

            function generateList(content) {
                if (!content ||  content.length < 1) {
                    clearList();
                    return;
                } else {
                     var summaryContent = _.cloneDeep(content);
                    var result = selectSummary(summaryContent);
                    if (result.length == 0) {
                        result = selectSummarySecondary(summaryContent, $scope.secondaryBlockTypes);
                    }

                    limitChecklist(result, $scope.checklistSize);

                    var id = 0;
                    _.each(result, function(item){
                        item.id = id;
                        id ++;
                    });
                    $scope.compositeContent = result;
                }
            };

            function clearList() {
                $scope.compositeContent = [];
            };

        }
    );

})();
