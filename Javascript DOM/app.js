var h1=document.getElementsByTagName("h1");
// console.log(h1);

let name = document.getElementById("name").style.color="red";
// console.log(name);

document.getElementById("name").style.removeProperty("color");

let title=document.getElementsByClassName("title");
// console.log(title);


var sakib=document.getElementById("sakib");
sakib.style.color="blue";




var img=document.getElementById("img");
console.log(img.getAttribute("src"));

img.setAttribute("alt","ProfilePicture");
console.log(img.getAttribute("alt"));


var hero=document.getElementById("hero");
console.log(hero.innerText);

var input=document.getElementById("input");
console.log(input.value);


var parent=document.getElementById("parent");
console.log(parent.innerHTML);


// how to go parent and child

var test=document.getElementsByClassName("test");
console.log(test[0].childNodes[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);


// append tag in any div 
var newDiv = document.getElementById("newDiv");
var p=document.createElement("p");
p.innerText="This is a paragraph that is create now!";
newDiv.appendChild(p);

function createEl(){
    // var newDiv = document.getElementById("newDiv");
    var p=document.createElement("p");
    p.innerText="Sir! , Create Another paragraph";
    newDiv.appendChild(p);
}

// document.getElementById("click").addEventListener("click", function(e){
//     var inputVal = document.getElementById("input").value;
//     console.log(inputVal);
// });

// upper comment shortcut 
function clickHandler(e){
    var inputVal = document.getElementById("input").value;
    console.log(inputVal);
};

// document.getElementById("input").addEventListener("blur", function(e){
//     // console.log("hello Mammah");
//     console.log(e.target.value);
// })
// upper comment shortcut 
function inputChange(e){
    // console.log("hello Mammah");
    console.log(e.target.value);
};
