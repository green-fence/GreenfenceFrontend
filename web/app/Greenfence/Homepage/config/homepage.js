'use strict';

/**
 * This file is part of the Greenfence package.
 *
 * (c) Ivan Proskuryakov
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @name            GreenfenceHomepage
 * @description     ...
 */

define(['app'], function (app) {
    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state("homepage", {
                url: "/:locale/",
                controller: 'HomepageCtrl'
            });
    }]);
});