const loadingText = document.querySelector('.loading-text');
loadingText.innerHTML = loadingText.textContent.split('').map(char => `<span>${char}</span>`).join('');
loadingText.dataset.text = loadingText.textContent; // add data attribute to store the text value