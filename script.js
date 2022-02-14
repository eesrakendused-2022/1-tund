let first = document.getElementById('first');
let second =  document.getElementById('second');
let third;
let fifth = ["apple", "orange", "banana"];
let fruits = document.getElementById('fruits');
console.log(fifth);
console.log(fifth[1]);
for(let i=0; i<fifth.length; i++){
    const node = document.createElement("LI");
    node.innerHTML = fifth[i];
    fruits.appendChild(node);
}
document.getElementById('first').style.backgroundColor = "red";
first.style.backgroundColor = "yellow";
first.style.fontSize = "2em";
//second.style.display = "none";
first.innerHTML = "Siin on uus sisu esimesele elemendile";
second.textContent = "Proovime seda muuta";
//third.value = "Uus väärtus";
function updateThird(){
    third = parseFloat(document.getElementById('third').value);
    console.log(third);
}
function calculate(){
    let fourth = parseFloat(document.getElementById('fourth').value);
    console.log(third + fourth);
    second.innerHTML = third + fourth;
}