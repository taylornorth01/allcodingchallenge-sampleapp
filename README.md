# Allstate UU Coding Challenge - Sample App

![AllState](./img/9A9F5914-64CC-4660-AA17-EFC157196FC8_1_105_c.jpeg)

## Welcome to the Allstate Coding Challenge

### Problem Statement

An IT company with over 10,000 employees has asked your consultancy firm for help with finding actionable insights in a recent employee study. Since the start of the Covid-19 pandemic they have asked a select group of employees to provide a weekly diary of exercise, home video call, sleep and work times. The task is to create a dashboard to highlight certain changes that could be contributing to poor mental health. Your firm will develop a range of metrics and recommendations for the study group employees. This will help the IT company inform future internal mental health policies. The company has asked that you use React to create this application and have provided you with a dataset from the study.  Your firm will present a demo of the application at the end of the Hackathon.

## Prerequisites
You should have been provided with the "Get ready guide!" before the session.  You can also
download it from here.  If you have any issues, check the troubleshooting guide or ask for
help in the slack channel.  Please ensure you have the following:

1.  GitHub account (you will also need Git installed on your machine)
2.  Docker (Docker Desktop)
3.  Visual Studio Code

## Getting Started

#### Fork the project repo (repository)
Once logged into your GitHub account, fork this repo by clicking the "Fork" button at the top
right of the page. This will create a copy of the repo on _your_ Github account.

#### Clone the project repo
You can now clone the repo in your Github account which you have just forked. This will allow
you to work on a personal copy of the code.  The terminal command to clone the repo will be
something like this:

```
git clone git@github.com:{YOUR-GITHUB-USERNAME}/allcodingchallenge-sampleapp.git
```

#### Browse to project folder
```
cd allcodingchallenge-sampleapp
```

#### Start the demo application

```
docker-compose up
```

**Notes:**

1.  Docker will pull all the required images to run the app
2.  The first time the images are pulled from DockerHub can take several minutes, please
be patient
3.  A database will be created and populated with sample data
4.  Flask and other requirements will be installed. See [requirements.txt](./server/requirements.txt)
5.  The application will be running at [http://localhost:8080](http://localhost:8080)
6.  If you have MySQL running locally, you may need to stop or kill it as the docker image
uses the default port (see [Troubleshooting guide](./Troubleshooting.md))

#### Stop the application
 
 To cleanly stop the application, either stop it in the Docker Desktop UI, or open a second
 terminal, navigate to the root project folder (allcodingchallenge-sampleapp), and run the
 command:

 ```
docker-compose down
 ```
