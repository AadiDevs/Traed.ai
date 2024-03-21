const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((accordionItem) => {
  accordionItem.addEventListener("click", () => {
    const accordionContent = accordionItem.querySelector(".accordion-content");
    accordionContent.classList.toggle("hide");
  });
});
