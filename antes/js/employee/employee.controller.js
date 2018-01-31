angular.
    module("rondaApp")
    .controller("EmployeesController", ['$scope', 'EmployeesService', function($scope, EmployeesService){
        
        $scope.employee = {};
        $scope.save      = save;
        $scope.cancel    = cancel;
        $scope.remove     = remove;
        $scope.update      = update;
        
        list();
        
        function list(){
            EmployeesService.getEmployees().then(function(response){
                $scope.employees = response.data; 
            });
        }
        
        function save(employee){
            EmployeesService.save(employee).then(list);
            $scope.employee = {};
        }
        
        function update(employee){
            $scope.employee = angular.copy(employee);
        }
        
        function remove(employee){
            EmployeesService.delete(employee).then(list);
        }
        
        function cancel(){
            $scope.employee = {};
        }
        
        function list(){
            EmployeesService.getEmployees().then(function(response){
                $scope.employees = response.data; 
            });
        }
        
        
    }]);