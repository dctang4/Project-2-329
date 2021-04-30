# Project Overview

![Alt Text](https://i.pinimg.com/originals/e6/f7/10/e6f7108412d3f772f6473cb0f7aa5474.gif)

## Project Links

- [add your github repo link](https://github.com/dctang4/Project-2-329.git)
- [add your deployment link](https://fervent-bose-0456b2.netlify.app/)

## Project Description

<!-- Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality. -->

My project is to create an app based around the manga/anime My Hero Academia. The main page will have a short description of the manga/anime and some of it's main character images and basic info. On another page will be a list of all the characters and a few buttons that can sort/filter out the characters and have a search function. When you slect a character you will be switched to another page with that character info and the option to add the chaqracters to your favorite page. Another page would be you where you can input some info and return back your own personalized Hero/Villian alias along with quirk (super power). A possible post-mvp page would be a travia page based on the characters quirk, alias, and name.  

## API

<!-- Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project.  -->

The api I have chosen provides a array of the characters from the manga/anime My Hero Academia.  The besides the name of the character the api alo provides some basic info that are known about each character.


``` js
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

- [link to wireframes]()
- [link to time-priority matrix](https://www.figma.com/proto/TyTFeka4992fpzpYGDPfqF/Project-2-329-Time-Priority-Matrix?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1)
- [link to react architecture](https://docs.google.com/presentation/d/17NVojexkzh3ptI286mghVwQZl1-8aGWFQIdKW78fHqo/edit?usp=sharing)


### MVP/PostMVP - 5min

<!-- The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.   -->

#### MVP
- Find and use external api .
- Render data on page .
- Allow user to click on character names to find out their basic known info.
- Allow users to add and remove favorite characters
- Allow users to create their own hero/villian alias and quirk.
- A nav bar that with drop down menu in mobile.
- stylize the page that best suits the color scheme of My Hero Academia.
- Create mobile first design.
- Have responsive design for tablet and destop.

#### PostMVP

- Add a trivia page with questions compiled based on the characters' data from the api.

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull | 
| Header | This will render the header and include the nav | 
| Main | This will include the react router and switch |
| Home | This will be the home page |
| Character | This will be where the character list page |
| Info | The page with the selected charcter info |
| FaveHeroes | This will be the page where you can add your favorite heros to |
| MyHero | generate your own hero alias and quirk. |
| Trivia | A post-mvp page with trvia questions about the characters |
| Footer | This will render the footer | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

### MVP

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Finding API | H | 2hrs| 2hrs | 2hrs |
| Testing API | H | 3hrs| 3hrs | 3hrs |
| Filling out README.md | M | 2.5hrs | 2.5hrs | 2.5hrs |
| React Architecture Diagram | M | 1hrs | 1hrs | 1hrs |
| Time-Priority Matrix | M | 1.5hrs | hrs | hrs |
| Wireframes | M | 2hrs | hrs | hrs |
| Create Character List (API data) | H | 3hrs| hrs | hrs |
| Create Character Info Cards (API data) | H | 3hrs | hrs | hrs |
| Adding and removing Fave Heroes | H | 2.5hrs | hrs | hrs |
| Adding Sort/Filter | M | 3hrs| hrs | hrs |
| Adding Search | M | 2hrs| hrs | hrs |
| Generate Hero/Villian alias and quirk | H | 3 hrs | hrs | hrs |
| Creating the Nav | H | 2 hrs | hrs | hrs |
| Styling Mobile First| H | 2 hrs | hrs | hrs |
| Styling Tablet | M | 2 hrs | hrs | hrs |
| Styling Desktop | M | 2 hrs | hrs | hrs |
| Total | H | 36.5hrs| hrs | hrs |

### PostMVP

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create trivia data array | L | 3hrs | hrs | hrs |
| Randomization of the questions and answers | L | 3 hrs | hrs | hrs |
| Create the trvia page | L | 3hrs | hrs | hrs |
| Add some animation | L | 3hrs | hrs | hrs
| Total | L | 12hrs| hrs | hrs |

## Additional Libraries
 <!-- Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.  -->

## Code Snippet

<!-- Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
``` -->