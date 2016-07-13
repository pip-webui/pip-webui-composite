
(function (angular) {
    'use strict';

    var thisModule = angular.module('appComposite.ContentSwitch', []);

    thisModule.config(function (pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            PRESS_BUTTON_FOR_SHOW_HIDE: 'Press button for show/hide content'
        });
        pipTranslateProvider.translations('ru', {
            PRESS_BUTTON_FOR_SHOW_HIDE: 'Нажмите кнопки чтоб показать/скрыть контент'
        });
    });

    thisModule.controller('ContentSwitchController',
        function ($scope, pipSession, pipAppBar) {

            pipAppBar.hideShadow();
            pipAppBar.showTitleText('COMPOSITE_CONTROLS');
            pipAppBar.showMenuNavIcon();
            pipAppBar.showLanguage();

            $scope.item = {
                pictureIds: [],
                docs: [],
                loc_name: '',
                loc_pos: null,
                start: null,
                end: null
            };

            $scope.contentSwitchOption = {
                picture: true,
                document: true,
                location: true,
                event: true
            };

            $scope.showPictures = true;
            $scope.showDocuments = true;
            $scope.showEvent = true;
            $scope.showLocation = true;
        }
    );

})(window.angular);
