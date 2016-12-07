/**
 * Created by Jbt on 12/6/2016.
 */
(function () {
    angular.module('optionsInfo').controller('UserController', UserController);

    function UserController(optionsService, $mdSidenav) {
        var self = this;
        self.selected = null;
        self.options = [];
        self.selectedOption = selectOption;
        self.toggleList = toggleOptionsList;

        optionsService.loadAllOptions()
            .then(setOption, error);

        function setOption(options) {
            self.options = [].concat(options);
            self.selected = options[0];
        }

        function error(error) {
            console.log(error);
        }

        function toggleOptionsList() {
            $mdSidenav('left').toggle();
        }

        function selectOption(option) {
            self.selected = option;
            console.log('an option was chosen');

        }
        
        function getCurrentTime($scope) {
            $scope.date = new Date();
        }

    }

})();