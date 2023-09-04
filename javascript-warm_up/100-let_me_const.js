#!/usr/bin/node
exports.let_me_const = function (myVar) {
  var myVar = 89;
  return {
    myVar: myVar
  };
}

var newVar = let_me_const.bind({
    myVar: 333
});
console.log(newVar.myVar);