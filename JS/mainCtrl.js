angular.module('alphabetCounter').controller('mainCtrl', function ($scope) {
    $scope.counts = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0 };
    $scope.countAlphabet = function (string) {
        string.toLowerCase().split('').map((letter, index) => {
            if ($scope.counts.hasOwnProperty(letter)) {
                $scope.counts[letter]++
            } else {
                $scope.counts[letter] = 1
            }
        })
        return $scope.counts
    }
    $scope.reset = function (string) {
        for(count in $scope.counts){
            if(!count.match(/^[!@#\$%\^\&*\)\(+=._-]+$/g)){
                $scope.counts[count] = 0;
            } else {
                delete $scope.counts[count];
            }
        }
        $scope.string = "";
    }
});