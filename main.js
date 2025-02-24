function call(func) {
  return func()
}

function callTwice(func) {
  return func(), func()
  
  
}

function callXTimes(func,num) {
  let count = 1
  while(count <= num){
    func()
    count ++
  
  }

}

function returnFromFunc(func) {
  return func()
}

function modifyString(str,func) {
  

  return func(str)
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

function twoValues(val,val1, func){
  let result = func(val,val1)
  
  return result
}

function twoValuesRTL(str1,str,func) {
  return func(str,str1)

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