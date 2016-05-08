/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appComposite.ContentSwitch', []);

    thisModule.controller('ContentSwitchController',
        function($scope, pipSession) {

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

            $scope.onShowAll = onShowAll;
            $scope.onHideAll = onHideAll;

            return ;

            function onShowAll() {
                $scope.contentSwitchOption = {
                    picture: true,
                    document: true,
                    location: true,
                    event: true
                };
            };

            function onHideAll() {
                $scope.contentSwitchOption = {
                    picture: false,
                    document: false,
                    location: false,
                    event: false
                };
            };

        }
    );

})();
