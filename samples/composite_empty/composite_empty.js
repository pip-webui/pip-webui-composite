
(function (angular) {
    'use strict';

    var thisModule = angular.module('appComposite.CompositeEmpty', []);

    thisModule.config(function (pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            DESCRIBE_THIS: 'Descibe this...',
            CONTENT: 'Result content'
        });
        pipTranslateProvider.translations('ru', {
            DESCRIBE_THIS: 'Опишите это...',
            CONTENT: 'Содержимое результата'
        });
    });

    thisModule.controller('CompositeEmptyController',
        function ($scope, pipAppBar, $timeout) {

            $timeout(function() {
                $('pre code').each(function(i, block) {
                    Prism.highlightElement(block);
                });
            });

            pipAppBar.hideShadow();
            pipAppBar.showTitleText('COMPOSITE_CONTROLS');
            pipAppBar.showMenuNavIcon();
            pipAppBar.showLanguage();

            $scope.emptyComposite = [];

            $scope.onDisableClick = function () {
                $scope.emptyChecklistDisabled = !$scope.emptyChecklistDisabled;
            };

            $scope.isDisabled = function () {
                return $scope.emptyChecklistDisabled === true;
            };

            $scope.onReset = function () {
                $scope.emptyComposite = [];
            };

            $scope.onChange = function () {
                console.log('onChange'); // eslint-disable-line
            };
        }
    );

})(window.angular);
