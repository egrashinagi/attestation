angular
    .module('MyApp', ['ngMaterial'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('blue-grey')
            .warnPalette('deep-orange')
            .backgroundPalette('blue-grey')
    })

    .controller('myChips', ['$scope', ($scope) => {
        $scope.myItems = ['Москва', 'Санкт-Петербург', 'Балашиха', 'Самара', 'Тула'];
    }])

    .controller('indexController', ['$scope', '$window', ($scope, $window) => {
        $scope.open = (name) => {
            $window.open(name, '_blank');
        };
    }])

;