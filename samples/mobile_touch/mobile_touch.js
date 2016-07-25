(function (angular) {
    'use strict';

    var thisModule = angular.module('appComposite.MobileTouch', []);

    thisModule.config(function (pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            TOUCH_DOWN_COUNT: 'Touch down count',
            TOUCH_UP_COUNT: 'Touch up count',
            CLEAR: 'Clear'
        });
        pipTranslateProvider.translations('ru', {
            TOUCH_DOWN_COUNT: 'Количество опускания',
            TOUCH_UP_COUNT: 'Количество поднятия',
            CLEAR: 'Очистить'
        });
    });

    thisModule.controller('MobileTouchController',
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

            onClear();

            $scope.onClear = onClear;
            $scope.onTouchDouwn = onTouchDouwn;
            $scope.onTouchUp = onTouchUp;

            return;
            // ------------------------------------------------------------------

            function onTouchUp() {
                $scope.touchUpCount += 1;
            }

            function onTouchDouwn() {
                $scope.touchDownCount += 1;
            }

            function onClear() {
                $scope.touchDownCount = 0;
                $scope.touchUpCount = 0;

            }
        }
    );

})(window.angular);
