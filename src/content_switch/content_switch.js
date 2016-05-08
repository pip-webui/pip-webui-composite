/**
 * @file Content switch control
 * @copyright Digital Living Software Corp. 2014-2016
 * @todo
 * - Remove after composite content control is ready
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipContentSwitch", ['pipComposite.Templates']);

    thisModule.directive('pipContentSwitch', 
        function($parse) {
            return {
                restrict: 'EA',
                scope: false,
                templateUrl: 'content_switch/content_switch.html',
                link: function($scope, $element, $attrs) {
    
                    var parentElementNameGetter = $parse($attrs.pipParentElementName);
                    var parentElement = parentElementNameGetter($scope);

                    $scope.onButtonClick = onButtonClick;

                    // Initialization
                    setOption();
                    $element.addClass('pip-content-switch');

                    return ;

                    function scrollTo(childElement) {
                        setTimeout(function () {
                            var modDiff= Math.abs($(parentElement).scrollTop() - $(childElement).position().top);
                            if (modDiff < 20) return;
                            var scrollTo = $(parentElement).scrollTop() + ($(childElement).position().top - 20);
                            $(parentElement).animate({
                                scrollTop: scrollTo + 'px'
                            }, 300);
                        }, 100);
                    };
    
                    function setOption() {
                        if ($scope.contentSwitchOption !== null && $scope.contentSwitchOption !== undefined) {
                            $scope.showIconPicture = $scope.contentSwitchOption.picture ? $scope.contentSwitchOption.picture : $scope.showIconPicture;
                            $scope.showIconDocument = $scope.contentSwitchOption.document ? $scope.contentSwitchOption.document : $scope.showIconDocument;
                            $scope.showIconLocation = $scope.contentSwitchOption.location ? $scope.contentSwitchOption.location : $scope.showIconLocation;
                            $scope.showIconEvent = $scope.contentSwitchOption.event ? $scope.contentSwitchOption.event : $scope.showIconEvent;
                        } else {
                            $scope.showIconPicture = true;
                            $scope.showIconDocument = true;
                            $scope.showIconLocation = true;
                            $scope.showIconEvent = true;
                        }
                    };
    
                    function onButtonClick(type) {
                        if (!parentElement) return;
    
                        switch(type){
                            case 'event':
                                // On Event click action
                                if ($scope.showEvent)
                                    scrollTo('.event-edit');
                                break;
                            case 'documents':
                                // On Documents click action
                                if ($scope.showDocuments)
                                    scrollTo('.pip-document-list-edit');
                                break;
                            case 'pictures':
                                // On Pictures click action
                                if ($scope.showPictures)
                                    scrollTo('.pip-picture-list-edit');
                                break;
                            case 'location':
                                // On Location click action
                                if ($scope.showLocation)
                                    scrollTo('.pip-location-edit');
                                break;
                        };
                    };

                }
            };
        }
    );

})();
