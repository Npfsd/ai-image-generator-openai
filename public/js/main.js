// Shows spinner while API calls are in progress
function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}

// Removes spinner when API calls are finished and data is returned
function removeSpinner() {
  document.querySelector('.spinner').classList.remove('show');
}

// Send the prompt to the front end, wait for the response,
// and then display the image to the front end
async function generateImageRequest(prompt) {
  try {
    showSpinner();

    // Send prompt and wait for response from the back-end
    const response = await fetch('/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    console.log(response)

    // If there is an error, remove spinner and throw and error
    if (!response.ok) {
      removeSpinner();
      console.log(response)
      throw new Error('That image could not be generated');
    }

    const image = await response.json();
    const imageUrl = image.data;

    // Set the image source to be the URL generated from the OpenAI API call
    document.querySelector('#image').src = imageUrl;

    removeSpinner();
    // Set the "Add to Miro" button once the image is displayed to the front end
    document.getElementById('miroBtn').style.visibility = 'visible';
  } catch (error) {
    // print error to front end
    document.querySelector('.msg').textContent = error;
  }
}

// addToMiro function which sends imgUrl to backend for REST API call
async function addToMiro(imgUrl) {
  try {
    showSpinner();

    // Pass in the imageURL to the backend and make Miro REST API call
    await fetch('/addToMiro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imgUrl,
      }),
    });

    removeSpinner();
  } catch (error) {
    document.querySelector('.msg').textContent = error;
  }
}

// Function which runs when the prompt is submitted on the front end
function onSubmit(e) {
  e.preventDefault();

  document.querySelector('.msg').textContent = '';
  document.querySelector('#image').src = '';

  const prompt = document.querySelector('#promptInput').value;

  if (prompt === '') {
    alert('Please add some text');
    return;
  }

  generateImageRequest(prompt);
}

// Add to Miro button handler
document.getElementById('miroBtn').addEventListener('click', () => {
  const image = document.querySelector('#image');
  const imgUrl = image.src;
  // pass in the image URL to the addToMiro function
  addToMiro(imgUrl);
});

document.querySelector('#imagePrompt').addEventListener('submit', onSubmit);
document.getElementById('miroBtn').style.visibility = 'hidden';
