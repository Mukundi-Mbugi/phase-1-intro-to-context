// Your code here
function createEmployeeRecord(array){
    const testEmployee={}
    return new Object({
      firstName : array[0],
      familyName : array[1],
      title : array[2],
      payPerHour : array[3],
      timeInEvents : [],
      timeOutEvents : []
    })
  }
  
  function createEmployeeRecords(arrays){
    let anArray = []
    arrays.forEach(element => {
      anArray.push(createEmployeeRecord(element))
    });
    return anArray
  }
  
  function createTimeInEvent(arg, timeIn){
    let updatedArray = timeIn.split(" ")
    
    arg.timeInEvents.push(new Object({
      type : "TimeIn",
      date : updatedArray[0],
      hour : parseInt(updatedArray[1])
    }))
    return arg
  }
  
  function createTimeOutEvent(arg, timeOut){
    let updatedArray = timeOut.split(" ")
    
    arg.timeOutEvents.push(new Object({
      type : "TimeOut",
      date : updatedArray[0],
      hour : parseInt(updatedArray[1])
    }))
    return arg
  }
  
  let day = "Hello World".split(" ")
  console.log(day)
  

  function hoursWorkedOnDate(arg, arg2){
    let hours = (arg.timeOutEvents[0].hour - arg.timeInEvents[0].hour) / 100
    return hours
  }
  
  function wagesEarnedOnDate(arg, arg2){
    let wages = hoursWorkedOnDate(arg, arg2) * arg.payPerHour
    return wages
  }
  
  function allWagesFor(arg){
    let i;
    let hours = 0
    for(i = 0; i < arg.timeInEvents.length; i++){
      hours += (arg.timeOutEvents[i].hour - arg.timeInEvents[i].hour) / 100
    }
    return hours * arg.payPerHour
  
  }
  
    
  let employees = [sRecord, rRecord]
  
  function calculatePayroll(employees){
    let sum = 0
    for(let employee of employees){
      console.log(employee)
      sum += allWagesFor(employee)
    }
    return sum
  }
  
  console.log(calculatePayroll(employees))
