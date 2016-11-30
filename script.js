(function (){
    'use strict';
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDEQMxwx9181SILecf3G8uJgDMjMSQsENw",
    authDomain: "quali-7c529.firebaseapp.com",
    databaseURL: "https://quali-7c529.firebaseio.com",
    storageBucket: "quali-7c529.appspot.com",
    messagingSenderId: "357495242947"
  };
  firebase.initializeApp(config);
    
    angular.module("Quali",["firebase"])
    .controller("QualiController", function ($scope,$http,$window,$firebaseArray,$firebaseObject){
        
        var ref = firebase.database().ref().child("Qualifications");
        
       $scope.qualifications= $firebaseArray(ref);
       
       $scope.resultado={};
        
        $scope.qualiOne=4;
        $scope.qualiTwo;
        $scope.qualiThree;
        
        $scope.addQuali = function() {
            console.log("Add Quali Clicked Function");
            $scope.qualifications.$add(
            {"Quali":$scope.qualiOne}
            ).then(function(ref){
               console.log("Qaulification added");    
            });
            
        $scope.removeQuali = function (item){
            console.log("Action Called");
            //var item= $scope.qualifications[2];
            $scope.qualifications.$remove(item)
                .then(function(ref){
                    console.log("Qualification removed");
            });
        } 
        
        $scope.execute = function () {
          console.log("Execute");
          var peticion = {
            method  : 'JSONP',
            url     : 'https://script.google.com/macros/s/AKfycbxYNZ8NKLKfeR_Y3G_fTDROHACGezcwFXu-FZuam5caQZIeghU/exec',
            params  : {
                callback  : 'JSON_CALLBACK',
            }
          };
          
          $http(peticion)
            .then( 
              
              //ok
              function(response) {
                $scope.resultado = response.data;
              }, 
              
              // error 
              function(error) {
                $window.alert("error");
              }
            );
        }
      }
    });
    
})();