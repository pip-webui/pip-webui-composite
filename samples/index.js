
(function (angular) {
    'use strict';

    var thisModule = angular.module('appComposite',
        [
            // 3rd Party Modules
            'ui.router', 'ui.utils', 'ngResource', 'ngAria', 'ngCookies', 'ngSanitize', 'ngMessages',
            'ngMaterial', 'wu.masonry', 'LocalStorageModule', 'angularFileUpload', 'ngAnimate',
            // Modules from WebUI Framework
            'pipCore', 'pipRest', 'pipData', 'pipBasicControls', 'pipComposite', 'pipNav',
            'pipLayout',
            // testing data modules (have some data for example)
            // Error! Lost templates. Do not uncomment 'pipWebuiTests', 
            'pipSampleConfig',
            // Sample Application Modules
            'appComposite.Checklist',
            'appComposite.CompositeEmpty', 'appComposite.Composite', 'appComposite.CompositeView',
            'appComposite.ContentSwitch', 'appComposite.CompositeSummary', 'appComposite.MobileTouch'
        ]
    );

    thisModule.controller('pipSampleController',
        function ($scope, $rootScope, $state, $timeout, pipTestAccount,
                  pipTestContent, pipAppBar) {

            $scope.serverUrl = pipTestAccount.getServerUrl();
            $scope.sampleAccount = pipTestAccount.getSamplerAccount();
            $scope.pages = [
                {
                    title: 'Checklist', state: 'checklist', url: '/checklist',
                    controller: 'ChecklistController', templateUrl: 'checklist.html'
                },
                {
                    title: 'Composite Empty', state: 'composite_empty', url: '/composite_empty',
                    controller: 'CompositeEmptyController', templateUrl: 'composite_empty.html'
                },
                {
                    title: 'Composite', state: 'composite', url: '/composite',
                    controller: 'CompositeController', templateUrl: 'composite.html'
                },
                {
                    title: 'Composite View', state: 'composite_view', url: '/composite_view',
                    controller: 'CompositeViewController', templateUrl: 'composite_view.html'
                },
                {
                    title: 'Composite Summary', state: 'composite_summary', url: '/composite_summary',
                    controller: 'CompositeSummaryController', templateUrl: 'composite_summary.html'
                },
                {
                    title: 'Content Switch', state: 'content_switch', url: '/content_switch',
                    controller: 'ContentSwitchController', templateUrl: 'content_switch.html'
                },
                {
                    title: 'Mobile Touch', state: 'mobile_touch', url: '/mobile_touch',
                    controller: 'MobileTouchController', templateUrl: 'mobile_touch.html'
                }
            ];

            $scope.selected = {};
            $timeout(function () {
                $scope.selected.pageIndex = _.findIndex($scope.pages, {state: $state.current.name});
            });

            $scope.onNavigationSelect = function (stateName) {
                if ($state.current.name !== stateName) {
                    $state.go(stateName);
                }
            };

            $scope.onDropdownSelect = function (obj) {
                if ($state.current.name !== obj.state) {
                    $state.go(obj.state);
                }
            };

            $scope.isEntryPage = function () {
                return $state.current.name === 'signin' || $state.current.name === 'signup' ||
                    $state.current.name === 'recover_password' || $state.current.name === 'post_signup';
            };
        }
    );

})(window.angular);
