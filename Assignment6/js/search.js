const input = document.querySelector(".banner input");
let cache = [];

const search = (e) => {
  const query = e.target.value.toLowerCase();
  const tasks = document.querySelector(".list ul");
  const items = [...tasks.children];

  if (query === "") {
    if (cache) {
      cache.map((node) => tasks.append(node));
    }
    cache = [];
    return;
  }

  const filtered = items.filter((item) => {
    const taskName = item.firstElementChild.firstElementChild.value.toLowerCase();
    if (taskName.includes(query)) return false;
    else return true;
  });

  filtered.map((node) => {
    cache.push(node);
    tasks.removeChild(node);
  });
};

input.addEventListener("keyup", (e) => search(e));
