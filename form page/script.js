function toggleUl(e) {
  for (let i = 0; i < 17; i++) {
    let heading = document.getElementsByTagName("h4")[i];
    if (e.target == heading) {
      let ulr = document.getElementsByTagName("ul")[i - 1];
      let articleBox = document.querySelectorAll(".article-box")[i];
      articleBox.classList.toggle("ul");
      ulr.classList.toggle("ul-2");
    }
  }
}

addEventListener("click", toggleUl);
