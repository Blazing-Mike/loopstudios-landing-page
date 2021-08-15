# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![desktop image](/images/loopstudios-desktop.png)
![mobile image](/images/loopstudios-mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

- I learn how to use positioning better in CSS and when to use each of them like fixed and absolute
- How to change toggle menu onclick

```css
.Navbar__ToggleShow {
  position: absolute;
  display: flex;
  background: var(--black);
  flex-direction: column;
  color: var(--white);
  width: 100%;
  left: 0;
  top: 0;
  padding-top: 200px;
  height: 100vh;
  font-family: "Josefin Sans", sans-serif;
}

.Navbar__link-toggle {
  position: absolute;
  cursor: pointer;
  right: 20px;
  z-index: 5;
  display: inline-block;
}
```

### Continued development

-Javascript

- Interaction and effects in CSS.

### Useful resources

- [HOW TO MAKE ANIMATED MENU ICON](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js) - This helped me MAKE THE ANIMATED MENU ICON to change onclick.

## Author

- Website - [Blazing-mike](https://www.your-site.com)
- Frontend Mentor - [@Blazing-mike](https://www.frontendmentor.io/profile/Blazing-mike)
- Twitter - [@mikeoxygen](https://www.twitter.com/Mikeoxygen1)
