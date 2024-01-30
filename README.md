# Miro-OpenAI-Image-Generator

This project aims to help you understand how to create integrations with the Miro REST API, specifically 
around image generation using AI. Although this is using OpenAI APIs, you can change the back-end 
code to easily use another service to generate images. 

## App Demo

https://github.com/horeaporutiu/Miro-OpenAI-Image-Generator/assets/10428517/e7752ba2-ee1b-4e3f-9169-f20082a5bbf2

## App Setup Video (5 Minutes)
This video shows how to clone, configure, and run the app. It is a video version of the steps below.
Click on the thumbnail to [watch this video on YouTube](https://www.youtube.com/watch?v=E9-GAzOzTQs).

[![Video](https://img.youtube.com/vi/E9-GAzOzTQs/maxresdefault.jpg)](https://www.youtube.com/watch?v=E9-GAzOzTQs)

# Steps 
1. [Prerequisites](#step-1-prerequisites)
2. [App Configuration](#step-2-app-configuration)
3. [Run the App](#step-3-run-the-app)
4. [Conclusion](#conclusion) 

## Step 1. Prerequisites

First, clone this app: 

```git clone https://github.com/horeaporutiu/Miro-OpenAI-Image-Generator.git```

* Make sure you have a [Miro Account](https://miro.com/signup/).

* Make sure your Miro user account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).

* Make sure you have a Miro Board. 

* Make sure you have an [OpenAI account](https://platform.openai.com/) and an [OpenAI API Key](https://platform.openai.com/account/api-keys). This is used for the image generation. 

## Step 2. App Configuration

#### Create a Miro App

Follow the steps 1-3 in the [Miro Developer documentation](https://developers.miro.com/docs/rest-api-build-your-first-hello-world-app#step-1-create-your-app-in-miro) for creating an app in Miro.
After you've installed the app, make sure you keep your `Access token` handy.

#### Environment Variables

Before you can run the app, you'll need to store some environment variables.

1. Copy `.env.sample` to `.env`

2. Install the Miro App to the team in which you want to use the OpenAI Image Generation. This is shown in [step 3 of the Miro Developer documentation](https://developers.miro.com/docs/rest-api-build-your-first-hello-world-app#step-3-install-the-app). This will give you the Access token needed to use the Miro REST API. Add this to the `MIRO_BEARER_TOKEN` in the `.env` file.

3. Get your Miro Board ID by checking the URL of the board you want to use. Add this to the `MIRO_BOARD_ID`
in the `.env` file. For example, mine is `uXjVMkoJA2o=/` from the image below.

<img width="486" alt="board-id-example" src="https://github.com/horeaporutiu/Miro-OpenAI-Image-Generator/assets/10428517/b6b2fc62-3fc2-4e0a-a968-3c7a5a7954d0">


5. Grab your OpenAI API Key and add it to `OPENAI_API_KEY` in your `.env` file.

> Don't forget to save your `.env` and then run 
```source .env``` to set your env variables. 

#### Install Dependencies

`npm install`

## Step 3. Run the App

`npm start`

You should see something like this:

<img width="504" alt="app-home-page" src="https://github.com/horeaporutiu/Miro-OpenAI-Image-Generator/assets/10428517/fd1b4b9a-dcdb-4dac-bfb4-e9095843d611">

Go ahead and write out a prompt. Once the image is generated, feel free to `Add to Miro` as in the 
[App Demo](https://github.com/horeaporutiu/Miro-OpenAI-Image-Generator#app-demo) above.

## Conclusion

That's it! Now you can use AI to add images to the Miro Board of your choice! For more Miro App examples, 
please go to the [Miro's Developer GitHub](https://github.com/miroapp/app-examples) page.


