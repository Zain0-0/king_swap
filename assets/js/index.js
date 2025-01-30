

function selectOption(imageSrc, optionText) {
    // Get the dropdown button
    const dropdownButton = document.getElementById("dropdownButton");
  
    // Update the button's content
    dropdownButton.innerHTML = `
      <img src="${imageSrc}" height="18px" alt=""> ${optionText}
    `;
  }

