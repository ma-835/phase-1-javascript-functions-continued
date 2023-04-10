function saturdayFun(activity = 'roller-skate' ){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("bath my dog");

(function() {
    console.log("Yet more razzling");
  });

const mondayWork = function(target = "go to the office" ) {
    return `This Monday, I will ${target}.`
}
mondayWork("I will work from home");


function wrapAdjective(string= "*"){
return function (parameter = "special"){
return `You are ${string}${parameter}${string}!`;
}
}
