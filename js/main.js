"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const add = document.querySelector("#add"),
    input1 = document.querySelector("#input-1"),
    output = document.querySelector("#output"),
    sortByName = document.querySelector("#sort-by-name"),
    sortByValue = document.querySelector("#sort-by-value"),
    deleteItem = document.querySelector("#delete-item"),
    showXml = document.querySelector("#show-xml");

  add.addEventListener("click", () => {
    const nameValue = input1.value;
    if (/^([a-zA-Z0-9' ']+=[a-zA-Z0-9' ']+)$/.test(nameValue)) {
      output.textContent += nameValue + "\n";
    } else {
      alert("Sorry, you can put only alpha-numeric characters");
    }
  });

  sortByName.addEventListener("click", () => {
    const textareaName = output.value
      .toLowerCase()
      .trim("\n")
      .split("\n")
      .sort()
      .join("\n");
    output.textContent = null;
    output.textContent += textareaName + "\n";
  });

  sortByValue.addEventListener("click", () => {
    const textareaValue = output.value
      .toLowerCase()
      .trim("\n")
      .split("\n")
      .sort((a, b) => a.match(/\d+/)[0] - b.match(/\d+/)[0])
      .join("\n");
    output.textContent = null;
    output.textContent += textareaValue + "\n";
  });

  deleteItem.addEventListener("click", () => {
    let selected = output.value.slice(
      output.selectionStart,
      output.selectionEnd
    );
    console.log(selected);
    output.setRangeText(`${selected = ""}`);
  });

  showXml.addEventListener("click", () => {
    var yourString = new XMLSerializer().serializeToString(output);
    alert(yourString);
  });
});
