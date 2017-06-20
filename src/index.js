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

        $scope.myItems = [];

        $scope.open = (name) => {
            $window.open(name, '_blank');
        };
        $scope.close = () => {
            $window.close();
        };

        $scope.addScale = (x) => {
            alert(`Выбрана шкала ${x}!`)
        }
    }])
;

function getName(str, label) {
    let i;
    if (str.lastIndexOf('\\')) {
        i = str.lastIndexOf('\\') + 1;
    }
    else {
        i = str.lastIndexOf('/') + 1;
    }
    var label = document.querySelector('.file-uploader__label');
    var dialoglabel = document.querySelector('.file-uploader-dialog__label');
    label.innerHTML = str.slice(i);
}

document
    .querySelectorAll('.file-uploader__form','.file-uploader-dialog__form')
    .forEach(item => {
        item.querySelectorAll('.file-uploader__form-input','.file-uploader-dialog__input')
            .forEach(input => {
                input.addEventListener('change', event => {
                    const value = event.srcElement.value;
                    const label = item.querySelector('.file-uploader__form-label', '.file-uploader-dialog__form-label');

                    getName(value, label);
                });
            })
    });