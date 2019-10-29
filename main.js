function call(func) {
  return func()
}

function callTwice(func) {
  return func(), func()
  
  
}

function callXTimes(func,num) {
  
  
  return func().length = num

}

function returnFromFunc(func) {
  return func(func)
}

function modifyString(func) {
  

  return func('')
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
  let result = func(val)
  let result1 = func(val1)

  return result + result1
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