/**
 * Created by Jbt on 12/8/2016.
 */
(function () {
    angular.module('optionsInfo').controller('GeneralController', GeneralController);

    function GeneralController($scope) {
        scope.getDatetime = function() {
            return (new Date).toLocaleFormat("%A, %B %e, %Y");
        };


}})();
