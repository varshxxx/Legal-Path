// Select elements for bo1, bo2, bo3 and their associated content
var bo1 = document.getElementById("bo1");
var bo2 = document.getElementById("bo2");
var bo3 = document.getElementById("bo3");
var nav=document.getElementById('nav');

var bin1 = document.getElementById("bin1");
var lg1 = document.getElementById("lg1");
var con1 = document.getElementById("con1");

var bin2 = document.getElementById("bin2");
var lg2 = document.getElementById("lg2");
var con2 = document.getElementById("con2");

var bin3 = document.getElementById("bin3");
var lg3 = document.getElementById("lg3");
var con3 = document.getElementById("con3");

var container = document.createElement("container");
 let num=0;

// Default styles for the elements (on mouseout)
function resetStyles(box, boxIn, logo, content) {
    // Reset styles for the box
    box.style.width = "30%";
    box.style.height = "100%";
    box.style.backgroundColor = "rgba(244, 239, 186, 0)";
    box.style.padding = "15px";
    box.style.boxShadow = "0px 0px 0px 0px white";
    box.style.borderRadius = "20px";
   
    box.style.transition = "1s";


    // Reset styles for the box_in
    boxIn.style.width = "100%";
    boxIn.style.height = "100%";
    boxIn.style.display = "flex";
    boxIn.style.flexDirection = "column";  // Default to column
    boxIn.style.alignItems = "center";
    boxIn.style.justifyContent = "center";
    boxIn.style.gap = "10px";
    boxIn.style.fontWeight = "bolder";
    boxIn.style.fontSize = "x-large";
    boxIn.style.transition = "1s";

    // Reset styles for the logo
    logo.style.width = "50%";
    logo.style.height = "70%";
    logo.style.transition = "1s";

    // Reset styles for the content
    content.style.width = "0%";
    content.style.height = "0%";
    content.style.display = "block";
    content.style.margin = "auto";
    content.style.textAlign = "justify";
    content.style.wordWrap = "break-word";  // Fix for text-wrap
    content.style.lineHeight = "120%";
    content.style.visibility = "hidden";
    content.style.transition = "1s";
    content.style.overflow = "hidden";
    
}

// Event Listener for bo1 (mouseover and mouseout)
bo1.addEventListener("mouseover", () => {
    applyStyles(bo1, bin1, lg1, con1);
});
bo1.addEventListener("mouseout", () => {
    resetStyles(bo1, bin1, lg1, con1);
});

// Event Listener for bo2 (mouseover and mouseout)
bo2.addEventListener("mouseover", () => {
    applyStyles(bo2, bin2, lg2, con2);
});
bo2.addEventListener("mouseout", () => {
    resetStyles(bo2, bin2, lg2, con2);
});

// Event Listener for bo3 (mouseover and mouseout)
bo3.addEventListener("mouseover", () => {
    applyStyles(bo3, bin3, lg3, con3);
});
bo3.addEventListener("mouseout", () => {
    resetStyles(bo3, bin3, lg3, con3);
});

// Function to apply styles (for mouseover event)
function applyStyles(box, boxIn, logo, content) {
    // Styles for the box
    box.style.width = "30%";
    box.style.height = "auto";
    box.style.color = "#9b0620";
    // box.style.backgroundColor = "beige";
    box.style.padding = "10px";
    box.style.borderRadius = "20px";
    box.style.transition = "1s";
    box.style.backgroundColor="white";
    box.style.boxShadow = "1px 2px 3px 1px #9b0620";

    // Styles for the box_in
    boxIn.style.width = "100%";
    boxIn.style.height = "30%";
    boxIn.style.display = "flex";
    boxIn.style.justifyContent = "flex-start";
    boxIn.style.alignItems = "center";
    boxIn.style.fontSize = "larger";
    boxIn.style.fontWeight = "bolder";
    boxIn.style.gap = "9px";
    boxIn.style.flexDirection = "row";  // Change flexDirection to row
    boxIn.style.transition = "1s";

    // Styles for the logo
    logo.style.width = "20%";
    logo.style.height = "70%";
    logo.style.transition = "1s";

    // Styles for the content
    content.style.width = "80%";
    content.style.height = "80%";
    content.style.display = "block";
    content.style.margin = "auto";
    content.style.textAlign = "justify";
    content.style.wordWrap = "break-word";  // Alternatively, use wordBreak = "break-word"
    content.style.lineHeight = "120%";
    content.style.visibility = "visible";
    content.style.transition = "1s";
}

var fot=document.getElementById("fot");
var bail=document.getElementById("bail");
var ai=document.getElementById("ai");
var start=document.getElementById("start");
var getfile=document.getElementById("getfile");
var det=document.getElementById("det");
var ins=document.getElementById("in");
const fileNameDisplay = document.getElementById("fd");
const fileInput = document.getElementById("file-upload");
start.addEventListener("click", () => {
    det.style.display = "none ";
    ai.style.display="none";
    bail.style.display="none";
    fot.style.display="none";
    nav.style.display="none";
    getfile.style.display = "block";
    getfile.style.width = "100%";
    getfile.style.height = "100vh";
    fileInput.value = '';
    ins.style.backgroundColor="white";
    fileNameDisplay.textContent="No file selected"
})



// Add an event listener to handle file selection
fileInput.addEventListener("change", function () {
    // Get the selected file
    const file = fileInput.files[0];

    // Check if a file is selected
    if (file) {
        // Get the file name and type
        const fileName = file.name;
        const fileType = file.type;

        // List of allowed MIME types
        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ];

        // Check if the file type is valid
        if (allowedTypes.includes(fileType)) {
            // Set the background color to light green for valid files
            ins.style.backgroundColor = "#2aff0421";
        } else {
            // Set the background color to light red for invalid files
            ins.style.backgroundColor = "#ff040433";
        }

        // Display the file name
        fileNameDisplay.textContent = fileName;
    } else {
        // Reset the display for no file selected
        fileNameDisplay.textContent = "No file selected";
        fileNameDisplay.style.backgroundColor = ""; // Reset background color
    }
});



const fileInput1 = document.getElementById("file-upload1");
const fileNameDisplay1 = document.getElementById("fd1");
var ins1 = document.getElementById("in1");

// Add an event listener to handle file selection
fileInput1.addEventListener("change", function () {
    // Get the selected file
    const file = fileInput1.files[0];


    // Check if a file is selected
    if (file) {
        // Get the file name and type
        const fileName = file.name;
        const fileType = file.type;

        // List of allowed MIME types
        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ];

        // Check if the file type is valid
        if (allowedTypes.includes(fileType)) {
            // Set the background color to light green for valid files
            ins1.style.backgroundColor = "#32ff0433";
        } else {
            // Set the background color to light red for invalid files
            ins1.style.backgroundColor = "#ff040433";
        }

        // Display the file name
        fileNameDisplay1.textContent = fileName;
    } else {
        // Reset the display for no file selected
        fileNameDisplay1.textContent = "No file selected";
        fileNameDisplay1.style.backgroundColor = ""; // Reset background color
    }
});

var next=document.getElementById("next");
var getg=document.getElementById("getg");
// next.addEventListener("click", () => {
//     getg.style.display = "block";
//     getfile.style.display = "none";
//     getg.style.width = "100%";
//     getg.style.minHeight = "100vh";
// })

var next1=document.getElementById("next1");
var geta=document.getElementById("geta");

next1.addEventListener("click", () => {
    geta.style.display = "block";
    getg.style.display = "none";
    geta.style.width = "100%";
    geta.style.height = "100vh";
})

var sub=document.getElementById("sub");
var getdone=document.getElementById("getdone");

sub.addEventListener("click", () => {
    getdone.style.display = "block";
    getdone.style.width = "100%";
    getdone.style.height = "40vh";
    
    geta.style.display="none";
    fot.style.display = "block";
    nav.style.display = "block";
    getfile.style.display = "none";
    
})

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

var body=document.getElementById('body');
var sub1=document.getElementById('sub1');
sub1.addEventListener('click', ()=>{
    geta.style.display = "block";
    geta.style.backgroundColor="#FFFFFF";
    getg.style.display = "none";
    geta.style.width = "100%";
    geta.style.height = "100vh";
    det.style.display = "none ";
    ai.style.display="none";
    bail.style.display="none";
    fot.style.display="none";
    nav.style.display="none"
    getfile.style.display = "none";
})

// Get references to the DOM elements
const fileInput2 = document.getElementById('file-upload');
const fileDisplay = document.getElementById('fd');
const nextButton = document.getElementById('next');
const generatedResultSection = document.getElementById('getg');
const genResultText = document.getElementById('gen-res');
const nextButton1 = document.getElementById('next1');

// Function to send the file to the backend and get the generated bail petition
async function uploadFileAndGenerateBailPetition(file) {
    const formData = new FormData();
    formData.append('firPdf', file);

    try {
        const response = await fetch('http://127.0.0.1:3000/generate-bail-petition', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to generate bail petition');
        }

        const data = await response.json();
        return data.bailPetition;
    } catch (error) {
        console.error('Error in file upload and petition generation:', error);
        alert('Error generating bail petition');
        return null;
    }
}

    document.getElementById('sub').addEventListener('click', async () => {
        const fileInput = document.getElementById('file-upload1');
        if (!fileInput.files || fileInput.files.length === 0) {
            alert('Please upload a file before submitting.');
            return;
        }
    
        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append('firPdf', file); // Match the field name used in the server-side `multer` setup
    
        try {
            // Send POST request to the server
            const response = await fetch('http://localhost:3000/generate-bail-petition', {
                method: 'POST',
                body: formData, // Send the file as FormData
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log('Bail petition generated successfully:', result);
    
                // Optionally show a success message to the user
                alert('Bail petition generated successfully!');
            } else {
                console.error('Error generating bail petition:', response.statusText);
                alert('Failed to generate the bail petition.');
            }
        } catch (error) {
            console.error('Error submitting the request:', error);
            alert('An error occurred while submitting the request.');
        }
    });
    



// Function to handle file upload
fileInput2.addEventListener('change', async(event) => {
    const file = event.target.files[0];
    if (file) {
        fileDisplay.textContent = `File selected: ${file.name}`;
        getg.style.display = "block";
        getg.style.width = "100%";
        getg.style.minHeight = "100vh";
        genResultText.innerHTML =`<img src="load.gif" style="width:7%;height:9vh;display:absolute"></image>`;
        nextButton1.disabled=true;
        window.scrollBy({
            top: 500, // Pixels to scroll down
            left: 0,  // Pixels to scroll horizontally
            behavior: 'smooth' // Smooth scrolling
        });
        const bailPetition = await uploadFileAndGenerateBailPetition(file);
        if (bailPetition) {
            const file = fileInput2.files[0];  // Corrected this line to use fileInput2
             
            console.log(bailPetition);
            let formattedText = bailPetition.replace(/\n/g, "<br>");
            formattedText=formattedText.replace(/\\(.?)\\*/g, "<b>$1</b>");
            formattedText=formattedText.replace(/\*/g,"");
            genResultText.innerHTML = formattedText
            generatedResultSection.style.display = 'block';  // Show the result section
            nextButton1.disabled=false;
        } else {
            genResultText.textContent = 'Failed to generate bail petition.';
        }
    } else {
        fileDisplay.textContent = 'No file selected';
    }
});





// Function to handle "Next" button click after showing the result
nextButton1.addEventListener('click', () => {
    // Optionally handle further actions like redirecting or resetting the page
    alert('Proceeding to next step');
});


var back=document.getElementById('back');
var back1=document.getElementById('back1');
var back2=document.getElementById('back2');


back.addEventListener('click', () => {
    det.style.display = "block ";
    det.style.animation = "back";
    det.style.animationDuration="0.5s";
    ai.style.display="flex";
    getg.style.display="none";
    ai.style.animation="back";
    ai.style.animationDuration="0.5s";
    bail.style.display="block";
    bail.style.animation="back";
    bail.style.animationDuration="0.5s";
    fot.style.display="block";
    fot.style.animation="back";
    fot.style.animationDuration="0.5s";
    nav.style.display="block";
    nav.style.animation="back";
    nav.style.animationDuration="0.5s"
    getfile.style.display = "none";
    getfile.style.width = "0";
    getfile.style.height = "0";
})

// back1.addEventListener('click', () => {
//     getg.style.display = "none";
//     getfile.style.display = "block";
//     getfile.style.animation="back";
//     getfile.style.animationDuration="0.5s";
//     getg.style.width = "0";
//     getg.style.minHeight = "0";
// })

back2.addEventListener('click', () => {
    geta.style.display = "none";
    geta.style.width = "0";
    geta.style.height = "0";
    



    det.style.display = "block ";
    det.style.animation = "back";
    det.style.animationDuration="0.5s";
    ai.style.display="flex";
    
    ai.style.animation="back";
    ai.style.animationDuration="0.5s";
    bail.style.display="block";
    bail.style.animation="back";
    bail.style.animationDuration="0.5s";
    fot.style.display="block";
    fot.style.animation="back";
    fot.style.animationDuration="0.5s";
    nav.style.display="block";
    nav.style.animation="back";
    nav.style.animationDuration="0.5s"
    getfile.style.display = "none";
    getfile.style.width = "0";
    getfile.style.height = "0";
})

////////////////////////////////////////////////////////////////////////
function uploadFIR() {
    alert('Upload FIR clicked');
    // Add logic for uploading FIR
  }

  function uploadPetition() {
    alert('Upload Petition clicked');
    // Add logic for uploading Petition
  }

//   function submitFiles() {
//     alert('Files Submitted');
//     createCard();
//   }

  function createCard() {
    const cardsContainer = document.getElementById('cardsContainer');

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <p>Files Uploaded Successfully</p>
      <button class='butsub' onclick="goToNextPage()" >Next</button>
    `;

    cardsContainer.appendChild(card);
  }

  function goToNextPage() {
    window.location.href = 'download.html';
  }

//     function submitFiles() {
//     alert('Files Submitted');
//     createCard();
//   }

//   function submitFiles() {
//     const firFile = document.getElementById('fir-upload').files[0];
//     const petitionFile = document.getElementById('petition-upload').files[0];

//     if (!firFile || !petitionFile) {
//       alert("Please upload both FIR and Petition files.");
//       return;
//     }

//     const cardContainer = document.getElementById('cards-container');
//     const card = document.createElement('div');
//     card.className = 'card';

//     const nextButton = document.createElement('button');
//     nextButton.textContent = 'Next';
//     nextButton.onclick = () => navigateToDownloadPage();

//     card.textContent = `Uploaded Files: ${firFile.name} and ${petitionFile.name}`;
//     card.appendChild(nextButton);
//     cardContainer.appendChild(card);

//     alert("Files submitted successfully!");
//     // Optionally reset file inputs
//     document.getElementById('fir-upload').value = '';
//     document.getElementById('petition-upload').value = '';
//   }

//   function triggerFileUpload(inputId) {
//     document.getElementById(inputId).click();
//   }

//   // Function to handle file selection
//   function handleFileSelection(type, input) {
//     if (input.files.length > 0) {
//       selectedFiles[type.toLowerCase()] = input.files[0];
//       alert(`${type} file selected: ${input.files[0].name}`);
//     }
//   }
// const selectedFiles = { fir: null, petition: null };

//     function triggerFileUpload(inputId) {
//       document.getElementById(inputId).click();
//     }

//     function handleFileSelection(type, input) {
//       if (input.files.length > 0) {
//         selectedFiles[type.toLowerCase()] = input.files[0];
//         alert(`${type} file selected: ${input.files[0].name}`);
//       }
//     }

//     function submitFiles() {
//       const { fir, petition } = selectedFiles;

//       if (!fir || !petition) {
//         alert("Please upload both FIR and Petition files.");
//         return;
//       }

//       const cardContainer = document.getElementById('cardsContainer');
//       const card = document.createElement('div');
//       card.className = 'card';

//       const nextButton = document.createElement('button');
//       nextButton.className = 'but';
//       nextButton.textContent = 'Next';
//       nextButton.onclick = () => navigateToDownloadPage();

//       card.textContent = `Uploaded Files: ${fir.name} and ${petition.name}`;
//       card.appendChild(nextButton);
//       cardContainer.appendChild(card);

//       alert("Files submitted successfully!");

//       // Reset file inputs
//       document.getElementById('fir-input').value = '';
//       document.getElementById('petition-input').value = '';
//       selectedFiles.fir = null;
//       selectedFiles.petition = null;
//     }

//     function navigateToDownloadPage() {
//       window.location.href = 'download.html';
//     }
//////
const selectedFiles = { fir: null, petition: null };

function submitFiles() {
  const { fir, petition } = selectedFiles;

  if (!fir || !petition) {
    alert("Please upload both FIR and Petition files.");
    return;
  }

  // Store the files in sessionStorage as base64 strings or blob URLs
  const firReader = new FileReader();
  firReader.onload = () => {
    const firData = firReader.result;
    sessionStorage.setItem('firFile', firData);
  };
  firReader.readAsDataURL(fir);

  const petitionReader = new FileReader();
  petitionReader.onload = () => {
    const petitionData = petitionReader.result;
    sessionStorage.setItem('petitionFile', petitionData);
  };
  petitionReader.readAsDataURL(petition);

  // Show card with file names
  const cardContainer = document.getElementById('cardsContainer');
  const card = document.createElement('div');
  card.className = 'card';

  const nextButton = document.createElement('button');
  nextButton.className = 'but';
  nextButton.textContent = 'Next';
  nextButton.onclick = () => navigateToDownloadPage();

  card.textContent =`Case Number:${num}`;
  num+=1;
//    `Uploaded Files: ${fir.name} and ${petition.name}`;
  card.appendChild(nextButton);
  cardContainer.appendChild(card);

  alert("Files submitted successfully!");

  // Reset file inputs
  document.getElementById('fir-input').value = '';
  document.getElementById('petition-input').value = '';
  selectedFiles.fir = null;
  selectedFiles.petition = null;
}

function triggerFileUpload(inputId) {
  document.getElementById(inputId).click();
}

// Function to handle file selection
function handleFileSelection(type, input) {
  if (input.files.length > 0) {
    selectedFiles[type.toLowerCase()] = input.files[0];
    alert(`${type} file selected: ${input.files[0].name}`);
  }
}

function navigateToDownloadPage() {
  window.location.href = 'download.html';
}

  
// const selectedFiles = { fir: null, petition: null };

// function triggerFileUpload(inputId) {
//     document.getElementById(inputId).click();
// }

// function handleFileSelection(type, input) {
//     if (input.files.length > 0) {
//         selectedFiles[type.toLowerCase()] = input.files[0];
//         alert(`${type} file selected: ${input.files[0].name}`);
//     }
// }

// function submitFiles() {
//     const { fir, petition } = selectedFiles;

//     if (!fir || !petition) {
//         alert("Please upload both FIR and Petition files.");
//         return;
//     }

//     const formData = new FormData();
//     formData.append('pdfs', fir);
//     formData.append('pdfs', petition);

//     fetch('http://localhost:3001/upload', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert("Files uploaded successfully!");
//         createCard(data.recordId);
//     })
//     .catch(error => {
//         console.error('Error uploading files:', error);
//         alert("Failed to upload files.");
//     });

//     // Reset file inputs
//     document.getElementById('fir-input').value = '';
//     document.getElementById('petition-input').value = '';
//     selectedFiles.fir = null;
//     selectedFiles.petition = null;
// }

// function createCard(recordId) {
//     const cardsContainer = document.getElementById('cardsContainer');

//     const card = document.createElement('div');
//     card.className = 'card';
//     card.innerHTML = `
//         <p>Files Uploaded Successfully</p>
//         <button class='butsub' onclick="goToNextPage(${recordId})">Next</button>
//     `;

//     cardsContainer.appendChild(card);
// }

// function goToNextPage(recordId) {
//     localStorage.setItem('recordId', recordId);  // Save record ID to localStorage
//     window.location.href = 'download.html';  // Navigate to download page
// }
