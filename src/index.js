angular
    .module('MyApp', ['ngMaterial'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('blue-grey')
            .warnPalette('deep-orange')
            .backgroundPalette('blue-grey')
    })

    .controller('indexController', ['$scope', '$window', ($scope, $window) => {

        $scope.myItems = ['Москва', 'Санкт-Петербург', 'Балашиха', 'Самара', 'Тула'];

        $scope.open = (name) => {
            $window.open(name, '_blank');
        };
        $scope.close = (name) => {
            $window.close();
        };
    }])
;