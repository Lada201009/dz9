let testP = document.createElement("p");
document.body.append(testP);
testP.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores labore praesentium impedit quod sequi quam tempora minima quas alias pariatur."
testP.style.backgroundColor = "orange";

let testP1 = document.createElement("p");
document.body.append(testP1);
testP1.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores labore praesentium impedit quod sequi quam tempora minima quas alias pariatur."
testP1.style.backgroundColor = "silver";

let testP2 = document.createElement("p");
document.body.append(testP2);
testP2.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores labore praesentium impedit quod sequi quam tempora minima quas alias pariatur."
testP2.style.backgroundColor = "yellow";

let testP3 = document.createElement("p");
document.body.append(testP3);
testP3.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores labore praesentium impedit quod sequi quam tempora minima quas alias pariatur."

let testP4 = document.createElement("p");
document.body.append(testP4);
testP4.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores labore praesentium impedit quod sequi quam tempora minima quas alias pariatur."

let testP5 = document.createElement("p");
document.body.append(testP5);
testP5.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores labore praesentium impedit quod sequi quam tempora minima quas alias pariatur."

let testP6 = document.createElement("p");
document.body.append(testP6);
testP6.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores labore praesentium impedit quod sequi quam tempora minima quas alias pariatur."

let testP7 = document.createElement("p");
document.body.append(testP7);
testP7.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores labore praesentium impedit quod sequi quam tempora minima quas alias pariatur."

let testP8 = document.createElement("p");
document.body.append(testP8);
testP8.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores labore praesentium impedit quod sequi quam tempora minima quas alias pariatur."

let testP9 = document.createElement("p");
document.body.append(testP9);
testP9.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores labore praesentium impedit quod sequi quam tempora minima quas alias pariatur."


let parent = document.createElement("ul");
document.body.append(parent)
let list = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
for (let i = 0; i <= 6; i++) {
	let li = document.createElement('li');
	li.innerHTML = list [i];
	parent.appendChild(li);
  li.style = "background-color: " + 
  '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
 
}

