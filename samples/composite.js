
(function (angular) {
    'use strict';

    var thisModule = angular.module('appComposite.Composite', []);

    thisModule.config(function (pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            FILLED: 'Filled'
        });
        pipTranslateProvider.translations('ru', {
            FILLED: 'Заполненный'
        });
    });

    thisModule.controller('CompositeController',
        function ($scope, pipAppBar) {
            $scope.emptyComposite = [];

            pipAppBar.hideShadow();

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
                    type: 'pictures',
                    text: '',
                    docs: [],
                    pic_ids: [
                        '56790b4c60958daa664fd8c8',
                        '56790b4e60958daa664fd8c9',
                        '56790b4f60958daa664fd8ca',
                        '56790b4f60958daa664fd8cb',
                        '56790b4f60958daa664fd8cc',
                        '56790b5060958daa664fd8cd',
                        '56790b5160958daa664fd8ce',
                        '56790b5160958daa664fd8cf',
                        '56790b5260958daa664fd8d0',
                        '567911f060958daa664fd8ff',
                        '567911f060958daa664fd8fe'
                    ],
                    loc_pos: null,
                    loc_name: '',
                    start: null,
                    end: null,
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
                            text: 'Conveniently redefine empowered catalysts for change vis-a-vis timely action items.' +
                            ' Continually underwhelm interactive information whereas leading-edge networks.',
                            checked: true
                        }
                    ]
                }
            ];

        }
    );

})(window.angular);
