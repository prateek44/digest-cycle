(function()
{
  'use strict';
  angular.module('digestCycleApp',[])
  .controller('digestCycleAppController',['$scope','$filter',digestCycleAppController]);
  function digestCycleAppController($scope,$filter)
  {
    $scope.cnt=0;
    $scope.incrementer=function()
    {
      $scope.cnt=1;
      console.log("watchers #",$scope.$$watchersCount);
    };
  //   $scope.$watch('cnt',function(newVal,oldVal)
  // {
  //   console.log("old val#",oldVal);
  //   console.log("new val#",newVal);
  // });
  $scope.$watch(function()
{
  console.log("digest loop fired");
});
}
})();
