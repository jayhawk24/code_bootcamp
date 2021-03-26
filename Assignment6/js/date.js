const date = new Date();

const setDate = () => {
  const day = document.querySelector(".date .day");
  const month = document.querySelector(".monthYear .month");
  const year = document.querySelector(".monthYear .year");
  const week = document.querySelector(".week");

  day.innerHTML = date.getUTCDate();
  month.innerHTML = date.toLocaleString("default", { month: "long" });
  year.innerHTML = date.getFullYear();
  week.innerHTML = date.toLocaleDateString("locale", { weekday: "long" });
};

setDate();
