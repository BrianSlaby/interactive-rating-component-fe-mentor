# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [https://github.com/BrianSlaby/interactive-rating-component-fe-mentor](https://github.com/BrianSlaby/interactive-rating-component-fe-mentor)
- Live Site URL: [https://fascinating-conkies-93ced0.netlify.app/](https://fascinating-conkies-93ced0.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I thought I would crank this project out in a few hours, and I wanted to build it using React because it's been a couple of months since I've really worked in React.  I underestimated how much React I'd forgotten!  I just learned React this past summer as part of the Frontend Developer Career Path on [Scrimba](https://scrimba.com/).  Having that break, and then realizing what I'd forgotten turned out to be useful.  I took the opportunity to give myself a refresher, and review lessons from the course, some of which were really basic but it was helpful to have them drilled into my head again.

Once everything came together and I was updating this README, I decided to deploy the project so that I could link it here.  I hadn't originally planned on deploying to Netlify because this is such a small project, but it turned out there was an important lesson to learn there, too.  The images on the deployed site were broken!  Through a combination of using the browser dev tools and Google, it didn't take me long to realize that an easy fix would be to move my assets into the public folder of the Vite/React project, and change all the src attributes in the img tags to match.  And it worked!  
