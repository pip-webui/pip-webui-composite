/**
 * @file Global configuration for sample application
 * @copyright Digital Living Software Corp. 2014-2016
 */

(function (angular) {
    'use strict';

    var thisModule = angular.module('pipSampleConfig', ['pipRest.State', 'pipRest', 'pipEntry', 'pipSideNav',
        'pipAppBar']);

    // Configure application services before start
    thisModule.config(
        function ($mdThemingProvider, $stateProvider, $urlRouterProvider, pipAuthStateProvider, pipTranslateProvider,
                  pipRestProvider, pipSideNavProvider, pipAppBarProvider, pipEntryProvider, $mdIconProvider) {

            var content = [
                { title: 'Checklist', state: 'checklist', url: '/checklist',
                    controller: 'ChecklistController', templateUrl: 'checklist.html' },
                { title: 'Composite Empty', state: 'composite_empty', url: '/composite_empty',
                    controller: 'CompositeEmptyController', templateUrl: 'composite_empty.html' },
                { title: 'Composite', state: 'composite', url: '/composite',
                    controller: 'CompositeController', templateUrl: 'composite.html' },
                { title: 'Composite View', state: 'composite_view', url: '/composite_view',
                    controller: 'CompositeViewController', templateUrl: 'composite_view.html' },
                { title: 'Composite Summary', state: 'composite_summary', url: '/composite_summary',
                    controller: 'CompositeSummaryController', templateUrl: 'composite_summary.html' },
                { title: 'ContentSwitch', state: 'content_switch', url: '/content_switch',
                    controller: 'ContentSwitchController', templateUrl: 'content_switch.html' },
                { title: 'MobileTouch', state: 'mobile_touch', url: '/mobile_touch',
                    controller: 'MobileTouchController', templateUrl: 'mobile_touch.html' }
                ],
                contentItem, i;

            $mdIconProvider.iconSet('icons', 'images/icons.svg', 512);

            pipAppBarProvider.globalSecondaryActions([
                {name: 'global.signout', title: 'SIGNOUT', state: 'signout'}
            ]);

            // String translations
            pipTranslateProvider.translations('en', {
                COMPOSITE_CONTROLS: 'Composite controls',
                SIGNOUT: 'Sign out'
            });

            pipTranslateProvider.translations('ru', {
                COMPOSITE_CONTROLS: 'Composite контролы',
                SIGNOUT: 'Выйти'
            });

            for (i = 0; i < content.length; i++) {
                contentItem = content[i];
                $stateProvider.state(contentItem.state, contentItem);
            }

            pipAuthStateProvider.unauthorizedState('signin');
            pipAuthStateProvider.authorizedState('checklist');

            $urlRouterProvider.otherwise(function ($injector, $location) {
                if ($location.$$path === '') {
                    return '/signin';
                }

                return '/checklist';
            });

            // Configure REST API
            pipRestProvider.serverUrl('http://alpha.pipservices.net');

            // Configure navigation menu
            pipSideNavProvider.sections([
                {
                    links: [{title: 'COMPOSITE_CONTROLS', url: '/checklist'}]
                },
                {
                    links: [{title: 'SIGNOUT', url: '/signout'}]
                }
            ]);
        }
    );

})(window.angular);
