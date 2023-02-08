# Frontend Mentor - Ping Coming Soon Page solution

This is a solution to the [Ping Coming Soon Page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Process](#process)
  - [Built with](#built-with)
  - [Thoughts](#thoughts)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

| ![Mobile](./images/mobile.jpeg) |
|:--:|
|Mobile Screenshot|

| ![Desktop](./images/desktop.jpeg) |
|:--:|
|Desktop Screenshot|

### Links

- Solution URL: [Ping Coming Soon Page Solution](https://github.com/clakr/frontend-mentor/tree/main/ping-coming-soon-page)
- Live Site URL: [https://clakr.github.io/frontend-mentor/ping-coming-soon-page/](https://clakr.github.io/frontend-mentor/ping-coming-soon-page/)

## Process

### Built with

- HTML5
- CSS
  - Variables
- Tailwind
	- `@tailwind` & `@layer`
	- extending utilities 

### Thoughts

Tailwind made the layouts much easier and manipulating styles based on the `hover` and `invalid` states of different elements. Using `peer` & `peer-invalid`, I added utility classes on `<input>` & `<label>` elements based on user input, while using `group` & `group-hover`, it's much easier to add styles on a parent and its child element. 

Just be wary of the subtle layout-shift caused by the floating `<label>` caused by the `invalid` state of the `<input>`; mobile-wise, this is intended based on the design given, what I did was,

```html
<input class="peer" />
<label class="hidden peer-invalid:block">
```
this makes it so that it is `display: none` by default, then `display: block` if the `<input>` is `invalid`, desktop-wise, there's no layout-shift, so what I did was,

```html
<input class="peer" />
<label class="hidden peer-invalid:block sm:block sm:invisible sm:peer-invalid:visible">
```

the `sm: ` modifier detects if screen's `min-width` is `768px`. For screens above `768px`, the `<label>` is present in the page, but with `visibility: hidden`, there's no layout-shift if the `<input>` is found invalid. 

### Useful resources

- [TailwindCSS](https://tailwindcss.com/) - Mobile-first principle and utility classes

## Author

- Curriculum Vitae / Résumé - [Clark Tolosa](https://clakr.vercel.app)
- Frontend Mentor - [@clakr](https://www.frontendmentor.io/profile/clakr)