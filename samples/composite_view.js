/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appComposite.CompositeView', []);

    thisModule.controller('CompositeViewController',
        function($scope) {
            $scope.emptyComposite = [];

            $scope.onDisableClick = function() {
                $scope.emptyCompositeViewDisabled = !$scope.emptyCompositeViewDisabled;
            };

            $scope.isDisabled = function() {
                return $scope.emptyCompositeViewDisabled === true;
            };

            $scope.showAlert = function (ev) {
                console.log('click');
            };

            $scope.item = {
                name: 'Name parent goal or vision',
                status1: 'Status1',
                status2: 'Status2'
            };

            $scope.compositeView = [
                {
                    type: 'text',
                    text: chance.paragraph(),
                    docs: [],
                    pic_ids: [],
                    loc_pos: null,
                    loc_name: '',
                    start: null,
                    end: null,
                    checklist: []
                },
                {
                    type: 'checklist',
                    text: '',
                    docs: [],
                    pic_ids: [],
                    loc_pos: null,
                    loc_name: '',
                    start: null,
                    end: null,
                    checklist: [
                        {
                            text: 'Efficiently simplify visionary content rather than extensive. Phosfluorescently engage.',
                            checked: true
                        },
                        {
                            text: 'Phosfluorescently engage clicks-and-mortar niche markets.',
                            checked: true
                        },
                        {
                            text: 'Следующий будет пустым',
                            checked: false
                        },
                        {
                            text: '',
                            checked: true
                        },
                        {
                            text: 'Conveniently redefine empowered catalysts for change vis-a-vis timely action items. Conveniently redefine empowered catalysts for change vis-a-vis timely action items. Continually underwhelm interactive information whereas leading-edge networks.',
                            checked: true
                        },
                        {
                            text: 'Conveniently redefine empowered catalysts for change vis-a-vis timely action items. Conveniently redefine empowered catalysts for change vis-a-vis timely action items. Conveniently redefine empowered catalysts for change vis-a-vis timely action items. Conveniently redefine empowered catalysts for change vis-a-vis timely action items. Continually underwhelm interactive information whereas leading-edge networks.',
                            checked: true
                        },
                        {
                            text: 'http://beta.pipdevs.com/#/news/split/list?post_id=56ea6155b4e463ab4b11d4bc&search=&party_id=56cdff4c8708489d58cffd33&category=all&startTake=5&',
                            checked: true
                        }
                    ]
                },
                {
                    type: 'text',
                    text: chance.paragraph(),
                    docs: [],
                    pic_ids: [],
                    loc_pos: null,
                    loc_name: '',
                    start: null,
                    end: null,
                    checklist: []
                },
                {
                    type: 'documents',
                    text: '',
                    docs: [
                        {
                            file_id: "12eb8327eaa60e89207b7489",
                            file_name: "6d4261a3e51725.mp3"
                        },
                        {
                            file_id: "54eb8327eaa60e89207b7489",
                            file_name: "1d4261a3e51725.mp3"
                        }
                    ],
                    pic_ids: [],
                    loc_pos: null,
                    loc_name: '',
                    start: null,
                    end: null,
                    checklist: []
                },
                {
                    type: 'text',
                    text: chance.paragraph(),
                    docs: [],
                    pic_ids: [],
                    loc_pos: null,
                    loc_name: '',
                    start: null,
                    end: null,
                    checklist: []
                },
                {
                    type: 'pictures',
                    text: '',
                    docs: [],
                    pic_ids: [
                        "56790b4960958daa664fd8c6",
                        "56790b4c60958daa664fd8c7"
                    ],
                    loc_pos: null,
                    loc_name: '',
                    start: null,
                    end: null,
                    checklist: []
                },
                {
                    type: 'pictures',
                    text: '',
                    docs: [],
                    pic_ids: [
                        "56790b4960958daa664fd8c2",
                        "56790b4960958daa664fd8c1",
                        "56790b4960958daa664fd8c4",
                        "56790b4960958daa664fd8c3",
                        "56790b4960958daa664fd8c5"
                    ],
                    loc_pos: null,
                    loc_name: '',
                    start: null,
                    end: null,
                    checklist: []
                },
                {
                    type: 'checklist',
                    text: '',
                    docs: [],
                    pic_ids: [],
                    loc_pos: null,
                    loc_name: '',
                    start: null,
                    end: null,
                    checklist: [
                        {
                            text: 'Efficiently simplify visionary content rather than extensive. Phosfluorescently engage. Efficiently simplify visionary content rather than extensive. Phosfluorescently engage.',
                            checked: true
                        },
                        {
                            text: 'Phosfluorescently engage clicks-and-mortar niche markets.',
                            checked: true
                        }
                    ]
                },
                {
                    type: 'time',
                    text: '',
                    docs: [],
                    pic_ids: [],
                    loc_pos: null,
                    loc_name: '',
                    start: null,
                    end: '2015-08-31T21:00:00.000Z',
                    checklist: []
                },
                {
                    type: 'time',
                    text: '',
                    docs: [],
                    pic_ids: [],
                    loc_pos: null,
                    loc_name: '',
                    start: '2015-07-31T21:00:00.000Z',
                    end: '2015-08-31T21:00:00.000Z',
                    checklist: []
                },
                {
                    type: 'location',
                    text: '',
                    docs: [],
                    pic_ids: [],
                    loc_pos: {
                        type: 'Point',
                        coordinates: [32.393603, -110.982593]
                    },
                    loc_name: '780 W. Lost Creek Place, Tucson, AZ 85737',
                    start: null,
                    end: null,
                    checklist: []
                },
                {
                    type: 'documents',
                    text: '',
                    docs: [
                        {
                            file_id: "12eb8327eaa60e89207b7489",
                            file_name: "6d4261a3e51725.mp3"
                        },
                        {
                            file_id: "54eb8327eaa60e89207b7489",
                            file_name: "1d4261a3e51725.mp3"
                        }
                    ],
                    pic_ids: [],
                    loc_pos: null,
                    loc_name: '',
                    start: null,
                    end: null,
                    checklist: []
                }

            ];

        }
    );

})();
