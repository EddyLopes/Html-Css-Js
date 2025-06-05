
document.addEventListener("DOMContentLoaded", function () {
  const carets = document.querySelectorAll(".treeview .caret");

  carets.forEach(function (caret) {
    caret.addEventListener("click", function (e) {
      e.stopPropagation();

      const nestedList = this.parentElement.querySelector("ul.nested");
      if (nestedList) {
        nestedList.classList.toggle("open");
        this.classList.toggle("caret-open");
      }
    });
  });

  const tocList = document.getElementById("toc-list");
  const headers = document.querySelectorAll("main h1, main h2, main h3");

  headers.forEach(header => {
    if (!header.id) {
      header.id = header.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    }
    const li = document.createElement("li");
    const level = parseInt(header.tagName.substring(1));
    li.style.marginLeft = (level - 1) * 15 + "px";
    li.innerHTML = `<span class='caret'><i class="fa-solid fa-angle-right"></i></span> <a href="#${header.id}">${header.textContent}</a>`;
    tocList.appendChild(li);
  });

  // Busca
  const searchBox = document.getElementById("searchBox");
  searchBox.addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    const links = tocList.querySelectorAll("li");
    links.forEach(li => {
      const text = li.textContent.toLowerCase();
      li.style.display = text.includes(filter) ? "" : "none";
    });
  });
});
