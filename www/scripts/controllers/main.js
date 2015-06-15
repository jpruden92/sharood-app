define(['controllers/module'], function (controllers) {

    'use strict';

    controllers.controller('MainCtrl', function ($scope, $location, sharoodDB) {

        function tryAutoLogin(){
            sharoodDB.loadCurrentUser().then(function(user){
                sharoodDB.currentUser = user;
                $location.path('#/home');
            });
        }

        tryAutoLogin();
        console.info(sharoodDB);

        $scope.login = function(){
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            sharoodDB.login(email, password).then(function(user){
                console.info(user);
                sharoodDB.currentUser = user;
                $location.path('#/home');
            });
        };

        $scope.navigate = function(path) {
            $location.path(path);
        };
    });

});