var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
// let favoriteDroid; // Se não especificar o tipo, fica any
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);
//Functions 
var shortestRun = function (parsecs) {
    return parsecs < 12;
};
console.log(shortestRun(9));
function inc(speed, inc) {
    return speed + inc;
}
console.log(inc(5, 1)); // 6
//Parâmetros REST 
function countJedis(jedis) {
    return jedis.reduce(function (a, b) { return a + b; }, 0);
}
console.log(countJedis([2, 3, 4])); // 9
var isEnoughtToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughtToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
function inc2(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc2(5, 1));
console.log("inc (5) = " + inc2(5));
