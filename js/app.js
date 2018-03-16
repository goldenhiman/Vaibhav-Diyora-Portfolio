var app = angular.module('vdapp',[]);

app.controller('paint_photo_controller',['$scope',function($scope){

    $scope.numarr = [1,2,3,4,5,6,7,8,9,10,11,12];

}]);

app.controller('rating_controller',['$scope',function($scope){

    $scope.reviews = [
        {
            name: 'Himanshu Pathak',
            post: 'Developer'.toUpperCase,
            text: "“Do I really look like a guy with a plan? You know what I am? I'm a dog chasing cars. I wouldn't know what to do with one if I caught it! You know, I just... *do* things.”",
            rating: 4
        },
        {
            name: 'Himanshu Pathak',
            post: 'Developer'.toUpperCase,
            text: "“Do I really look like a guy with a plan? You know what I am? I'm a dog chasing cars. I wouldn't know what to do with one if I caught it! You know, I just... *do* things.”",
            rating: 4
        },
        {
            name: 'Himanshu Pathak',
            post: 'Developer'.toUpperCase,
            text: "“Do I really look like a guy with a plan? You know what I am? I'm a dog chasing cars. I wouldn't know what to do with one if I caught it! You know, I just... *do* things.”",
            rating: 4
        }
    ];

}]);