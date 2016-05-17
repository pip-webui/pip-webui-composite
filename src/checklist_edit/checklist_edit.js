/**
 * @file Checklist edit control
 * @copyright Digital Living Software Corp. 2014-2016
 * @todo
 * + Improve samples in sampler app
 * + Renamed to pip-checklist-edit and implement pip-checklist (pip-checklist-view) control
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipChecklistEdit", ['pipCore', 'pipComposite.Templates']);

    /**
     * ngDisabled: '&',
     * pipChanged: '=',
     * pipDraggable: '=',
     * pipOptions: '=',
     * pipScrollContainer: '@'
     */
    thisModule.directive('pipChecklistEdit',
        function () {
            return {
                restrict: 'EA',
                replace: false,
                scope: {
                    ngDisabled: '&',
                    pipChanged: '=',
                    pipDraggable: '=',
                    pipOptions: '=',
                    pipScrollContainer: '@'
                },
                templateUrl: 'checklist_edit/checklist_edit.html',
                controller: 'pipChecklistEditController'
            }
        }
    );

    thisModule.controller('pipChecklistEditController',
        function ($scope, $element, $attrs, $document,pipUtils, $rootScope) {

            $scope.selected = {};
            $scope.selected.index = 0;
            $scope.selected.drag = $scope.pipDraggable;
            $scope.selected.dragInit = $scope.pipDraggable;
            $scope.selected.dragId = 0;
            $scope.selected.id = now();
            $scope.selected.isChanged = false;

            generateList($scope.pipOptions);

            $scope.onTextareaKeyDown = onTextareaKeyDown;
            $scope.onAddItem = onAddItem;
            $scope.onChangeItem = onChangeItem;
            $scope.onClick = onClick;
            $scope.onTextAreaClick = onTextAreaClick;
            $scope.onDropComplete = onDropComplete;
            $scope.onDeleteItem = onDeleteItem;
            $scope.onChecked = onChecked;
            $scope.updateContents = updateContents;
            $scope.onItemFocus = onItemFocus;
            $scope.onMove = onMove;
            $scope.onStart = onStart;
            $scope.onStop = onStop;
            $scope.isDisabled = isDisabled;
            $scope.onDownDragg = onDownDragg;

            $scope.isSelectedItem = isSelectedItem;

            // Watch for options changes
            if (pipUtils.toBoolean($attrs.pipRebind)) {
                $scope.$watchCollection('pipOptions', function (newValue) {
                    if (!$scope.selected.isChanged) {
                        generateList($scope.pipOptions);
                    } else {
                        $scope.selected.isChanged = false;
                    }
                });
            }

            if (pipUtils.toBoolean($attrs.pipRebind)) {
                $scope.$watchCollection('pipDraggable', function (newValue) {
                    $scope.pipDraggable = newValue;
                });
            }

            $scope.onChecklistChange = _.debounce(onChecklistChange , 200);

            // Add class
            $element.addClass('pip-checklist-edit');

            return;

            function getCaret(el) {
                if (el.selectionStart) {
                    return el.selectionStart;
                } else if ($document.selection) {
                    el.focus();

                    var r = $document.selection.createRange();
                    if (r == null) {
                        return 0;
                    }

                    var re = el.createTextRange(),
                        rc = re.duplicate();
                    re.moveToBookmark(r.getBookmark());
                    rc.setEndPoint('EndToStart', re);

                    return rc.text.length;
                }
                return 0;
            }

            function isDisabled() {
                if ($scope.ngDisabled) {
                    return $scope.ngDisabled();
                } else {
                    return false;
                }
            };

            function onItemFocus(index) {
                if (isDisabled()) return;
                $scope.selected.index = index;
            };

            function isSelectedItem(index) {
                var empty;
                try {
                    empty = $scope.checklistContent[index].empty;
                } catch (err) {
                    empty = true;
                }

                return $scope.selected.index == index && $scope.pipDraggable && !empty;
            };

            function setSelectionRange(input, selectionStart, selectionEnd) {
                if (input.setSelectionRange) {
                    input.focus();
                    input.setSelectionRange(selectionStart, selectionEnd);
                }
                else if (input.createTextRange) {
                    var range = input.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', selectionEnd);
                    range.moveStart('character', selectionStart);
                    range.select();
                }
            }

            function setCaretToPos (input, pos) {
                setSelectionRange(input, pos, pos);
            }

            function onTextareaKeyDown($event, index, item) {
                if (isDisabled()) return;
                if ($scope.selected.index == -1) return;


                if ($event && $event.target) {
                    // calculate caret position
                    var posCaret = getCaret($event.target);
                    // calculate textarea length
                    if ($event.target.value !== undefined)
                        var textareaLength = $event.target.value.length;
                }
                
                // delete empty item after backspace or del
                if ($scope.selected.index > 0 && item.text != '' && posCaret == 0 && $event.keyCode == 8  && !$event.ctrlKey && !$event.shiftKey) {
                    if (!item.empty) {
                        var position = $scope.checklistContent[$scope.selected.index - 1].text.length;
                        $scope.checklistContent[$scope.selected.index - 1].text = $scope.checklistContent[$scope.selected.index - 1].text + item.text;
                        $scope.selected.index -= 1;
                        $scope.checklistContent.splice($scope.selected.index + 1, 1);
                        $scope.onChecklistChange();
                        
                        setFocus($scope.selected.index, position);
                    }
                    if ($event) $event.stopPropagation();
                    return false;
                }
                
                if (item.text == '' && ($event.keyCode == 8 || $event.keyCode == 46) && !$event.ctrlKey && !$event.shiftKey) {
                    if (!item.empty) onDeleteItem(index, item);
                    if ($event) $event.stopPropagation();
                    return false;
                }

                //press enter - create new item
                if (($event.keyCode == 13 || $event.keyCode == 45) && !$event.ctrlKey && !$event.shiftKey) {  // insert
                    if (posCaret !== undefined && posCaret == 0) {
                        // add item before current item
                        if ($scope.selected.index > 0) addItem('', $scope.selected.index - 1);
                        else  {
                            $scope.selected.index = -1;
                            addItem('', -1);
                        }
                        if ($event) $event.stopPropagation();
                        if ($event) $event.preventDefault();

                        return false;
                    }

                    if (textareaLength && posCaret && textareaLength == posCaret) {
                        // add item after current item
                        if (!item.empty) {
                            addItem('', $scope.selected.index);
                        }
                        if ($event) $event.stopPropagation();
                        if ($event) $event.preventDefault();
                        return false;
                    } 
                    
                     if (textareaLength && posCaret && textareaLength > posCaret) {
                        // divide current item 
                        if (!item.empty) {
                            var valueCurrent, newItem;
                            valueCurrent = item.text.substring(0, posCaret);
                            newItem = item.text.substring(posCaret);
                            item.text = valueCurrent;
                            addItem(newItem, $scope.selected.index);
                            
                            setFocus($scope.selected.index, 0);
                        }
                        if ($event) $event.stopPropagation();
                        if ($event) $event.preventDefault();
                        return false;
                    } 

                    if ($event) $event.preventDefault();
                    return false;
                }

                // move cursor up
                if ((posCaret === 0 || posCaret == textareaLength) && $scope.checklistContent.length > 1 && $event.keyCode == 38 && !$event.ctrlKey && !$event.shiftKey) {  // insert
                    if ($event) $event.stopPropagation();
                    if ($event) $event.preventDefault();

                    if (posCaret !== undefined && textareaLength !== undefined && posCaret == 0) {
                        // move to new item
                        if ($scope.selected.index == 0) {
                            $scope.selected.index = $scope.checklistContent.length - 1;
                            var position =  $scope.checklistContent[$scope.selected.index].text.length;
                            setFocus($scope.selected.index, position);
                        } else {
                            $scope.selected.index -= 1;
                            var position =  $scope.checklistContent[$scope.selected.index].text.length;
                            setFocus($scope.selected.index, position);
                        }
                    } else {
                        // move caret to text end
                        setFocus($scope.selected.index, 0);
                    }

                    return false;
                }

                // move cursor down
                if ((posCaret === 0 || posCaret == textareaLength) && $scope.checklistContent.length > 1 && $event.keyCode == 40 && !$event.ctrlKey && !$event.shiftKey) {  // insert
                    if ($event) $event.stopPropagation();
                    if ($event) $event.preventDefault();

                    if (posCaret !== undefined && textareaLength !== undefined && posCaret == textareaLength) {
                        // move to new item
                        if ($scope.selected.index >= $scope.checklistContent.length - 1) {
                            $scope.selected.index = 0;
                            setFocus($scope.selected.index, 0);
                        } else {
                            $scope.selected.index += 1;
                            setFocus($scope.selected.index, 0);
                        }
                    } else {
                        // move caret to text end
                        setFocus($scope.selected.index, textareaLength);
                    }

                    return false;
                }

                // delete item
                if (!item.empty && $event.keyCode == 46 && $event.ctrlKey && !$event.shiftKey) {
                    if ($event) $event.stopPropagation();
                    if ($event) $event.preventDefault();
                    onDeleteItem(index, item);
                    return false;
                }

                // check/uncheck item
                if ($event.keyCode == 32 && $event.ctrlKey && !$event.shiftKey) {
                    if ($event) $event.stopPropagation();
                    if ($event) $event.preventDefault();
                    if (item) {
                        item.checked = !item.checked
                        $scope.onChecklistChange();
                    }
                    return false;
                }
            }


            function onAddItem() {
                addItem('', $scope.selected.index - 1);
            };

            function onChangeItem(index) {
                if (index > -1 && $scope.checklistContent[index] && $scope.checklistContent[index].empty) {
                    if ($scope.checklistContent[index].empty) {
                        $scope.checklistContent[index].empty = false;
                        $scope.checklistContent.push(getNewItem('', true));
                    }
                }
                $scope.onChecklistChange();
            };

            function onClick($event, index) {
                if (isDisabled()) return;
                $scope.selected.index = index;

               // if ($event) $event.preventDefault();
            };

            function onTextAreaClick($event, index) {
                if (isDisabled()) return;
                $scope.selected.index = index;
              //  if ($event) $event.stopPropagation();
            };

            function onDropComplete(placeIndex, obj, event, componentId) {
                if ($scope.selected.id != componentId) return;
                if (!$scope.selected.drag) return;
                var index = placeIndex;

                var tmpIndex = $scope.selected.index;

                var checklist = _.cloneDeep($scope.checklistContent);

                if (!(tmpIndex == 0 && placeIndex == 1)) {
                    if (tmpIndex > index) {
                        if (index > checklist.length - 1) index = checklist.length - 1;
                        // move up
                        for (var i = 0; i < tmpIndex - index; i++) {
                            checklist[tmpIndex - i] = checklist[tmpIndex - i - 1];
                        }
                        checklist[index] = obj;
                    }
                    if (tmpIndex < index) {
                        index -= 1;
                        //move down
                        for (var i = 0; i < index - tmpIndex; i++) {
                            checklist[tmpIndex + i] = checklist[tmpIndex + i + 1];
                        }
                        checklist[index] = obj;
                    }

                    $scope.selected.index = index;
                }

                $scope.checklistContent = checklist;

                $scope.onChecklistChange();
            };

            function onMove() {
                setWidth();
                $scope.isWidth = true;
            };


            function onStop(id) {
                setTimeout(function () {
                    $scope.selected.drag = $scope.selected.dragInit;
                    $scope.selected.dragId = 0;
                    $scope.$apply();
                },  50);

                if($scope.isWidth) {
                    setWidth100();
                    $scope.isWidth  = false;
                }
            };

            function onStart(id) {
                $scope.selected.isChanged = true;
                if (id && id != $scope.selected.dragId) $scope.selected.drag = false;
            };

            function onDownDragg(item) {
                if ($scope.pipDraggable && $scope.checklistContent.length > 2 && !item.empty) {
                    $rootScope.$broadcast('onChecklistDrag');
                    $scope.selected.dragId = $scope.selected.id;
                }
            };
            
            function onDeleteItem(index, item) {
              
                if ($scope.checklistContent.length == 1) {
                    $scope.checklistContent[0].text = '';
                    $scope.checklistContent[0].checked = false;
                    $scope.checklistContent[0].empty = true;
                    $scope.selected.index = 0;
                } else {
                    if (index >= 0 && index <= $scope.checklistContent.length)
                        $scope.checklistContent.splice(index, 1);
                    else return;
                }

                if ($scope.selected.index >= $scope.checklistContent.length)
                    $scope.selected.index = $scope.checklistContent.length - 1;

                setFocus($scope.selected.index, 0);
                
                $scope.onChecklistChange();
            };

            function onChecked(item) {
                $scope.onChecklistChange();
            };

            function updateContents() {
                $scope.selected.isChanged = true;
                var content = [], i;
                for (i = 0; i < $scope.checklistContent.length; i++) {
                    if ($scope.checklistContent[i] && !$scope.checklistContent[i].empty) content.push({
                        checked: $scope.checklistContent[i].checked,
                        text: $scope.checklistContent[i].text
                    })
                }
                $scope.pipOptions = content;
            };

            function onChecklistChange() {
                updateContents();
                if ($scope.pipChanged) {
                    $scope.pipChanged();
                }
            };

            function setFocus(index, toPos) {
                if (index > -1) {
                    setTimeout(function () {
                        var nextElement = angular.element('#check-item-text-' + $scope.selected.id + '-' + index);
                        if (nextElement) {
                            nextElement.focus();
                            if (toPos !== undefined && nextElement[0]) setCaretToPos(nextElement[0], toPos);
                        }
                    },  50);
                }
            };

            function addItem(text, index) {
                var newItem = getNewItem(text, false);
                if (index > -1) $scope.selected.index = index;

                if ($scope.checklistContent.length < 2) {
                    $scope.checklistContent.unshift(newItem);
                }
                else {
                    $scope.checklistContent.splice($scope.selected.index + 1, 0, newItem);
                }
                $scope.selected.index += 1;
                setFocus($scope.selected.index);

                $scope.onChecklistChange();
            }

            function getNewItem(text, isEmpty) {
                return {
                    checked: false,
                    text: text || '',
                    empty: isEmpty
                }
            };

            function now(){
                return +new Date;
            }

            function clearList() {
                $scope.selected.index = 0;
                $scope.checklistContent = [];
                // push empty item
                $scope.checklistContent.push(getNewItem('', true));
            };

            function generateList(content) {
                if (!content ||  content.length < 1) {
                    clearList();
                } else {
                    $scope.checklistContent = [];
                    _.each(content, function(item){
                        $scope.checklistContent.push(item);
                    });
                    // push empty item
                    $scope.checklistContent.push(getNewItem('', true));
                }
            };

            function setWidth100() {
                var element = angular.element('#check-item-' + + $scope.selected.id + '-' + $scope.selected.index);
                element.css( "width", 'none');
                element.css( "max-width", 'none');
            };

            function setWidth() {
                if ($scope.isWidth) return;

                var elementEtalon = angular.element('#check-item-empty-' + $scope.selected.id);
                var value = elementEtalon.width();
                var element = angular.element('#check-item-' + $scope.selected.id + '-' + $scope.selected.index);
                if (element) {
                    element.css("width", value + 'px');
                    element.css("max-width", value + 'px');
                }
            };

        }
    );

})();