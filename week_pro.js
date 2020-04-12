let myObj = { name: '张三', age: 18,sex:'女' }
  let tempArr = Object.keys(myObj)
  console.log(tempArr)
  for (let key in myObj) {
    console.log(key);//健
    console.log(myObj[key]);//值    
  }