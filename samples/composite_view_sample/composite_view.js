
(function (angular, chance) {
    'use strict';

    var thisModule = angular.module('appComposite.CompositeView', []);

    thisModule.controller('CompositeViewController',
        function ($scope, pipAppBar, $timeout) {

            $timeout(function() {
                $('pre code').each(function(i, block) {
                    Prism.highlightElement(block);
                });
            });

            pipAppBar.hideShadow();
            pipAppBar.showTitleText('COMPOSITE_CONTROLS');
            pipAppBar.showMenuNavIcon();
            pipAppBar.showLanguage();

            $scope.emptyComposite = [];

            $scope.onDisableClick = function () {
                $scope.emptyCompositeViewDisabled = !$scope.emptyCompositeViewDisabled;
            };

            $scope.isDisabled = function () {
                return $scope.emptyCompositeViewDisabled === true;
            };

            $scope.showAlert = function () {
                console.log('click'); // eslint-disable-line
            };

            $scope.item = {
                name: 'Name parent goal or vision',
                status1: 'Status1',
                status2: 'Status2'
            };

            $scope.compositeView = [
                {
                    type: 'text',
                    text: 'Architecture is both the process and the product of planning, designing, ' +
                    'and constructing buildings and other physical structures. Architectural works, ' +
                    'in the material form of buildings, are often perceived as cultural symbols and as works of art. ' +
                    'Historical civilizations are often identified with their surviving architectural achievements.',
                    docs: [],
                    pic_ids: [],
                    loc_pos: null,
                    loc_name: '',
                    start: null,
                    end: null,
                    checklist: []
                },
                {
                    type: 'text',
                    text: '### "Architecture" can mean:',
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
                            text: 'A general term to describe buildings and other physical structures',
                            checked: true
                        },
                        {
                            text: 'The art and science of designing buildings and (some) nonbuilding structures',
                            checked: true
                        },
                        {
                            text: 'The style of design and method of construction of buildings ' +
                            'and other physical structures',
                            checked: true
                        },
                        {
                            text: 'Knowledge of art, science, technology and humanity',
                            checked: true
                        },
                        {
                            text: 'The practice of the architect, where architecture means offering ' +
                            'or rendering professional services in connection with the design and construction ' +
                            'of buildings, or built environments',
                            checked: true
                        },
                        {
                            text: 'The design activity of the architect, from the macro-level (urban design, ' +
                            'landscape architecture) to the micro-level (construction details and furniture).',
                            checked: true
                        }
                    ]
                },
                {
                    type: 'documents',
                    text: '',
                    docs: [
                        {
                            file_id: '12eb8327eaa60e89207b7489',
                            file_name: '6d4261a3e51725.mp3'
                        },
                        {
                            file_id: '54eb8327eaa60e89207b7489',
                            file_name: '1d4261a3e51725.mp3'
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
                    type: 'pictures',
                    text: '',
                    docs: [],
                    pic_ids: [
                        '56790b4960958daa664fd8c6',
                        '56790b4c60958daa664fd8c7'
                    ],
                    loc_pos: null,
                    loc_name: '',
                    start: null,
                    end: null,
                    checklist: []
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
                }
            ];

        }
    );
})(window.angular, window.chance);
