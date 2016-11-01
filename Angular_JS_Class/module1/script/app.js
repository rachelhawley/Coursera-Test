(function () {
'use strict';

angular.module('myLunchApp', [])
.controller('LunchCounter',LunchCounter);

LunchCounter.$inject=['$scope'];
function LunchCounter($scope) {
  $scope.foodList = "";
  $scope.message = "";
  $scope.customStyle = {};
  $scope.foodParser = function () {
    var stringToSplit=$scope.foodList;
    var arrayOfFoods = stringToSplit.split(',');
    var count = arrayOfFoods.length;
    if (stringToSplit === "")  {
       $scope.message = "Please Enter Data First!";
       $scope.customStyle.colorClass = "bad";
    } else if (count <= 3){
      $scope.message = "Enjoy!";
      $scope.customStyle.colorClass = "good";
    } else {
      $scope.message = "Too Much!!!";
      $scope.customStyle.colorClass = "good";
    }

        //console.log('the array has '+ arrayOfFoods.length +' elements:' + arrayOfFoods.join(' / '));
        //console.log($scope.message);
    };


}

})();
