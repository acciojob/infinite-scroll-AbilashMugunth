//your code here!
let list = document.querySelector("#infi-list");
let count = 0;

for (let i = 0; i < 7 ; i++) {
  let listItem = document.createElement("li");
  listItem.innerText = `Item ${++count}`;
  list.appendChild(listItem);
}

list.addEventListener("scroll", () => {
  let listItem = document.createElement("li");
  listItem.innerText = `Item ${++count}`;
  list.appendChild(listItem);
});
