#!/usr/bin/node
function myVar() {
  var oldVar = 89;
  return {
    oldVar: oldVar
  };
}

var newVar = myVar.bind({
    oldVar: 333
});