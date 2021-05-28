//EX21
let x = "John";
let y = "Doe";
console.log(x + " <> " + y);
//EX22
let person = {
  name: "James",
  surname: "Sutcliffe",
  email: "jamessut@hotmail.co.uk",
  age: 25,
};
//EX23
delete person.email;
console.log(person);
//EX24
let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
//EX25
console.log(array);

//EX26
let newArray = [];
random = Math.floor(Math.random() * 101);
for (let i = 0; i < 100; i++) {
  random = Math.floor(Math.random() * 1001);
  newArray.push(random);
}
console.log(newArray);
//EX27
const checkArray = function (newArray) {
  let min = Math.min(...newArray);
  let max = Math.max(...newArray);
  console.log("Min: " + min + " Max: " + max);
};

checkArray(newArray);
//EX28
let firstArray = [];
for (let i = 0; i < 5; i++) {
  let secondArray = [];
  for (let x = 0; x < 10; x++) {
    random = Math.floor(Math.random() * 1001);
    secondArray.push(random);
  }
  firstArray.push(secondArray);
}

console.log(firstArray);
//EX29
testArray1 = [1, 2, 3];
testArray2 = [1, 2, 3, 4, 5, 6];
const longestArray = function (testArray1, testArray2) {
  if (testArray1 > testArray2) {
    return testArray1;
  } else {
    return testArray2;
  }
};
console.log(longestArray(testArray1, testArray2));

//EX30

const higherSum = function (testArray1, testArray2) {
  let sum1 = null;
  let sum2 = null;

  for (let i = 0; i < testArray1.length; i++) {
    sum1 += parseInt(testArray1[i]);
  }

  for (let i = 0; i < testArray2.length; i++) {
    sum2 += parseInt(testArray2[i]);
  }
  if (sum1 > sum2) {
    return sum1;
  } else {
    return sum2;
  }
};
console.log(higherSum(testArray1, testArray2));



//DOM
//EX 31
let grabContainers = document.getElementById("container")

//EX32
let grabTD = document.getElementsByTagName("td")

//EX33
window.onload = function(){
    let grabTD = document.getElementsByTagName("td")
    for (let i = 0; i < grabTD.length; i++) {
        text = grabTD[i].innerText
        console.log(text)
    }
}


//EX34
const changeHeading = function(){
  let grabHeading = document.querySelector("h1")
  grabHeading.innerText = "This text has been changed"
}

//EX35
const newRow = function(){
  let row = document.createElement("tr")
  let rowText = document.createElement("td")
  rowText.innerText = "New Row"
  row.appendChild(rowText)
  row.classList.add("border")
  let grabTable = document.getElementById("table1")
  grabTable.appendChild(row)
  
}

//EX36
const addClass = function(){
  let rows = document.getElementsByTagName("tr")
  for (let i = 0; i < rows.length; i++) {
    rows[i].classList.add("test")
}  
} 

//EX37
const redLink = function(){
  let links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red"
  }
}

//EX34
// window.onload = function(){
//   console.log("page loaded")
// }

//EX35
const newItems = function(itemInput){
  let list = document.querySelector("ul")
  let item = document.createElement("li");
  item.innerText = itemInput
  list.appendChild(item)
}

//EX36
const emptyList = function () {
  let list = document.querySelector("ul");
  list.innerHTML = ''
};