(function() {
    'use strict';

    angular.module('LunchChecker', [])

    .controller('LunchCheckerController', function($scope) {
        $scope.lunchorder = "";
        $scope.totalValue = -1;
        $scope.messageColor = "black";

        $scope.checkLunch = function() {
            var totalNameValue = $scope.lunchorder.split(",");
            var counter = 0;
            totalNameValue.map(
                function(currVal) {
                    if (currVal && currVal.trim().length > 0) {
                        counter = counter + 1;
                    }
                }
            );
            $scope.totalValue = counter;
        };

        $scope.getMessage = function() {
            if ($scope.totalValue == -1) {
                return "";
            } else if ($scope.totalValue == 0) {
                $scope.messageColor = "red";
                return "Please enter data first";
            } else if ($scope.totalValue <= 3) {
                $scope.messageColor = "green";
                return "Enjoy!";
            } else {
                $scope.messageColor = "green";
                return "Too much!";
            }
        };


        function calculatNumericForString(string) {
            var totalStringValue = 0;
            for (var i = 0; i < string.length; i++) {
                totalStringValue += string.charCodeAt(i);
            }

            return totalStringValue;
        }

    });


})();
