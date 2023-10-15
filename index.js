document.addEventListener('DOMContentLoaded', function () {
    // This function will be called when the DOM is fully loaded and ready for manipulation
    const paragraphElement = document.getElementById('text');
  
    // Check if the paragraph element exists
    if (paragraphElement) {
      // Replace the text content of the paragraph
      paragraphElement.textContent = "This is really cool!";
    } else {
      console.error("Paragraph element with id 'text' not found");
    }
  });
  