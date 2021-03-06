var app = angular.module("MyApp", []);

//Directive definition object DDo for calculator
app.directive('calculator', function(){
  return {
    restrict:'E',
    replace:true,
    scope:{},
    link:function(scope,element, attrs) {

    },
    templateUrl: 'templates/widget.html'
  }
});

//filter for formatting after checking input  is text or number
app.filter('textOrNumber', function ($filter) {
    return function (input, fractionSize) {
        if (isNaN(input)) {
            return input.substring(1,input.length);
        } else {
            return $filter('number')(input, fractionSize);
        };
    };
});

//controller
app.controller('calculatorCtrl', function($scope) {
		$scope.varOne=0.0
		$scope.varTwo=0.0;
		$scope.result=0.0;
		$scope.op='';
		$scope.flag=1;

		$scope.passNum = function(num){
		  if( $scope.flag==1){
          $scope.varOne+=''+num;
          $scope.result+=''+num;
      }
      else if( $scope.flag==0){
          $scope.varTwo+=''+num;
          $scope.result+=''+num;
      } 
	   };
      
    $scope.add = function(){
		 $scope.flag=0;
         $scope.op='add';
         $scope.result+='+';
	  };

    $scope.sub = function(){
		    $scope.flag=0;
        $scope.op='sub';
        $scope.result+='-';
	  };

    $scope.mult = function(){
      	$scope.flag=0;
        $scope.op='mult';
        $scope.result+='*';
	  };
	  $scope.div = function(){
		 $scope.flag=0;
        $scope.op='div';
        $scope.result+='/';
	   };

	  $scope.clear = function(){
    		$scope.varOne=0.0
    		$scope.varTwo=0.0;
    		$scope.result=0.0;
    		$scope.op='';
    		$scope.flag=1;
	  };
    $scope.eqTo = function(){
      if($scope.op=='mult'){
        var a=$scope.varOne;
        var b=$scope.varTwo;
        $scope.result=0;
        $scope.result=a*b;
      }
	    if($scope.op=='add'){
        $scope.result=0;
        $scope.result=Number($scope.varOne)+Number($scope.varTwo);
      }
      if($scope.op=='sub'){
         $scope.result=0;
         $scope.result=$scope.varOne-$scope.varTwo;
      }
      if($scope.op=='div'){
         $scope.result=0.0;
         $scope.result=($scope.varOne)/($scope.varTwo);
      }
      $scope.temp=$scope.result;
      $scope.clear();
      $scope.passNum($scope.temp);
      }; 
});
//@author    - Nisham P  www.fb.com/nisham.mahsin-->
