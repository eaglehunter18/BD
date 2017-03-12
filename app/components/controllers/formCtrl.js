angular
.module('boilerplate').controller('formCtrl',function($scope,QueryService)
{
  $scope.bids=[];
  $scope.addRow = function(){
	
  $scope.bids.push({ 
   'Item':$scope.Item,
   'Description': $scope.Description,
   'Start_date':$scope.Start_date,
   'Period': $scope.Period,
   'Started':$scope.Started,
   'Increment':$scope.Increment ,
   'Start_now':$scope.checked 
 });

console.log($scope.bids);

  $scope.Item='';
  $scope.Description='';
  $scope.Start_date='';
  $scope.Period='';
  $scope.Started='';
  $scope.Increment='';
  

};

// QueryService.query('GET', 'data1.json', {}, {})
// .then(function(data) {
//         //console.log(data);
//         $scope.myData=data.data;
//       }, function(error) {
//         console.log(error);
//       });


$scope.startBid=function(item,index){


  }

});