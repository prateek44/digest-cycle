(function()
{
  'use strict';
  angular.module('digestCycleApp',[])
  .controller('digestCycleAppController',['$scope','$filter',digestCycleAppController);
  function digestCycleAppController($scope,$filter)
  {
    $scope.cnt=0;
    $scope.incrementer=function()
    {
      $scope.cnt++;
      console.log($scope);
    };
    $scope.watch('cnt',function(oldVal,newVal)
  {
    console.log("old val#",oldVal);
    console.log("new val#",newVal);
  })
  }
})();
