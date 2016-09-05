(function(module) {
try {
  module = angular.module('pipComposite.Templates');
} catch (e) {
  module = angular.module('pipComposite.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('checklist_edit/checklist_edit.html',
    '<!--\n' +
    '@file Checklist edit control content\n' +
    '@copyright Digital Living Software Corp. 2014-2016\n' +
    '-->\n' +
    '\n' +
    '<div ng-class="{\'pip-checklist-draggable\': selected.drag}" id="{{\'checklist-\'  + selected.id}}">\n' +
    '    <div ng-repeat="item in checklistContent"\n' +
    '         ng-mousedown="onClick($event, $index)"\n' +
    '         class="pip-checklist-item"\n' +
    '         id="{{\'check-item-\'  + selected.id + \'-\' +  $index}}"\n' +
    '         pip-drag="checklistContent.length > 1 && selected.drag && !item.empty"\n' +
    '         pip-drag-data="item"\n' +
    '         pip-force-touch = "true"\n' +
    '         pip-touch-delay="30"\n' +
    '         pip-drop="true"\n' +
    '         pip-drag-stop="onStop(selected.id)"\n' +
    '         pip-drag-start="onStart(selected.id)"\n' +
    '         pip-scroll-container="pipScrollContainer"\n' +
    '         pip-drop-success="onDropComplete($index, $data, $event, selected.id)">\n' +
    '\n' +
    '        <div ng-class="{\'put_place\': selected.drag}"></div>\n' +
    '        <div class="pip-checklist-item-body layout-row layout-align-start-start"\n' +
    '             pip-cancel-drag="true"\n' +
    '             ng-class="{ \'select-active-item\': isSelectedItem($index) }">\n' +
    '\n' +
    '            <div class="pip-checklist-button"  pip-cancel-drag="true">\n' +
    '                <md-button pip-drag-handle\n' +
    '                           class="pip-icon-checklist-button md-icon-button no-ripple-container"\n' +
    '                           aria-label="REARRANGE"\n' +
    '                           tabindex="-1"\n' +
    '                           pip-mobile-mousedown="onDownDragg(item)"\n' +
    '                           pip-mobile-mouseup="onDraggEnd()"\n' +
    '                           ng-if="pipDraggable && checklistContent.length > 2 && !item.empty"\n' +
    '                           ng-class="checklistContent.length > 1 ? \'cursor-move\' : \'cursor-default\'"\n' +
    '                           ng-disabled="ngDisabled()">\n' +
    '                    <md-icon class="text-grey" md-svg-icon="icons:vhandle"></md-icon>\n' +
    '                </md-button>\n' +
    '            </div>\n' +
    '            <div class="pip-checklist-button" style="overflow: hidden"  pip-cancel-drag="true">\n' +
    '                <div class="pip-checklist-button-container">\n' +
    '                    <md-button class="pip-icon-checklist-button md-icon-button"\n' +
    '                               ng-show="item.empty"\n' +
    '                               ng-disabled="ngDisabled()"\n' +
    '                               md-ink-ripple\n' +
    '                               ng-click="onAddItem()"\n' +
    '                               tabindex="-1"\n' +
    '                               aria-label="PLUS">\n' +
    '                        <md-icon class="text-grey" md-svg-icon="icons:plus"></md-icon>\n' +
    '                    </md-button>\n' +
    '                    <md-checkbox ng-model="item.checked"\n' +
    '                                 ng-show="!item.empty"\n' +
    '                                 aria-label="COMPLETE"\n' +
    '                                 pip-cancel-drag="true"\n' +
    '                                 ng-focus="onItemFocus($index)"\n' +
    '                                 ng-change="onChecked(item)"\n' +
    '                                 ng-disabled="ngDisabled()">\n' +
    '                    </md-checkbox>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="pip-checklist-text flex " pip-cancel-drag="true">\n' +
    '                <md-input-container md-no-float class="flex" >\n' +
    '                    <textarea ng-model="item.text"\n' +
    '                              name="{{\'text\' + $index}}"\n' +
    '                              aria-label="TEXT"\n' +
    '                              class="pip-text-checkbox"\n' +
    '                              ng-focus="onItemFocus($index)"\n' +
    '                              ng-change="onChangeItem($index)"\n' +
    '                              ng-keydown="onTextareaKeyDown($event, $index, item)"\n' +
    '                              placeholder="{{::\'TEXT\' | translate}}"\n' +
    '                              id="{{\'check-item-text-\' + selected.id + \'-\' + $index}}"\n' +
    '                              ng-disabled="ngDisabled()">\n' +
    '                    </textarea>\n' +
    '                </md-input-container>\n' +
    '            </div>\n' +
    '            <div class="pip-checklist-button"  pip-cancel-drag="true">\n' +
    '                <md-button class="pip-icon-checklist-button md-icon-button" md-ink-ripple\n' +
    '                           ng-click="onDeleteItem($index, item)"\n' +
    '                           ng-disabled="ngDisabled()"\n' +
    '                           tabindex="-1"\n' +
    '                           ng-focus="onItemFocus($index)"\n' +
    '                           ng-show="isSelectedItem($index)"\n' +
    '                           aria-label="DELETE-ITEM">\n' +
    '                    <md-icon class="text-grey" md-svg-icon="icons:cross-circle"></md-icon>\n' +
    '                </md-button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div id="{{\'check-item-empty-\' + selected.id}}"\n' +
    '         class="pip-empty-text"\n' +
    '         pip-drag="false"\n' +
    '         pip-drop="true"\n' +
    '         pip-drop-success="onDropComplete(checklistContent.length, $data, $event, selected.id)">\n' +
    '        <div ng-class="{\'put_place\': selected.drag}"></div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipComposite.Templates');
} catch (e) {
  module = angular.module('pipComposite.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('checklist_view/checklist_view.html',
    '<div ng-repeat="item in checklistContent track by $index">\n' +
    '    <div class="pip-checklist-item layout-row layout-align-start-start">\n' +
    '        <div class="pip-checklist-icon">\n' +
    '            <md-checkbox  ng-model="item.checked"\n' +
    '                          ng-click="onClick($event, item)"\n' +
    '                          aria-label="COMPLETE"\n' +
    '                          ng-disabled="ngDisabled()">\n' +
    '            </md-checkbox>\n' +
    '        </div>\n' +
    '        <div class="pip-checklist-text flex">\n' +
    '            <pip-markdown pip-text="item.text"\n' +
    '                          pip-rebind="true"\n' +
    '                          ng-disabled="true">\n' +
    '            </pip-markdown>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipComposite.Templates');
} catch (e) {
  module = angular.module('pipComposite.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('composite_edit/composite_edit.html',
    '<!--\n' +
    '@file Composite edit control content\n' +
    '@copyright Digital Living Software Corp. 2014-2016\n' +
    '-->\n' +
    '\n' +
    '<div class="divider-top">\n' +
    '    <div class="pip-composite-body"\n' +
    '         ng-show="compositeContent.length != 0"\n' +
    '         ng-class="{\'drag-active\': selected.drag}">\n' +
    '\n' +
    '        <div class="pip-composite-item"\n' +
    '             ng-repeat="obj in compositeContent track by obj.id"\n' +
    '             ng-mousedown="onClick($event, $index, obj)"\n' +
    '             ng-class="{\'selected-content\': isSelectedSection($index, obj),\n' +
    '                        \'composite-animate\': !obj.empty && compositeContent.length > 1}"\n' +
    '             ng-keyup="onKeyUp($event)"\n' +
    '             ng-keydown="onKeyDown($event, $index, obj)"\n' +
    '             pip-drag="compositeContent.length > 1 && selected.drag"\n' +
    '             pip-touch-delay="10"\n' +
    '             pip-drag-data="obj"\n' +
    '             pip-scroll-container="pipScrollContainer"\n' +
    '             pip-drop="true"\n' +
    '             pip-force-touch = "true"\n' +
    '             pip-drag-stop="onStop(selected.id)"\n' +
    '             pip-drag-start="onStart(selected.id)"\n' +
    '             pip-drop-success="onDropComplete($index, $data, $event, selected.id)"\n' +
    '             id="{{\'composite-item-\' + selected.id + \'-\' + $index}}">\n' +
    '\n' +
    '            <!--<div ng-class="{\'putt_box\': selected.drag}"></div>-->\n' +
    '            <div class="putt_box"></div>\n' +
    '            <div class="pip-section-header layout-row layout-align-start-center"\n' +
    '                 ng-if="!obj.empty">\n' +
    '                <div class="w38"></div>\n' +
    '                <md-button class="md-icon-button md-icon-button-little icon-rearrange-btn no-ripple-container rm8 cursor-move"\n' +
    '                           ng-if="!ngDisabled() && compositeContent.length > 1"\n' +
    '                           pip-drag-handle\n' +
    '                           pip-mobile-mousedown="onDownDragg($event, obj)"\n' +
    '                           pip-mobile-mouseup="onDraggEnd()"\n' +
    '                           tabindex="-1"\n' +
    '                           aria-label="COMPOSITE-DRAGG"\n' +
    '                           ng-hide="compositeContent.length == 1">\n' +
    '                    <md-icon class="composite-icon cursor-move" md-svg-icon="icons:handle"></md-icon>\n' +
    '                </md-button>\n' +
    '                <div>\n' +
    '                    <md-button class="md-icon-button md-icon-button-little rm8"\n' +
    '                               ng-click="onDeleteItem($index)"\n' +
    '                               ng-disabled="ngDisabled()"\n' +
    '                               aria-label="COMPOSITE-DELETE">\n' +
    '                        <md-icon class="composite-icon" md-svg-icon="icons:cross"></md-icon>\n' +
    '                    </md-button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <!--pip-prevent-drag-->\n' +
    '            <!-- for text -->\n' +
    '            <div class="pip-section-content rp24-flex lp24-flex tp16 bp16"\n' +
    '                 ng-if="obj.type == \'text\'" pip-cancel-drag="true">\n' +
    '                <md-input-container class="p0 m0 w-stretch" md-no-float>\n' +
    '                            <textarea ng-model="obj.text" aria-label="text"\n' +
    '                                      placeholder="{{ isFirst ? compositePlaceholder : \'TEXT\' | translate}}"\n' +
    '                                      id="{{\'composite-item-text-\' + selected.id + \'-\' + $index}}"\n' +
    '                                      ng-change="onContentChange(obj)"\n' +
    '                                      pip-cancel-drag="true"\n' +
    '                                      ng-disabled="ngDisabled()">\n' +
    '                            </textarea>\n' +
    '                </md-input-container>\n' +
    '            </div>\n' +
    '            <!-- -->\n' +
    '            <div class="pip-section-content rp24-flex lp24-flex vp20"\n' +
    '                 ng-if="obj.type == \'pictures\'" pip-cancel-drag="true">\n' +
    '                <pip-picture-list-edit class="w-stretch"\n' +
    '                                       pip-cancel-drag="true"\n' +
    '                                       pip-picture-ids="obj.pic_ids"\n' +
    '                                       pip-changed="onContentChange(obj)"\n' +
    '                                       pip-created="obj.pictures = $event.sender"\n' +
    '                                       pip-cancel-drag="true"\n' +
    '                                       pip-added-picture="addedContent"\n' +
    '                                       ng-disabled="ngDisabled()">\n' +
    '                </pip-picture-list-edit>\n' +
    '            </div>\n' +
    '            <!-- -->\n' +
    '            <div class="pip-section-content rp24-flex lp24-flex vp20"\n' +
    '                 ng-if="obj.type == \'documents\'" pip-cancel-drag="true">\n' +
    '                <pip-document-list-edit class="w-stretch"\n' +
    '                                        pip-documents="obj.docs"\n' +
    '                                        pip-cancel-drag="true"\n' +
    '                                        pip-changed="onContentChange(obj)"\n' +
    '                                        pip-cancel-drag="true"\n' +
    '                                        pip-created="obj.documents = $event.sender"\n' +
    '                                        pip-added-document="addedContent"\n' +
    '                                        ng-disabled="ngDisabled()">\n' +
    '                </pip-document-list-edit>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="pip-section-content layout-row layout-align-start-center"\n' +
    '                 ng-if="obj.type == \'checklist\'" pip-cancel-drag="true">\n' +
    '                <pip-checklist-edit pip-options="obj.checklist"\n' +
    '                                    pip-draggable="isActiveChecklist(obj)"\n' +
    '                                    pip-changed="onContentChange(obj)"\n' +
    '                                    ng-disabled="ngDisabled()"\n' +
    '                                    pip-scroll-container="{{pipScrollContainer}}"\n' +
    '                                    pip-rebind="true">\n' +
    '                </pip-checklist-edit>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="pip-section-content vp20 rp24-flex lp24-flex"\n' +
    '                 ng-if="obj.type == \'location\'" pip-cancel-drag="true">\n' +
    '                <pip-location-edit class="pip-location-attachments w-stretch"\n' +
    '                                   pip-location-name="obj.loc_name"\n' +
    '                                   pip-location-pos="obj.loc_pos"\n' +
    '                                   pip-cancel-drag="true"\n' +
    '                                   pip-location-holder="pipLocationHolder"\n' +
    '                                   pip-changed="onContentChange(obj)"\n' +
    '                                   ng-disabled="ngDisabled()">\n' +
    '                </pip-location-edit>\n' +
    '            </div>\n' +
    '            <!-- -->\n' +
    '            <div class="pip-section-content bp16-flex rp24-flex lp24-flex tp20"\n' +
    '                 ng-if="obj.type == \'time\'" pip-cancel-drag="true">\n' +
    '                <pip-time-range-edit class="w-stretch"\n' +
    '                               pip-start-date="obj.start"\n' +
    '                               pip-end-date="obj.end"\n' +
    '                               pip-size="$sizeGtSmall"\n' +
    '                               pip-changed="onContentChange(obj)"\n' +
    '                               ng-disabled="ngDisabled()"\n' +
    '                               pip-start-label="{{ \'COMPOSITE_START_TIME\' | translate }}"\n' +
    '                               pip-end-label="{{ \'COMPOSITE_END_TIME\' | translate }}">\n' +
    '                </pip-time-range-edit>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="pip-composite-item w-stretch"\n' +
    '             pip-drag="false"\n' +
    '             pip-drop="true"\n' +
    '             pip-drop-success="onDropComplete(compositeContent.length, $data, $event, selected.id)"\n' +
    '             pip-drag-stop="onStop(selected.id)"\n' +
    '             pip-drag-start="onStart(selected.id)"\n' +
    '             id="{{\'pip-composite-last-\' + selected.id}}">\n' +
    '\n' +
    '            <!--<div ng-class="{\'putt_box\': selected.drag}"></div>-->\n' +
    '            <div class="putt_box"></div>\n' +
    '            <div class="pip-section-content h24" style="border: 0px!important;">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipComposite.Templates');
} catch (e) {
  module = angular.module('pipComposite.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('composite_toolbar/composite_toolbar.html',
    '<!--\n' +
    '@file Composite toolbar control content\n' +
    '@copyright Digital Living Software Corp. 2014-2016\n' +
    '-->\n' +
    '\n' +
    '<div class="layout-row layout-align-start-start flex">\n' +
    '    <md-button class="pip-composite-button"\n' +
    '               ng-if="!emptyState"\n' +
    '               ng-class="{ \'remove-item\': !emptyState ,\n' +
    '                                \'new-item\': !emptyState }"\n' +
    '               ng-click="onAddItem(\'text\');"\n' +
    '               aria-label="COMPOSITE-BUTTON-TEXT"\n' +
    '               ng-disabled="ngDisabled()">\n' +
    '        <md-icon class="icon-text-block" md-svg-icon="icons:text"></md-icon>\n' +
    '        <md-tooltip>{{::\'TEXT\'| translate}}</md-tooltip>\n' +
    '    </md-button>\n' +
    '    <md-button ng-if="toolbarButton.checklist"\n' +
    '               ng-click="onAddItem(\'checklist\')"\n' +
    '               ng-disabled="ngDisabled()"\n' +
    '               class="pip-composite-button"\n' +
    '               aria-label="COMPOSITE-BUTTON-CHECKLIST">\n' +
    '        <md-icon class="icon-checkbox-on" md-svg-icon="icons:checkbox-on"></md-icon>\n' +
    '        <md-tooltip>{{::\'CHECKLIST\'| translate}}</md-tooltip>\n' +
    '    </md-button>\n' +
    '    <md-button ng-if="toolbarButton.picture"\n' +
    '               ng-click="onAddItem(\'pictures\')"\n' +
    '               ng-disabled="ngDisabled()"\n' +
    '               class="pip-composite-button"\n' +
    '               aria-label="COMPOSITE-BUTTON-PICTURES">\n' +
    '        <md-icon class="icon-camera" md-svg-icon="icons:camera"></md-icon>\n' +
    '        <md-tooltip>{{::\'PICTURE\'| translate}}</md-tooltip>\n' +
    '    </md-button>\n' +
    '    <md-button ng-click="onAddItem(\'documents\')"\n' +
    '               ng-if="toolbarButton.document"\n' +
    '               ng-disabled="ngDisabled()"\n' +
    '               class="pip-composite-button"\n' +
    '               aria-label="COMPOSITE-BUTTON-DOCUMENTS">\n' +
    '        <md-icon class="icon-document" md-svg-icon="icons:document"></md-icon>\n' +
    '        <md-tooltip>{{::\'DOCUMENT\'| translate}}</md-tooltip>\n' +
    '    </md-button>\n' +
    '    <md-button ng-click="onAddItem(\'location\')"\n' +
    '               ng-if="toolbarButton.location"\n' +
    '               ng-disabled="ngDisabled()"\n' +
    '               class="pip-composite-button"\n' +
    '               aria-label="COMPOSITE-BUTTON-LOCATIONS">\n' +
    '        <md-icon class="icon-location" md-svg-icon="icons:location"></md-icon>\n' +
    '        <md-tooltip>{{::\'LOCATION\'| translate}}</md-tooltip>\n' +
    '    </md-button>\n' +
    '    <md-button ng-click="onAddItem(\'time\')"\n' +
    '               ng-if="toolbarButton.event"\n' +
    '               ng-disabled="ngDisabled()"\n' +
    '               class="pip-composite-button"\n' +
    '               aria-label="COMPOSITE-BUTTON-TIME">\n' +
    '        <md-icon class="icon-time" md-svg-icon="icons:time"></md-icon>\n' +
    '        <md-tooltip>{{::\'TIME\'| translate}}</md-tooltip>\n' +
    '    </md-button>\n' +
    '\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipComposite.Templates');
} catch (e) {
  module = angular.module('pipComposite.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('composite_summary/composite_summary.html',
    '<div ng-repeat="item in compositeContent track by $index">\n' +
    '\n' +
    '    <!-- for text -->\n' +
    '    <div class="pip-composite-text" ng-if="item.type == \'text\' && item.text">\n' +
    '        <pip-markdown pip-text="item.text"\n' +
    '                      pip-line-count="{{textSize}}"\n' +
    '                      pip-rebind="true"\n' +
    '                      ng-disabled="true">\n' +
    '        </pip-markdown>\n' +
    '    </div>\n' +
    '    <!-- for pictures -->\n' +
    '    <div ng-if="item.type == \'pictures\' && item.pic_ids.length > 0"\n' +
    '         ng-class=" compositeContent[$index - 1].type != \'pictures\' ?\n' +
    '                    compositeContent[$index + 1].type != \'pictures\' ? \'tm16 bm16\' : \'tm16 bm0\' :\n' +
    '                    compositeContent[$index + 1].type != \'pictures\' ? \'tm8 bm16\' : \'tm8 bm0\' "\n' +
    '         class="pip-composite-pictures">\n' +
    '        <pip-collage ng-if="rebind"\n' +
    '                     pip-picture-ids="item.pic_ids"\n' +
    '                     pip-unique-code="item.id"\n' +
    '                     pip-multiple="true"\n' +
    '                     pip-open="disableControl"\n' +
    '                     pip-rebind="true"\n' +
    '                     ng-disabled="disableControl">\n' +
    '        </pip-collage>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- for documents -->\n' +
    '    <div ng-if="item.type == \'documents\' && item.docs.length > 0"\n' +
    '         class="pip-composite-documents layout-row flex">\n' +
    '        <pip-document-list class="flex"\n' +
    '                           pip-documents="item.docs"\n' +
    '                           pip-rebind="true"\n' +
    '                           pip-document-icon="true"\n' +
    '                           pip-collapse="true"\n' +
    '                           ng-disabled="disableControl">\n' +
    '        </pip-document-list>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--for checklist -->\n' +
    '    <div ng-if="item.type == \'checklist\' && item.checklist.length > 0"\n' +
    '         class="pip-composite-checklist">\n' +
    '        <pip-checklist-view pip-options="item.checklist"\n' +
    '                            pip-changed="onContentChange()"\n' +
    '                            pip-rebind="true"\n' +
    '                            pip-collapse="true"\n' +
    '                            ng-disabled="disabledChecklist">\n' +
    '        </pip-checklist-view>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--for location -->\n' +
    '    <div class="pip-composite-location layout-row layout-align-start-center flex"\n' +
    '         ng-if="item.type == \'location\' && (item.loc_pos || item.loc_name)">\n' +
    '\n' +
    '        <pip-location class="flex"\n' +
    '                      pip-location-name="item.loc_name"\n' +
    '                      pip-location-pos="item.loc_pos"\n' +
    '                      pip-collapse="true"\n' +
    '                      pip-show-location-icon="true"\n' +
    '                      ng-disabled="disableControl"\n' +
    '                      pip-rebind="true">\n' +
    '        </pip-location>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- for time -->\n' +
    '    <div class="pip-composite-time layout-row layout-align-start-center flex"\n' +
    '         ng-if="item.type == \'time\' && (item.start || item.end)">\n' +
    '\n' +
    '        <md-icon md-svg-icon="icons:time" class="rm24 lm0"></md-icon>\n' +
    '        <pip-time-range\n' +
    '                pip-start-date="item.start"\n' +
    '                pip-end-date="item.end"\n' +
    '                pip-rebind="true"\n' +
    '                ng-disabled="disableControl">\n' +
    '        </pip-time-range>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('pipComposite.Templates');
} catch (e) {
  module = angular.module('pipComposite.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('composite_view/composite_view.html',
    '<div ng-repeat="item in compositeContent track by $index">\n' +
    '\n' +
    '    <!-- for text -->\n' +
    '    <div class="pip-composite-text lp24-flex rp24-flex" ng-if="item.type == \'text\' && item.text" ng-class="{\'bm16\': $last}">\n' +
    '        <pip-markdown pip-text="item.text"\n' +
    '                      pip-rebind="true"\n' +
    '                      ng-disabled="true">\n' +
    '        </pip-markdown>\n' +
    '    </div>\n' +
    '    <!-- for pictures -->\n' +
    '    <div ng-if="item.type == \'pictures\' && item.pic_ids.length > 0"\n' +
    '         ng-class=" compositeContent[$index - 1].type != \'pictures\' ?\n' +
    '                    compositeContent[$index + 1].type != \'pictures\' ? \'tm16 bm16\' : \'tm16 bm0\' :\n' +
    '                    compositeContent[$index + 1].type != \'pictures\' ? \'tm8 bm16\' : \'tm8 bm0\' "\n' +
    '         class="pip-composite-pictures lp24-flex rp24-flex">\n' +
    '        <pip-collage ng-if="rebind"\n' +
    '                pip-picture-ids="item.pic_ids"\n' +
    '                pip-unique-code="item.id"\n' +
    '                pip-multiple="true"\n' +
    '                pip-open="true"\n' +
    '                pip-rebind="true"\n' +
    '                ng-disabled="ngDisabled()">\n' +
    '        </pip-collage>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- for documents -->\n' +
    '    <div ng-if="item.type == \'documents\' && item.docs.length > 0"\n' +
    '         class="pip-composite-documents layout-row layout-align-start-start flex">\n' +
    '        <pip-document-list pip-documents="item.docs"\n' +
    '                           pip-document-icon="true"\n' +
    '                           pip-rebind="true"\n' +
    '                           ng-disabled="ngDisabled()">\n' +
    '        </pip-document-list>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--for checklist -->\n' +
    '    <div ng-if="item.type == \'checklist\' && item.checklist.length > 0"\n' +
    '         class="pip-composite-checklist lp24-flex rp24-flex">\n' +
    '        <pip-checklist-view pip-options="item.checklist"\n' +
    '                            pip-changed="onContentChange()"\n' +
    '                            pip-rebind="true"\n' +
    '                            ng-disabled="isDisabled()">\n' +
    '        </pip-checklist-view>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--for location -->\n' +
    '    <div class="pip-composite-location layout-row layout-align-start-start flex"\n' +
    '         ng-if="item.type == \'location\' && (item.loc_pos || item.loc_name)">\n' +
    '\n' +
    '        <pip-location class="flex"\n' +
    '                      pip-location-name="item.loc_name"\n' +
    '                      pip-location-pos="item.loc_pos"\n' +
    '                      pip-show-location-icon="true"\n' +
    '                      pip-collapse="false"\n' +
    '                      ng-disabled="ngDisabled()"\n' +
    '                      pip-rebind="true">\n' +
    '        </pip-location>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- for time -->\n' +
    '    <div class="pip-composite-time lp24-flex rp24-flex layout-row layout-align-start-center  flex"\n' +
    '         ng-if="item.type == \'time\'">\n' +
    '\n' +
    '        <md-icon md-svg-icon="icons:time" class="lm0"></md-icon>\n' +
    '        <pip-time-range\n' +
    '                pip-start-date="item.start"\n' +
    '                pip-end-date="item.end"\n' +
    '                pip-rebind="true"\n' +
    '                ng-disabled="ngDisabled()">\n' +
    '        </pip-time-range>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('pipComposite.Templates');
} catch (e) {
  module = angular.module('pipComposite.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('content_switch/content_switch.html',
    '<!--\n' +
    '@file Content switch control content\n' +
    '@copyright Digital Living Software Corp. 2014-2016\n' +
    '-->\n' +
    '\n' +
    '<md-button ng-click="showPictures = !showPictures; onButtonClick(\'pictures\')"\n' +
    '           aria-label="showPictures"\n' +
    '           class="md-icon-button"\n' +
    '           ng-show="showIconPicture"\n' +
    '           ng-disabled="transaction.busy()">\n' +
    '        <md-icon class="active-camera"\n' +
    '                 ng-class="{ \'active-camera\': showPictures }"\n' +
    '                 md-svg-icon="icons:camera"></md-icon>\n' +
    '</md-button>\n' +
    '<md-button ng-click="showDocuments = !showDocuments; onButtonClick(\'documents\')"\n' +
    '           aria-label="showDocuments"\n' +
    '           class="md-icon-button"\n' +
    '           ng-show="showIconDocument"\n' +
    '           ng-disabled="transaction.busy()">\n' +
    '    <md-icon ng-class="{ \'active-document\': showDocuments }" md-svg-icon="icons:document"></md-icon>\n' +
    '</md-button>\n' +
    '<md-button ng-click="showEvent = !showEvent; onButtonClick(\'event\')"\n' +
    '           aria-label="showEvent"\n' +
    '           class="md-icon-button"\n' +
    '           ng-show="showIconEvent"\n' +
    '           ng-disabled="transaction.busy()">\n' +
    '    <md-icon ng-class="{ \'active-time\': showEvent }" md-svg-icon="icons:time"></md-icon>\n' +
    '</md-button>\n' +
    '<md-button ng-click="showLocation = !showLocation; onButtonClick(\'location\')"\n' +
    '           aria-label="showLocation"\n' +
    '           class="md-icon-button"\n' +
    '           ng-show="showIconLocation"\n' +
    '           ng-disabled="transaction.busy()">\n' +
    '    <md-icon ng-class="{ \'active-location\': showLocation }" md-svg-icon="icons:location"></md-icon>\n' +
    '</md-button>');
}]);
})();

/**
 * @file Registration of composite WebUI controls
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    angular.module('pipComposite', [        
        'pipContentSwitch',
        'pipChecklistEdit',
        'pipChecklistView',
        'pipCompositeEdit',
        'pipCompositeView',
        'pipCompositeSummary',
        'pipCompositeToolbar',
        'pipCompositeFocused',

        'pipMobileMouseup',
        'pipMobileMousedown'
    ]);
    
})();



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
        ['$scope', '$element', '$attrs', '$document', 'pipUtils', '$rootScope', function ($scope, $element, $attrs, $document,pipUtils, $rootScope) {

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

        }]
    );

})();
/**
 * @file Composite edit control
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipCompositeEdit", [
        'pipCore', 'pipDocuments', 'pipLocations', 'pipPictures', 'pipComposite.Templates']);

    thisModule.config(['pipTranslateProvider', function(pipTranslateProvider) {
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
    }]);

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
        ['$scope', '$element', '$attrs', '$rootScope', 'pipUtils', 'pipTranslate', '$document', function ($scope, $element, $attrs, $rootScope, pipUtils, pipTranslate, $document) {

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
        }]
    );

})();
/**
 * @file Checklist view control
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipChecklistView", ['pipCore', 'pipComposite.Templates']);

    thisModule.directive('pipChecklistView',
        function () {
            return {
                restrict: 'EA',
                replace: false,
                scope: {
                    ngDisabled: '&',
                    pipChanged: '&',
                    pipOptions: '='
                },
                templateUrl: 'checklist_view/checklist_view.html',
                controller: 'pipChecklistViewController'
            }
        }
    );

    thisModule.controller('pipChecklistViewController',
        ['$scope', '$element', '$attrs', 'pipUtils', function ($scope, $element, $attrs, pipUtils) {

            $scope.disableControl = pipUtils.toBoolean($scope.ngDisabled()) != false;
            $scope.rebind = pipUtils.toBoolean($attrs.pipRebind);
            $scope.selected = {};
            $scope.selected.isChanged = false;

            generateList($scope.pipOptions);

            // Add class
            $element.addClass('pip-checklist-view');

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

            $scope.updateContents = updateContents;
            $scope.onClick = onClick;

            return;

            function updateContents() {
                $scope.selected.isChanged = true;
                $scope.pipOptions = $scope.checklistContent;
            };

            function onChecklistChange() {
                updateContents();
                if ($scope.pipChanged) {
                    $scope.pipChanged();
                }
            };

            function clearList() {
                $scope.checklistContent = [];
            };

            function generateList(content) {
                if (!content ||  content.length < 1) {
                    clearList();
                    return;
                } else {
                    $scope.checklistContent = [];
                    _.each(content, function(item){
                        $scope.checklistContent.push(item);
                    });
                }
            };

            function onClick($event, item) {
                if ($event) $event.stopPropagation();
                if ($scope.ngDisabled && $scope.ngDisabled()) return;

                onChecklistChange();
            };

        }]
    );

})();

/**
 * @file Composite summary control
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipCompositeSummary", [
        'pipCore', 'pipDocuments', 'pipLocations', 'pipPictures', 'pipComposite.Templates']);

    thisModule.directive('pipCompositeSummary',
        function () {
            return {
                restrict: 'EA',
                scope: {
                    pipContents: '=',
                    pipChecklistSize: '=',
                    pipTextSize: '=',
                    pipPrimaryBlockLimit: '=',
                    pipSecondaryBlockLimit: '=',
                    pipSecondaryBlockTypes: '='
                },
                templateUrl: 'composite_summary/composite_summary.html',
                controller: 'pipCompositeSummaryController'
            }
        }
    );

    thisModule.controller('pipCompositeSummaryController',
        ['$scope', '$element', '$attrs', 'pipUtils', function ($scope, $element, $attrs, pipUtils) {

            $scope.rebind = pipUtils.toBoolean($attrs.pipRebind);
            $scope.disableControl = true;
            $scope.disabledChecklist = true;

            $scope.secondaryBlockTypes = $scope.pipSecondaryBlockTypes !== undefined &&
                Array.isArray($scope.pipSecondaryBlockTypes) ? $scope.pipSecondaryBlockTypes :
                 ['checklist', 'documents', 'location', 'time'];
            $scope.textSize = $scope.pipTextSize !== undefined && $scope.pipTextSize > 0 ? $scope.pipTextSize : 0;
            $scope.secondaryBlockLimit = $scope.pipSecondaryBlockLimit !== undefined && $scope.pipSecondaryBlockLimit > 0 ? $scope.pipSecondaryBlockLimit : -1;
            $scope.checklistSize = $scope.pipChecklistSize !== undefined && $scope.pipChecklistSize > 0 ? $scope.pipChecklistSize : 0;
            $scope.primaryBlockLimit = $scope.pipPrimaryBlockLimit !== undefined ? $scope.pipPrimaryBlockLimit : -1;

            generateList($scope.pipContents);

            // Watch for options changes
            if (pipUtils.toBoolean($attrs.pipRebind)) {
                $scope.$watchCollection('pipContents', function (newValue) {
                    if (!Array.isArray($scope.pipContents)) {
                        throw new Error('Error: Attribute pip-contents must be array!');
                    }
                    generateList($scope.pipContents);
                });
            }

            // Add class
            $element.addClass('pip-composite-summary');

            return;

            // усекаем чеклист до 3
            function limitChecklist(content, val) {
                if (!val) return;
                _.each(content, function(item) {
                    if (item && item.type == 'checklist') {
                        var checklistLength = item.checklist.length;
                        item.checklist =_.take(item.checklist, val);
                        if (checklistLength > val) item.checklist.push({
                            text: '...',
                             checked: false
                        });
                    }
                });
            };

            // отбираем текст и картинки
            function selectSummary(content) {
                var result = [],
                    i = 0;

                _.each(content, function(item) {
                    if ($scope.primaryBlockLimit >= 0 && i >= $scope.primaryBlockLimit) return result;

                    //if (item.type == 'text' || item.type == 'pictures' ) {
                    if ($scope.secondaryBlockTypes.indexOf(item.type) < 0) {
                        result.push(item);
                        i += 1;
                    }
                });

                return result;
            };

            // отбираем остальные блоки если они есть
            function selectSummarySecondary(content, types) {
                var i, limit =  $scope.secondaryBlockLimit < 0 ? content.length : $scope.secondaryBlockLimit;
                var result = [];

                for (i = 0; i < content.length; i++ ) {
                    if (types.indexOf(content[i].type) > -1) {
                        result.push(content[i]);
                        if (result.length >= limit) break;
                    }
                }

                return result;
            };

            function generateList(content) {
                if (!content ||  content.length < 1) {
                    clearList();
                    return;
                } else {
                     var summaryContent = _.cloneDeep(content);
                    var result = selectSummary(summaryContent);
                    if (result.length == 0) {
                        result = selectSummarySecondary(summaryContent, $scope.secondaryBlockTypes);
                    }

                    limitChecklist(result, $scope.checklistSize);

                    var id = 0;
                    _.each(result, function(item){
                        item.id = id;
                        id ++;
                    });
                    $scope.compositeContent = result;
                }
            };

            function clearList() {
                $scope.compositeContent = [];
            };

        }]
    );

})();

/**
 * @file Composite view control
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipCompositeView", [
        'pipCore', 'pipDocuments', 'pipLocations', 'pipPictures', 'pipComposite.Templates']);

    thisModule.directive('pipCompositeView',
        function () {
            return {
                restrict: 'EA',
                scope: {
                    ngDisabled: '&',
                    pipDisabledChecklist: '&',
                    pipChanged: '&',
                    pipContents: '='
                },
                templateUrl: 'composite_view/composite_view.html',
                controller: 'pipCompositeViewController'
            }
        }
    );

    thisModule.controller('pipCompositeViewController',
        ['$scope', '$element', '$attrs', 'pipUtils', function ($scope, $element, $attrs, pipUtils) {

            $scope.rebind = pipUtils.toBoolean($attrs.pipRebind);
            $scope.disableControl = pipUtils.toBoolean($scope.ngDisabled()) != false;
            $scope.disabledChecklist = pipUtils.toBoolean($scope.pipDisabledChecklist()) != false;
            $scope.selected = {};
            $scope.selected.isChanged = false;
            generateList($scope.pipContents);

            $scope.onContentChange = onContentChange;
            $scope.isDisabled = isDisabled;

            // Watch for options changes
            if (pipUtils.toBoolean($attrs.pipRebind)) {
                $scope.$watchCollection('pipContents', function (newValue) {
                    if (!Array.isArray($scope.pipContents)) {
                        // throw new Error('Error: Attribute pip-contents must be array!');
                        return;
                    }
                    if (!$scope.selected.isChanged) {
                        generateList($scope.pipContents);
                    } else {
                        $scope.selected.isChanged = false;
                    }
                });
            }

            // Add class
            $element.addClass('pip-composite-view');

            return;

            function isDisabled() {
                return pipUtils.toBoolean($scope.pipDisabledChecklist()) == true ||
                    pipUtils.toBoolean($scope.ngDisabled()) == true;
            };

            function updateContents() {
                $scope.selected.isChanged = true;
                $scope.pipContents = $scope.compositeContent;
            };

            function onContentChange() {
                onCompositeChange();
            };

            function onCompositeChange() {
                updateContents();
                if ($scope.pipChanged)
                    $scope.pipChanged();
            };

            function generateList(content) {
                if (!content ||  content.length < 1) {
                    clearList();
                    return;
                } else {
                    $scope.compositeContent = [];
                    var id = 0;
                    _.each(content, function(item){
                        if (typeof(item) != 'object' || item == null) {
                            throw new Error('Error: content error!');
                        }
                        item.id = id;
                        id ++;
                        $scope.compositeContent.push(item);
                    });
                }
            };

            function clearList() {
                $scope.compositeContent = [];
            };

        }]
    );

})();

/**
 * @file Composite toolbar control
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipCompositeToolbar", ['pipCore', 'pipComposite.Templates']);

    thisModule.config(['pipTranslateProvider', function(pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            'TEXT':'Text',
            'CHECKLIST':'Checklist',
            'LOCATION':'Location',
            'PICTURE':'Picture',
            'TIME':'Time',
            'DOCUMENT':'Document'
        });

        pipTranslateProvider.translations('ru', {
            'TEXT':'Текст',
            'CHECKLIST':'Список',
            'LOCATION':'Локация',
            'PICTURE':'Изображение',
            'TIME':'Время',
            'DOCUMENT':'Document'
        });
    }]);

    thisModule.directive('pipCompositeToolbar',
        function () {
            return {
                restrict: 'EA',
                replace: false,
                scope: {
                    ngDisabled: '&',
                    pipCompositeEmpty: '&',  // set init state of toolbar
                    pipToolbarButton: '=',  // set visibility toolbar button, true by default
                    compositeId: '=pipCompositeId' // set pip-composite-id, for some composite in one scope
                },
                templateUrl: 'composite_toolbar/composite_toolbar.html',
                controller: 'pipCompositeToolbarController'
            }
        }
    );

    thisModule.controller('pipCompositeToolbarController',
        ['$scope', '$element', '$attrs', '$rootScope', 'pipUtils', function ($scope, $element, $attrs, $rootScope, pipUtils) {

            $scope.toolbarButton = {};
            $scope.emptyState = pipUtils.toBoolean($scope.pipCompositeEmpty()) != false;
            $scope.disableControl = pipUtils.toBoolean($scope.ngDisabled()) != false;

            setOption();

            $scope.onAddItem = onAddItem;

            $rootScope.$on('pipCompositeNotEmpty', function(event, value) {
                $scope.emptyState = !value;
            });

            // Add class
            $element.addClass('pip-composite-toolbar');

            return;

            function onAddItem(contentType) {
                $rootScope.$emit('pipAddCompositeItem', {type: contentType, id: $scope.compositeId});
            };

            function setOption() {
                if ($scope.pipToolbarButton !== null && $scope.pipToolbarButton !== undefined) {
                    $scope.toolbarButton.picture = $scope.pipToolbarButton.picture === false ? $scope.pipToolbarButton.picture : true;
                    $scope.toolbarButton.document = $scope.pipToolbarButton.document === false ? $scope.pipToolbarButton.document : true;
                    $scope.toolbarButton.location = $scope.pipToolbarButton.location === false ? $scope.pipToolbarButton.location : true;
                    $scope.toolbarButton.event = $scope.pipToolbarButton.event === false ? $scope.pipToolbarButton.event : true;
                    $scope.toolbarButton.checklist = $scope.pipToolbarButton.checklist === false ? $scope.pipToolbarButton.checklist : true;
                } else {
                    $scope.toolbarButton.picture = true;
                    $scope.toolbarButton.document = true;
                    $scope.toolbarButton.location = true;
                    $scope.toolbarButton.event = true;
                    $scope.toolbarButton.checklist = true;
                }
                $scope.toolbarButton.text = true;
            };

        }]
    );

})();
/**
 * @file Keyboard navigation with scrolling over non-focusable controls
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipCompositeFocused", []);

    thisModule.directive('pipCompositeFocused', function () {
        return {
            restrict: 'A',
            scope: false,
            controller: 'pipCompositeFocusedController'
        };
    });

    thisModule.controller('pipCompositeFocusedController',
        ['$scope', '$element', '$rootScope', function ($scope, $element, $rootScope) {
            $element.bind("touchstart mousedown", function (e) {
                $rootScope.$broadcast('focusedComposite');
            });
        }]
    );

})();


/**
 * @file Touch start control
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipMobileMousedown", []);

    thisModule.directive('pipMobileMousedown',
        function () {
            return function (scope, elem, attrs) {
                elem.bind("touchstart mousedown", function (e) {
            //        e.preventDefault();
            //        e.stopPropagation();
                    scope.$apply(attrs["pipMobileMousedown"]);
            //        e.preventDefault();
                });
            }
        }
    );

})();

/**
 * @file Touch start control
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module("pipMobileMouseup", []);

    thisModule.directive('pipMobileMouseup',
        function () {
            return function (scope, elem, attrs) {
                elem.bind("touchend mouseup", function (e) {
                //    e.preventDefault();
         //           e.stopPropagation();
                    scope.$apply(attrs["pipMobileMouseup"]);
                });
            }
        }
    );

})();

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
        ['$parse', function($parse) {
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
        }]
    );

})();

//# sourceMappingURL=pip-webui-composite.js.map
