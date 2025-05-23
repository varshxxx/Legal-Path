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
