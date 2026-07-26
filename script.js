const yen = String.fromCharCode(165);
const prices = document.querySelectorAll("#purchase .purchase-group:first-of-type .hover-bold");
const pageTitle = "minesense.store";
const blankTitle = String.fromCharCode(8203);
let titleIndex = 0;
let isDeletingTitle = false;

prices[0].textContent = `${yen}120 - lifetime access`;

document.title = blankTitle;

function updateTitle() {
  document.title = pageTitle.slice(0, titleIndex) || blankTitle;

  if (!isDeletingTitle && titleIndex < pageTitle.length) {
    titleIndex += 1;
    window.setTimeout(updateTitle, 120);
  } else if (!isDeletingTitle) {
    isDeletingTitle = true;
    window.setTimeout(updateTitle, 1000);
  } else if (titleIndex > 0) {
    titleIndex -= 1;
    window.setTimeout(updateTitle, 70);
  } else {
    isDeletingTitle = false;
    window.setTimeout(updateTitle, 300);
  }
}

updateTitle();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
