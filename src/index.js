angular
    .module('MyApp', ['ngMaterial'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('blue-grey')
            .warnPalette('deep-orange')
            .backgroundPalette('blue-grey')
    })
    .controller('myChips', function () {
        this.myItems = ['Москва', 'Санкт-Петербург', 'Балашиха', 'Самара', 'Тула'];
    })

    .controller('(ng-click="$ctrl.removeAll()")')
;

