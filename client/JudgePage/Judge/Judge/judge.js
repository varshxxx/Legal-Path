// Function to show Sitemap content dynamically
document.getElementById('sitemap-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior for "Sitemap"

    const navbarItems = document.querySelectorAll('#navbar li a');
    const footerLinks = document.querySelectorAll('.footer-top ul li a');
    const sitemapContent = document.getElementById('sitemap-content');
    const footerContent = document.getElementById('footer-content');

    sitemapContent.innerHTML = ''; // Clear existing content
    footerContent.innerHTML = '';  // Clear footer content

    // Add navbar items to the sitemap
    const sitemapTitle = document.createElement('h3');
    sitemapTitle.textContent = 'SITEMAP';
    sitemapContent.appendChild(sitemapTitle);
    navbarItems.forEach((item) => {
        const link = document.createElement('a');
        link.textContent = item.textContent;
        link.href = item.href;
        link.style.display = 'block';
        link.style.color = 'black';
        link.style.textDecoration = 'none';
        link.style.fontWeight = 'bold';
        link.style.paddingLeft = '20px';
        sitemapContent.appendChild(link);
    });

    // Add footer items to the sitemap
    const footerTitle = document.createElement('h3');
    footerTitle.textContent = 'FOOTER';
    footerContent.appendChild(footerTitle);
    footerLinks.forEach((item) => {
        const link = document.createElement('a');
        link.textContent = item.textContent;
        link.href = item.href;
        link.style.display = 'block';
        link.style.color = 'black';
        link.style.textDecoration = 'none';
        link.style.fontWeight = 'bold';
        link.style.paddingLeft = '20px';
        footerContent.appendChild(link);
    });

    // Show the sitemap and footer content
    sitemapContent.style.display = 'block';
    footerContent.style.display = 'block';
});

// Language Dropdown Toggle Functionality
document.getElementById('language-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior

    const languageContainer = document.querySelector('.language-container');
    languageContainer.classList.toggle('active'); // Toggle dropdown visibility
});

var pdf1=document.getElementById('pdf1');
var pdf2=document.getElementById('pdf2');

pdf1.addEventListener('onmouseover', ()=>{
    pdf2.style.display = 'none';
    pdf1.style.transform="scale(1.5)";
    pdf1.style.transition="transform 0.5s";
});

pdf1.addEventListener('onmouseout', ()=>{
    pdf1.style.transform="scale(1)";
    pdf2.style.display = 'block';
});

pdf2.addEventListener('onmouseout', ()=>{
    pdf2.style.transform="scale(1)";
    pdf1.style.display = 'block';
});

pdf2.addEventListener('onmouseover', ()=>{
    pdf1.style.display = 'none';
    pdf2.style.transform="scale(1.5)";
    pdf2.style.transition="transform 0.5s";
});

async function queryGeminiEndpoint() {
    const endpointUrl = 'http://localhost:3000/query-gemini'; // Adjust port if needed
  
    try {
      // Display loading message
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = 'Processing your request, please wait...';
  
      // Make a POST request to the endpoint
      const response = await fetch(endpointUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      // Check for HTTP errors
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      
      }
      const data = await response.json();
      console.log(response);
  
      // Display the generated suggestion
      if (data.suggestion) {
        resultDiv.innerHTML =` <h3>Bail Suggestion and Prediction</h3><pre>${data.suggestion}</pre>`;
      } else {
        resultDiv.innerHTML = 'No suggestion generated.';
      }
    } catch (error) {
      console.log('Error:', error);
      document.getElementById('result').innerHTML = `Failed to process request: ${error.message}`;
    }
  }
  
  document.querySelector(".generate_suggestion").addEventListener("click", () => {
    const loadingDiv = document.getElementById("loading");
    const contentDiv = document.getElementById("content");

    // Initially hide the content and show the loading message
    contentDiv.style.display = "none";
    loadingDiv.style.display = "block";

    // Show content after a 10-second delay
    setTimeout(() => {
        loadingDiv.style.display = "none";
        contentDiv.style.display = "block";
    }, 10000);
});