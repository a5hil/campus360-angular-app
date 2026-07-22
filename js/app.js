var app = angular.module('campus360', []);

app.controller('dashboardController', function ($scope) {

    $scope.collegeName = "campus360";
    $scope.totalStudents = 2500
    $scope.totalFaculty = 94
    
    $scope.students = [
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Davis",
    "William Brown"
    ];

    $scope.addStudent = function () {
        $scope.totalStudents++;
        $scope.showStudents=true;
        $scope.showDashboard=true;
    };

})