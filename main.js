function call(func) {
  return func()
}

function callTwice(func) {
  return func(), func()
  
  
}

function callXTimes(func,num) {
  
  
  return call(func())

}

function returnFromFunc(func) {
  return func(func)
}

function modifyString(str,call) {
  

  return call(str)
}

function modifyNumber(num,func) {
  return func(num)
}

function modifyAnything(anything,modifyNumber) {
  return modifyNumber(anything)
}

function twoFuncs(func, func1) {
  let result = func()

  return func1(result)
}

function twoValues(func,val,val1) {
  return func(val,val1)
}

function twoValuesRTL() {
}


module.exports = {
  call,
  callTwice,
  callXTimes,
  returnFromFunc,
  modifyString,
  modifyNumber,
  modifyAnything,
  twoFuncs,
  twoValues,
  twoValuesRTL,
}