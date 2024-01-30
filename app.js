const express = require('express');
const dotenv = require('dotenv');


const OpenAI = require('openai')

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

// Set up Express app
const app = express();
app.use(express.json());
// Use public directory for CSS, HTML, and JS
app.use(express.static('public'));
const port = 3000;

// Function to generate images using OpenAI SDK
app.post('/generate', async (req, res) => {
  // grab prompt from the front end
  const { prompt } = req.body;
  // const imageSize =
  //     size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';

  try {
    // use OpenAI SDK to generate image using the prompt from the front end
    const response = await openai.images.generate({
      prompt,
      // n:1,
      // size:imageSize,
    });

    // the URL to the image we will display
    let url = response.data[0].url;

    // send url to front end to display the image
    res.status(200).json({
      success: true,
      data: url,
    });
  } catch (error) {
    console.log(error);
    // send error to front end, so user can easily see that something went wrong
    res.status(400).json({
      success: false,
      error: 'The image could not be generated',
    });
  }
});


app.listen(port);
console.log(`Running on localhost:${port}`);
