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


