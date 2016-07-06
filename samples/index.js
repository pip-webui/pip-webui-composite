/* global angular */

(function () {
    'use strict';

    var content = [
        {
            title: 'Checklist',
            state: 'checklist',
            url: '/checklist',
            controller: 'ChecklistController',
            templateUrl: 'checklist.html'
        },
        {
            title: 'Composite Empty',
            state: 'composite_empty',
            url: '/composite_empty',
            controller: 'CompositeEmptyController',
            templateUrl: 'composite_empty.html'
        },
        {
            title: 'Composite',
            state: 'composite',
            url: '/composite',
            controller: 'CompositeController',
            templateUrl: 'composite.html'
        },
        {
            title: 'Composite View',
            state: 'composite_view',
            url: '/composite_view',
            controller: 'CompositeViewController',
            templateUrl: 'composite_view.html'
        },
        {
            title: 'Composite Summary',
            state: 'composite_summary',
            url: '/composite_summary',
            controller: 'CompositeSummaryController',
            templateUrl: 'composite_summary.html'
        },
        {
            title: 'ContentSwitch',
            state: 'content_switch',
            url: '/content_switch',
            controller: 'ContentSwitchController',
            templateUrl: 'content_switch.html'
        },
        {
            title: 'MobileTouch',
            state: 'mobile_touch',
            url: '/mobile_touch',
            controller: 'MobileTouchController',
            templateUrl: 'mobile_touch.html'
        }
    ];

    var thisModule = angular.module('appComposite',
        [
            // 3rd Party Modules
            'ui.router', 'ui.utils', 'ngResource', 'ngAria', 'ngCookies', 'ngSanitize', 'ngMessages',
            'ngMaterial', 'wu.masonry', 'LocalStorageModule', 'angularFileUpload', 'ngAnimate',
            // Modules from WebUI Framework
            'pipCore', 'pipRest', 'pipData', 'pipBasicControls', 'pipComposite', 'pipEntry', 'pipNav',
            // testing data modules (have some data for example)
            'pipWebuiTests', 'pipSampleConfig',
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
                    title: 'ContentSwitch', state: 'content_switch', url: '/content_switch',
                    controller: 'ContentSwitchController', templateUrl: 'content_switch.html'
                },
                {
                    title: 'MobileTouch', state: 'mobile_touch', url: '/mobile_touch',
                    controller: 'MobileTouchController', templateUrl: 'mobile_touch.html'
                }
            ];

            // Connect to server
            // openConnection();

            $scope.selected = {};
            $timeout(function () {
                $scope.selected.pageIndex = _.findIndex($scope.pages, {state: $state.current.name});
            });

            pipAppBar.showTitleText('COMPOSITE_CONTROLS');
            pipAppBar.showMenuNavIcon();
            pipAppBar.showLanguage();

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

            function openConnection() {
                $rootScope.$routing = true;
                pipSession.signin(
                    {
                        serverUrl: $scope.serverUrl,
                        email: $scope.sampleAccount.email,
                        password: $scope.sampleAccount.password
                    },
                    function (user) {
                        $rootScope.$party = {
                            id: user.id,
                            name: user.name
                        };
                        $rootScope.$user = user;
                        $rootScope.$theme = user.theme;
                        $rootScope.$routing = false;
                        pipTheme.setCurrentTheme($rootScope.$theme);
                        pipToasts.showNotification('Signed in as ' + user.name, ['ok'])
                    },
                    function (err) {
                        $rootScope.$routing = false;
                        pipToasts.showError('Failed to signed in');
                    }
                );
            }
        }
    );

})();
