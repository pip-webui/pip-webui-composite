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
                    controller: 'ChecklistController', templateUrl: 'checklist/checklist.html', auth: false },
                { title: 'Composite Empty', state: 'composite_empty', url: '/composite_empty',
                    controller: 'CompositeEmptyController',
                    templateUrl: 'composite_empty/composite_empty.html', auth: false },
                { title: 'Composite', state: 'composite', url: '/composite',
                    controller: 'CompositeController', templateUrl: 'composite/composite.html', auth: false },
                { title: 'Composite View', state: 'composite_view', url: '/composite_view',
                    controller: 'CompositeViewController',
                    templateUrl: 'composite_view_sample/composite_view.html', auth: false },
                { title: 'Composite Summary', state: 'composite_summary', url: '/composite_summary',
                    controller: 'CompositeSummaryController',
                    templateUrl: 'composite_summary_sample/composite_summary.html', auth: false },
                { title: 'ContentSwitch', state: 'content_switch', url: '/content_switch',
                    controller: 'ContentSwitchController',
                    templateUrl: 'content_switch_sample/content_switch.html', auth: false },
                { title: 'MobileTouch', state: 'mobile_touch', url: '/mobile_touch',
                    controller: 'MobileTouchController', templateUrl: 'mobile_touch/mobile_touch.html', auth: false }
                ],
                contentItem, i;

            $mdIconProvider.iconSet('icons', 'images/icons.svg', 512);

            pipAppBarProvider.globalSecondaryActions([
                {name: 'global.signout', title: 'SIGNOUT', state: 'signout'}
            ]);

            // String translations
            pipTranslateProvider.translations('en', {
                COMPOSITE_CONTROLS: 'Composite controls',
                SIGNOUT: 'Sign out',
                SAMPLE: 'sample'
            });

            pipTranslateProvider.translations('ru', {
                COMPOSITE_CONTROLS: 'Composite контролы',
                SIGNOUT: 'Выйти',
                SAMPLE: 'пример'
            });

            for (i = 0; i < content.length; i++) {
                contentItem = content[i];
                $stateProvider.state(contentItem.state, contentItem);
            }

            pipAuthStateProvider.unauthorizedState('signin');
            pipAuthStateProvider.authorizedState('checklist');

            $urlRouterProvider.otherwise('/checklist');

            // Configure REST API
            pipRestProvider.serverUrl('http://alpha.pipservices.net');

            // Configure navigation menu
            pipSideNavProvider.sections([
                {
                    links: [{title: 'COMPOSITE_CONTROLS', url: '/checklist'}]
                }/*,
                {
                    links: [{title: 'SIGNOUT', url: '/signout'}]
                }*/
            ]);
        }
    );

})(window.angular);
