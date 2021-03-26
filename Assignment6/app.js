const ul = document.querySelector("ul");
const button = document.querySelector(".list button");
const listItems = document.getElementsByTagName("li");

const removeItem = (e) => {
  e.preventDefault();
  const li = e.target.parentElement.parentElement.parentElement;
  li.remove();
};
const doneItem = (e) => {
  e.preventDefault();
  const button = e.target;
  const input = e.target.parentElement.parentElement.firstElementChild;
  input.classList.toggle("done");
  button.classList.toggle("buttonDone");
};

function addEvents(li) {
  function addevent(li) {
    li.lastElementChild.lastElementChild.lastElementChild.addEventListener(
      "click",
      (e) => removeItem(e)
    );
    li.lastElementChild.lastElementChild.firstElementChild.addEventListener(
      "click",
      (e) => doneItem(e)
    );
  }
  if (li) {
    addevent(li);
  } else
    for (let li of listItems) {
      addevent(li);
    }
}

addEvents();

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
  addEvents(li);
};

button.addEventListener("click", add);
