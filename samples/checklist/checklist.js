(function (angular) {
    'use strict';

    var thisModule = angular.module('appComposite.Checklist', []);

    thisModule.config(function (pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            EMPTY: 'Empty',
            CHECK_LIST_VIEW: 'Checklist view'
        });
        pipTranslateProvider.translations('ru', {
            EMPTY: 'Пустой',
            CHECK_LIST_VIEW: 'Просмотр checklist'
        });
    });

    thisModule.controller('ChecklistController',
        function ($scope, pipEnums, pipTestContent, pipAppBar) {

            init();

            pipAppBar.hideShadow();

            $scope.onDisableViewClick = function () {
                $scope.emptyChecklistViewDisabled = !$scope.emptyChecklistViewDisabled;
            };

            $scope.onDisableClick = function () {
                $scope.emptyChecklistDisabled = !$scope.emptyChecklistDisabled;
            };

            $scope.isDisabled = function () {
                return $scope.emptyChecklistDisabled === true;
            };

            $scope.isDisabledView = function () {
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
                        text: 'http://www.rambler.ru',
                        checked: true
                    }]
                );
            }
        }
    );

})(window.angular);
