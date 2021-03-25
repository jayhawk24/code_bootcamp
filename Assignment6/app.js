const ul = document.querySelector("ul");
const button = document.querySelector(".list button");
const listItems = document.getElementsByTagName("li");

const add = () => {
  const li = document.createElement("li");
  const input = document.createElement("input");
  const container = document.createElement("div");
  const div = document.createElement("div");
  const i1 = document.createElement("i");
  const i2 = document.createElement("i");
  i1.className = "fas fa-check";
  i2.className = "far fa-trash-alt";
  div.className = "icons";

  input.value = "New Task";
  div.appendChild(i1);
  div.appendChild(i2);
  li.appendChild(container);
  container.appendChild(input);
  container.appendChild(div);
  ul.appendChild(li);
};

for (let li of listItems) {
  li.lastElementChild.lastElementChild.lastElementChild.onclick = li.remove;
}

button.addEventListener("click", add);
