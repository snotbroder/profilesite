// Function to check if element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Function to add a class when the element is in the viewport
function addClassOnScroll(elements, className) {
  window.addEventListener("scroll", function () {
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add(className);
      }
    });
  });
}

// Example Usage
document.addEventListener("DOMContentLoaded", function () {
  const myElements = document.querySelectorAll("p, .viewable, h2, h6, .profilepic");
  const myClass = "in-viewport";

  // Call the function and pass the NodeList
  addClassOnScroll(myElements, myClass);
});
