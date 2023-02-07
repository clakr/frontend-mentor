# Frontend Mentor - Order Summary Card solution

This is a solution to the [Order Summary Card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Process](#process)
  - [Built with](#built-with)
  - [Thoughts](#thoughts)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

| ![Mobile](./images/mobile.jpeg) |
|:--:|
|Mobile Screenshot|

| ![Desktop](./images/desktop.jpeg) |
|:--:|
|Desktop Screenshot|

### Links

- Solution URL: [Order Summary Solution](https://github.com/clakr/frontend-mentor/tree/main/order-summary)
- Live Site URL: [https://clakr.github.io/frontend-mentor/order-summary/](https://clakr.github.io/frontend-mentor/order-summary/)

## Process

### Built with

- HTML5
- CSS
  - Variables
- TailwindCSS
  - extending TailwindCSS directives through `@layer`

### Thoughts

Not much challenge layout-wise since the design is consistent all-throughout the screens. 

I wanted to be familiar in extending Tailwind's utility classes, [NFT Preview Card's](https://clakr.github.io/frontend-mentor/nft-preview-card/) challenge additional utility classes is added through `tailwind.config.js` while this challenge leans more on the `input.css` file itself, the only configuration that I have added are extending the colors used in this project found in [`style-guide.md`](./style-guide.md). 

Through the latter approach, you can add multiple properties in a single utility-class, initially, I wanted it to declare in `tailwind.config.js` file first, but I can't find any resource on how to do this approach. If anyone have done this, I'd be thankful if you reach out and point me in the right direction. 

### Useful resources

- [TailwindCSS](https://tailwindcss.com/) - Mobile-first principle and utility classes

## Author

- Curriculum Vitae / Résumé - [Clark Tolosa](https://clakr.vercel.app)
- Frontend Mentor - [@clakr](https://www.frontendmentor.io/profile/clakr)

## Acknowledgments

Thank you, [@slightly-functional](https://www.frontendmentor.io/profile/slightly-functional) for pointing out [this comment](https://www.frontendmentor.io/solutions/order-summary-solution-through-extending-tailwinds-utility-classes-k6e5jUfIks#comment-63e1e10cec666a7bfb597eae) on my solution to instead extend a `background-image` utility class in the `tailwind.config.js`, add it to `main` HTML element together with `bg-no-repeat` & `bg-contain`.