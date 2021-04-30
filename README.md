# Project Overview

## Project Links

- [add your github repo link](https://github.com/dctang4/Project-2-329.git)
- [add your deployment link](https://fervent-bose-0456b2.netlify.app/)

## Project Description

<!-- Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality. -->

My project is to create an app based around the manga/anime My Hero Academia. The main page will have a short description of the manga/anime and some of it's main character images and basic info. On another page will be a list of all the characters and a few buttons that can sort/filter out the characters and have a search function. A third page would be you where you can input some info and return back your own personalized Hero/Villian alias along with quirk (super power). Another possible page, that I would aim for, is a page with a form that will allow you to check off a few traits that best decribes you and return a My Hero character that best matches the selected traits.  

## API

<!-- Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project.  -->

The api I have chosen provides a array of the characters from the manga/anime My Hero Academia.  The besides the name of the character the api alo provides some basic info that are known about each character.


```
{
        "id": "Uwabami",
        "name": "Uwabami",
        "alias": "Snake Hero: Uwabami",
        "affiliation": null,
        "birthday": "December 9th",
        "bloodtype": "A",
        "description": "Snake Hero: Uwabami (スネークヒーロー ウワバミ, Sunēku Hīrō Uwabami?) is a Pro Hero and a celebrity.",
        "fightstyle": null,
        "gender": "Female",
        "Eye": "Gold",
        "hair": "Blonde",
        "height": "170 cm (5'7)",
        "kanji": null,
        "occupation": "Pro Hero",
        "quirk": "Serpentress",
        "romaji": null,
        "status": "Unknown",
        "teams": null,
        "images": [
          "https://storage.cloud.google.com/my-hero-academia-api/Uwabami-1.jpg",
          "https://storage.cloud.google.com/my-hero-academia-api/Uwabami.jpg"
        ],
        "epithet": null,
        "ages": null,
        "family": null
      },
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()


### MVP/PostMVP - 5min

<!-- The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.   -->

#### MVP
- Find and use external api .
- Render data on page .
- Allow user to click on character names to find out their basic known info.
- Allow users to create their own hero/villian alias and quirk.
- A nav bar that starts on the bottom in mobile mode and moves to the top in bigger formats.
- stylize the page that best suits the color scheme of My Hero Academia.
- Create mobile first design.
- Have responsive design for tablet and destop.

#### PostMVP

- Add a page where you can find out which My Hero character you are.

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull | 
| Header | This will render the header include the nav | 
| Main | This will include the react router and switch |
| Home | This will be the home page |
| Character | This will be where the character list page |
| HeroName | This will be the create your hero name and quirk page |
| MyHero | Possible extra page.  Find out what My Hero Academia character you are |
| Footer | This will render the footer | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Finding API | H | 2hrs| hrs | hrs |
| Testing API | H | 2.5hrs| hrs | hrs |
| Create Character List (API data) | H | 3hrs| hrs | hrs |
| Create Character Info Cards (API data) | H | 3hrs | hrs | hrs |
| Adding Sort/Filter | H | 3hrs| hrs | hrs |
| Adding Search | M | 2hrs| hrs | hrs |
| Generate Hero/Villian alias and quirk | H | 2.5 hrs | hrs | hrs |
| Creating the Nav | H | 2 hrs | hrs | hrs |
| Styling Mobile First| H | 2 hrs | hrs | hrs |
| Styling Tablet | M | 2 hrs | hrs | hrs |
| Styling Desktop | M | 2 hrs | hrs | hrs |
| Total | H | 26hrs| hrs | hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```