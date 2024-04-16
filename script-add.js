var b = document.getElementsByTagName("div")[0];  

b.addEventListener("mousemove", function(event) {
  parallaxed(event);

});

function parallaxed(e) {
      var amountMovedX = (e.clientX * 0.2 / 8);
      var amountMovedY = (e.clientY * 0.2 / 8);
      var x = document.getElementsByClassName("parallaxed");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
      }
}

const initpXDropdown = () => {
  const dropdownElements = document.querySelectorAll(".editor-dropdown");
  window.addEventListener("click", () => {
    dropdownElements.forEach((item) => {
      item.classList.remove("active");
    });
  });
  dropdownElements.forEach((item) => {
    const dropdownValue = item.querySelector(".editor-dropdown-value");
    const dropdownInput = item.querySelector(".editor-dropdown-input");
    const dropdownPanelOptions = item.querySelectorAll(
      ".editor-dropdown-panel ul li"
    );
    dropdownInput.addEventListener("click", (event) => {
      event.stopPropagation();
      item.classList.toggle("active");
    });
    dropdownPanelOptions.forEach((dropdownPanelOptionItem) => {
      dropdownPanelOptionItem.addEventListener("click", () => {
        dropdownInput.querySelector("input").value =
          dropdownPanelOptionItem.innerHTML;
        dropdownValue.value = dropdownPanelOptionItem.getAttribute(
          "data-value"
        );
      });
    });
  });
};
initpXDropdown();
