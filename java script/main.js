let x = document.getElementById("todo-input");
y = x.value;
c = document.getElementById('name-box').innerHTML = y;
let btn1 = document.createElement("BUTTON");
btn1.innerHTML = "حذف";
btn1.className = "main-bar-bottom-btn-1";
let btn2 = document.createElement("button");
btn2.innerHTML = "ویرایش";
btn2.className = "main-bar-bottom-btn-2";
document.body.appendChild(btn1);
document.body.appendChild(btn2);