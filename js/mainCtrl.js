angular.module("friendsList").controller("mainCtrl", function($scope) {

    $scope.friends = ["Nick", "JD", "Colton", "Doc Holliday"];

    console.log($scope.friends);

    $scope.addFriend = function(str) {
        $scope.friends.push(str);
    };

    console.log($scope.addFriend);

});



/// need help creating the addfriend function that pushes another friend onto the array.
