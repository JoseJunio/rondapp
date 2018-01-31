angular.
    module("rondaApp", [])
    .service("EmployeesService", ['$http', function($http){
        
        var that = this;

        var api = "http://localhost:8080/api/webresources/employees";
        
        that.getEmployees = function(){
         // return that.employees;
         return $http.get(api);
        };
        
        that.save = function(employee){
            
            if(employee.id){
               return $http.put(api + "/" + employee.id, employee);
            }else{
               return $http.post(api, employee);
            }
          
        };
        
        that.delete = function(employee){
          return $http.delete(api + "/" + employee.id);
        };
                       
    }]);