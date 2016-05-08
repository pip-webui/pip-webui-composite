/**
 * @file Composite toolbar control
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipCompositeToolbar", ['pipCore', 'pipComposite.Templates']);

    thisModule.config(function(pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            'TEXT':'Text',
            'CHECKLIST':'Checklist',
            'LOCATION':'Location',
            'PICTURE':'Picture',
            'TIME':'Time',
            'DOCUMENT':'Document'
        });

        pipTranslateProvider.translations('ru', {
            'TEXT':'Текст',
            'CHECKLIST':'Список',
            'LOCATION':'Локация',
            'PICTURE':'Изображение',
            'TIME':'Время',
            'DOCUMENT':'Document'
        });
    });

    thisModule.directive('pipCompositeToolbar',
        function () {
            return {
                restrict: 'EA',
                replace: false,
                scope: {
                    ngDisabled: '&',
                    pipCompositeEmpty: '&',  // set init state of toolbar
                    pipToolbarButton: '=',  // set visibility toolbar button, true by default
                    compositeId: '=pipCompositeId' // set pip-composite-id, for some composite in one scope
                },
                templateUrl: 'composite_toolbar/composite_toolbar.html',
                controller: 'pipCompositeToolbarController'
            }
        }
    );

    thisModule.controller('pipCompositeToolbarController',
        function ($scope, $element, $attrs, $rootScope, pipUtils) {

            $scope.toolbarButton = {};
            $scope.emptyState = pipUtils.toBoolean($scope.pipCompositeEmpty()) != false;
            $scope.disableControl = pipUtils.toBoolean($scope.ngDisabled()) != false;

            setOption();

            $scope.onAddItem = onAddItem;

            $rootScope.$on('pipCompositeNotEmpty', function(event, value) {
                $scope.emptyState = !value;
            });

            // Add class
            $element.addClass('pip-composite-toolbar');

            return;

            function onAddItem(contentType) {
                $rootScope.$emit('pipAddCompositeItem', {type: contentType, id: $scope.compositeId});
            };

            function setOption() {
                if ($scope.pipToolbarButton !== null && $scope.pipToolbarButton !== undefined) {
                    $scope.toolbarButton.picture = $scope.pipToolbarButton.picture === false ? $scope.pipToolbarButton.picture : true;
                    $scope.toolbarButton.document = $scope.pipToolbarButton.document === false ? $scope.pipToolbarButton.document : true;
                    $scope.toolbarButton.location = $scope.pipToolbarButton.location === false ? $scope.pipToolbarButton.location : true;
                    $scope.toolbarButton.event = $scope.pipToolbarButton.event === false ? $scope.pipToolbarButton.event : true;
                    $scope.toolbarButton.checklist = $scope.pipToolbarButton.checklist === false ? $scope.pipToolbarButton.checklist : true;
                } else {
                    $scope.toolbarButton.picture = true;
                    $scope.toolbarButton.document = true;
                    $scope.toolbarButton.location = true;
                    $scope.toolbarButton.event = true;
                    $scope.toolbarButton.checklist = true;
                }
                $scope.toolbarButton.text = true;
            };

        }
    );

})();