let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  let arr2=[
    { id: 11, name: "Virat", age: "35", profession: "doctor" },
    { id: 12, name: "Rohit", age: "34", profession: "engineer" },
    { id: 13, name: "Dhoni", age: "42", profession: "CA" },
  ]
  
  function PrintDeveloperbyMap() {
    arr.map(element=>{
      if(element.profession=="developer"){
        console.log(element);
      }
    })
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach(employee=>{
      if(employee.profession=="developer"){
        console.log(employee);
      }
    })
  }
  
  function addData() {
    
    let obj={id:4,name:"Biden",age:"24",profession:"SR Developer"};
    arr.push(obj);
    console.log(arr);
  
  }
  
  function removeAdmin() {
    arr.forEach((employee=>{
      if(employee.profession=="admin"){
        arr.pop(employee);
      }
    }))
  
    console.log(arr);
  
  }
  
  function concatenateArray() {

    
    arr2.forEach(emp=>{
      arr.push(emp);
    })
  
    console.log(arr);
  }
