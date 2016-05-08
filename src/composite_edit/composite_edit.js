/**
 * @file Composite edit control
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipCompositeEdit", [
        'pipCore', 'pipDocuments', 'pipLocations', 'pipPictures', 'pipComposite.Templates']);

    thisModule.config(function(pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            'COMPOSITE_TITLE': 'What\'s on your mind?',
            'COMPOSITE_PLACEHOLDER': 'Type text ...',
            'COMPOSITE_START_TIME': 'Start time',
            'COMPOSITE_END_TIME': 'End time'
        });
        pipTranslateProvider.translations('ru', {
            'COMPOSITE_TITLE': 'Что у вас на уме?',
            'COMPOSITE_PLACEHOLDER': 'Введите текст ...',
            'COMPOSITE_START_TIME': 'Время начала',
            'COMPOSITE_END_TIME': 'Время окончания'
        });
    });

    thisModule.directive('pipCompositeEdit',
        function () {
            return {
                restrict: 'EA',
                replace: false,
                scope: {
                    ngDisabled: '&',
                    pipChanged: '&',
                    pipContents: '=',
                    compositeId: '=pipCompositeId',
                    pipCompositePlaceholder: '=',
                    pipScrollContainer: '@',
                    pipAddedContent: '&'
                },
                templateUrl: 'composite_edit/composite_edit.html',
                controller: 'pipCompositeEditController'
            }
        }
    );

    thisModule.controller('pipCompositeEditController',
        function ($scope, $element, $attrs, $rootScope, pipUtils, pipTranslate, $document) {

            var CONTENT_TYPES = ['time', 'text', 'pictures', 'documents', 'checklist', 'location'];

            $scope.selected = {};
            $scope.selected.id = now();
            $scope.selected.index = 0;
            $scope.selected.drag = true;
            $scope.selected.dragId = 0;

            $scope.selected.isChanged = false;
            $scope.toolbarButton = {};
            $scope.rebind = pipUtils.toBoolean($attrs.pipRebind);
            $scope.disableControl = pipUtils.toBoolean($scope.ngDisabled()) != false;
            $scope.addedContent = pipUtils.toBoolean($scope.pipAddedContent()) == true;

            generateList($scope.pipContents);
            setPlaceholder();

            $rootScope.$on('pipAddCompositeItem', function(event, args) {
                if ($scope.compositeId) {
                    if (args.id && args.id == $scope.compositeId) addItem(args.type);
                } else addItem(args.type);
            });

            // Watch for options changes
            if (pipUtils.toBoolean($attrs.pipRebind)) {
                $scope.$watchCollection('pipContents', function (newValue, oldValue) {
                    if (!$scope.selected.isChanged || ($scope.pipContents
                        && $scope.pipContents.length != $scope.compositeContent.length)) {
                        generateList($scope.pipContents);
                        $scope.selected.isChanged = false;
                    }
                });

                $scope.$watch('pipCompositePlaceholder', function (newValue, oldValue) {
                    if ( newValue !== oldValue ) {
                        setPlaceholder();
                    }
                });
            }

            $element.addClass('pip-composite-edit');

            $scope.onDeleteItem = onDeleteItem;
            $scope.onContentChange = onContentChange;
            $scope.isSelectedSection = isSelectedSection;
            $scope.onClick = onClick;
            $scope.onDownDragg = onDownDragg;
            $scope.onDraggEnd = onDraggEnd;
            $scope.onDropComplete = onDropComplete;
            $scope.onKeyUp = onKeyUp;
            $scope.onKeyDown = onKeyDown;
            $scope.onStart = onStart;
            $scope.onStop = onStop;

            $scope.isActiveChecklist = isActiveChecklist;

            $rootScope.$on('onChecklistDrag', function () {
                $scope.selected.drag = false;
                setTimeout(function () {
                    $scope.selected.drag = false;
                    $scope.$apply();
                },  0);
            });

            $rootScope.$on('focusedComposite', function () {
                if ($scope.isFirst) {
                    setTimeout(function () {
                        var nextElement = angular.element('#composite-item-text-' + $scope.selected.id + '-0');
                        if (nextElement && !nextElement.is(':focus')) nextElement.focus();
                    },  50);
                }
            });

            $scope.onCompositeChange = _.debounce(onCompositeChange , 200);

            return;

            function isActiveChecklist(obj) {
                //return obj.id == $scope.selected.index  && !$scope.selected.drag;
                return obj.id == $scope.selected.index;
            };

            function updateContents() {
                $scope.selected.isChanged = true;
                $scope.pipContents = $scope.compositeContent;
            };

            function getParentIndex(el) {
                if (el.length < 1) return null;
                var elParent = el.parent();
                if (elParent[0] && elParent[0].id && elParent[0].id.indexOf('composite-item-' + $scope.selected.id) > -1) {
                    var strs = elParent[0].id.split('-');

                    var parentIndex = parseInt(strs[strs.length - 1], 10);
                    return parentIndex;
                } else return getParentIndex(elParent);
            };

            function onKeyUp($event) {
                if ($event.keyCode == 9) {
                    setTimeout(function () {
                        var focusedElement = angular.element($document[0].activeElement);
                        var parentIndex = getParentIndex(focusedElement);
                        if (parentIndex != null) $scope.selected.index = parentIndex;
                        $scope.$apply($scope.selected.index = $scope.compositeContent[parentIndex].id);
                    },  50);
                }
            };

            function onKeyDown($event, index, item) {
                if ($scope.ngDisabled()) return;
                // delete item
                if (item && !item.empty && $event.keyCode == 46 && !$event.ctrlKey && $event.shiftKey) {
                    if ($event) $event.stopPropagation();
                    if ($event) $event.preventDefault();
                    if (index > -1) {
                        onDeleteItem(index);
                    }

                    return false;
                }
            }

            function onCompositeChange() {
                updateContents();
                if ($scope.pipChanged) $scope.pipChanged();
            };

            function onDeleteItem(index) {
                if (index < 0 || $scope.compositeContent.length == 0) return;

                // delete last element in composite
                if ($scope.compositeContent.length == 1) {
                    $scope.compositeContent[0] = {
                        empty: true,
                        id: getId(),
                        type: 'text',
                        text: '', docs: [], pic_ids: [], loc_pos: null, loc_name: '',
                        start: null, end: null, checklist: []
                    };
                    $scope.selected.index = $scope.compositeContent[0].id;
                    onSelect(0);
                    $scope.isFirst = true;
                    setToolbar();
                } else {
                    if (index >= 0 && index < $scope.compositeContent.length)
                        $scope.compositeContent.splice(index, 1);

                    if (index == $scope.compositeContent.length)
                        $scope.selected.index = $scope.compositeContent[$scope.compositeContent.length - 1].id;
                    else
                        $scope.selected.index = $scope.compositeContent[index].id;

                    onSelect();
                }

                setToolbar();
                $scope.onCompositeChange();
            };

            function onContentChange(obj) {
                if (obj && obj.empty && obj.text) {
                    obj.empty = false;
                    $scope.isFirst = false;
                    setToolbar();
                }
                if (!$scope.ngDisabled()) $scope.onCompositeChange();
            };

            function isSelectedSection(index, obj) {
                return $scope.selected.index == obj.id && !obj.empty;// && $scope.compositeContent.length > 1;
            };

            function onDraggEnd() {
                $scope.selected.drag = true;
            };

            function onStart(id) {
                if (id && id != $scope.selected.dragId) $scope.selected.drag = false;
            };

            function onStop(id) {
                setTimeout(function () {
                    $scope.selected.drag = true;
                    $scope.selected.dragId = 0;
                    $scope.$apply();
                },  500);
            };

            function onDownDragg($event, obj) {
                if ($scope.ngDisabled && $scope.ngDisabled()) return;
                $scope.selected.dragId = $scope.selected.id;
                $scope.selected.drag = true;
                $scope.selected.index = obj.id;
            };

            function onClick($event, index, obj) {
                if ($scope.ngDisabled && $scope.ngDisabled()) return;
                $scope.selected.event = 'onClick';
                if ($event && $event.target && $event.target.tagName &&
                    ($event.target.tagName == 'INPUT' || $event.target.tagName == 'TEXTAREA' )) {
                    $scope.selected.index = obj.id;
                    return;
                }

                if ( $scope.selected.index == obj.id && obj.type == 'checklist' && obj.checklist.length > 0) return;
                if ( $scope.selected.index == obj.id && obj.type == 'location' ) return;

                $scope.selected.index = obj.id;
                onSelect();
            };

            function onDropComplete(placeIndex, obj, event, componentId) {
                if (componentId != $scope.selected.id || !obj || !obj.type) {
                    $scope.compositeContent = _.cloneDeep($scope.pipContents);
                    return;
                }

                var index = placeIndex;
                var tmpIndex = _.findIndex($scope.compositeContent, {id: obj.id}); //$scope.selected.index});

                if (!(tmpIndex == 0 && placeIndex == 1)) {
                    if (tmpIndex > index) {
                        if (index > $scope.compositeContent.length - 1) index = $scope.compositeContent.length - 1;
                        // move up
                        for (var i = 0; i < tmpIndex - index; i++) {
                            $scope.compositeContent[tmpIndex - i] = $scope.compositeContent[tmpIndex - i - 1];
                        }
                        $scope.compositeContent[index] = obj;
                    }
                    if (tmpIndex < index) {
                        index -= 1;
                        //move down
                        for (var i = 0; i < index - tmpIndex; i++) {
                            $scope.compositeContent[tmpIndex + i] = $scope.compositeContent[tmpIndex + i + 1];
                        }
                        $scope.compositeContent[index] = obj;
                    }
                    $scope.selected.index = $scope.compositeContent[index].id;
                }

                onSelect();
                $scope.onCompositeChange();
            };

            function onSelect(index) {
                if (!index) index = _.findIndex($scope.compositeContent, {id: $scope.selected.index});
                if (index < 0) return;

                var item = $scope.compositeContent[index];
                if (_.isEmpty(item)) return;

                switch (item.type) {
                    //case 'text':
                    //        setTimeout(function () {
                    //            var nextElement = angular.element('#composite-item-text-' + $scope.selected.id + '-' + index);
                    //            //var nextElement = angular.element('#composite-item-text-' + $scope.selected.id + '-' + $scope.selected.index);
                    //            if (nextElement && !nextElement.is(':focus')) nextElement.focus();
                    //            //$scope.selected.stopKey = false;
                    //        },  50);
                    //    break;
                    case 'pictures':
                            setTimeout(function () {
                                var nextElement = angular.element(
                                    '#composite-item-' + $scope.selected.id + '-' + index + ' button.pip-picture-upload');
                                if (nextElement && !nextElement.is(':focus')) nextElement.focus();
                                //$scope.selected.stopKey = false;
                            },  50);
                        break;
                    case 'documents':
                            setTimeout(function () {
                                var nextElement = angular.element(
                                    '#composite-item-' + $scope.selected.id + '-' + index + ' button.pip-document-upload');
                                if (nextElement && !nextElement.is(':focus')) nextElement.focus();
                                //$scope.selected.stopKey = false;
                            },  50);
                        break;
                    //case 'checklist':
                    //        setTimeout(function () {
                    //            var nextElement = angular.element(
                    //                '#composite-item-' + $scope.selected.id + '-' + index + ' textarea[id^=\'empty-item-\'');
                    //            if (nextElement && !nextElement.is(':focus')) nextElement.focus();
                    //            //$scope.selected.stopKey = false;
                    //        },  50);
                    //    break;
                    case 'location':
                        setTimeout(function () {
                            var nextElement = angular.element(
                                '#composite-item-' + $scope.selected.id + '-' + index + ' .pip-location-empty  button');
                            if (nextElement && !nextElement.is(':focus')) nextElement.focus();
                            //$scope.selected.stopKey = false;
                        },  50);
                        break;
                    case 'time':
                        break;
                }
            };

            // set element responsive width when element places
            //function setWidth100(index) {
            //    var element = angular.element('#composite-item-' + $scope.selected.id + '-' + index);
            //    element.css( "width", 'none');
            //    element.css( "max-width", 'none');
            //};
            //
            //// set draggable element width when your dragg
            //function setWidth(index) {
            //    if ($scope.selected.isWidth) return;
            //    var elementEtalon = angular.element('#pip-composite-last-' + + $scope.selected.id);
            //    var value = elementEtalon.width();
            //    var element = angular.element('#composite-item-' + $scope.selected.id + '-' + index);
            //    if (element) {
            //        element.css("width", value + 'px');
            //        element.css("max-width", value + 'px');
            //    }
            //};

            function setPlaceholder() {
                $scope.compositePlaceholder =
                    ($scope.pipCompositePlaceholder === undefined || $scope.pipCompositePlaceholder ===  null) ?
                            pipTranslate.translate('COMPOSITE_PLACEHOLDER') :
                            pipTranslate.translate($scope.pipCompositePlaceholder);
            };

            function addItem (contentType, value) {
                if (_.indexOf(CONTENT_TYPES, contentType) < 0) return;

                // generate new item
                var newItem = {
                    id: getId(),
                    type: contentType,
                    text: contentType == 'text' ? value : '',
                    docs: contentType == 'documents' && value ? value : [],
                    pic_ids: contentType == 'pictures' && value ? value : [],
                    loc_pos: contentType == 'location' && value ? value.loc_pos : null,
                    loc_name: contentType == 'location' && value ? value.loc_name : '',
                    start: contentType == 'time' && value ? value.start : null,
                    end: contentType == 'time' && value ? value.end : null,
                    checklist: contentType == 'checklist' && value ? value : []
                };

                // calculate current index
                var index = _.findIndex($scope.compositeContent, {id: $scope.selected.index});
                index = index < 0 ? 0 : index;

                // insert new element and select it
                if ($scope.compositeContent.length == 1 && $scope.compositeContent[0].empty) {
                    //newItem.id = $scope.compositeContent[0].id;
                    $scope.compositeContent[0] = newItem;
                } else {
                    $scope.compositeContent.splice(index + 1, 0, newItem);
                    index += 1;
                }

                // insert new element and select it
                $scope.selected.index = newItem.id;
                onSelect();

                // focus to new element
                setTimeout(scrollTo($scope.pipScrollContainer, '#composite-item-' + $scope.selected.id + '-' + index), 1000);

                // set toolbar
                $scope.isFirst = false;
                setToolbar();
                $scope.onCompositeChange();
            };

            function getId() {
                var id = -1;
                _.each($scope.compositeContent, function(item) {
                    if ( id < item.id ) id = item.id;
                });
                return id + 1;
            };

            function scrollTo(parentElement, childElement) {
                if(!parentElement || !childElement) return;
                setTimeout(function () {
                    if (!$(childElement).position()) return;
                    var modDiff= Math.abs($(parentElement).scrollTop() - $(childElement).position().top);
                    if (modDiff < 20) return;
                    var scrollTo = $(parentElement).scrollTop() + ($(childElement).position().top - 20);
                    $(parentElement).animate({
                        scrollTop: scrollTo + 'px'
                    }, 300);
                }, 100);
            };

            function generateList(content) {
                if (!content ||  content.length < 1) {
                    clearList();
                    return;
                } else {
                    $scope.compositeContent = [];
                    _.each(content, function(item){
                        item.id = getId();
                        $scope.compositeContent.push(item);
                    });
                    $scope.isFirst = false;
                }

                setToolbar();
            };

            function setToolbar(){
                if ($scope.compositeContent.length > 2) return;
                $rootScope.$emit('pipCompositeNotEmpty', !$scope.isFirst);
            };

            function clearList() {
                $scope.compositeContent = [];
                $scope.compositeContent.push({
                    empty: true,
                    id: getId(),
                    type: 'text',
                    text: '', docs: [], pic_ids: [], loc_pos: null, loc_name: '',
                    start: null, end: null, checklist: []
                });
                $scope.isFirst = true;
            };

            function now(){
                return +new Date;
            }
        }
    );

})();