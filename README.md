# quaternary

This is a documentation project for all the other projects contained in the timofeysie GitHub, as well as listing live samples for some of them.

The documentation here is a work in progress and far from complete.

## Current work

Since the last commit in this overview project was 6 months ago, which was about last November 2019, there have been a few other projects created.  A big push again into React with a successful technical test.  Continued work in Angular especially using nx.

Six month ago Ionic React had just been release and the Xexenes project has just started.

Dynamic forms, TOH, Caldwell 77, Technical challenge, Khipu, are there any others?  It's hard these days with dependabot merging PRs due to security in dependant libs all by itself so that the last on GitHud is not in the order of last commit anymore.  Those entries look something like this [from Socius](https://github.com/timofeysie/socius/pulls):

Bump acorn from 5.7.3 to 5.7.4 dependencies #5 opened 14 hours ago by dependabot bot

Bump handlebars from 4.0.12 to 4.5.3 dependencies #4 opened on Dec 28, 2019 by dependabot bot

Bump mixin-deep from 1.3.1 to 1.3.2 dependencies #3 opened on Oct 22, 2019 by dependabot bot

## Using Socius with Strumosa Pipe work

During 2019 there was a focus to use the [Socius](https://github.com/timofeysie/socius) project in the [Strumosa Pipe](https://github.com/timofeysie/strumosa-pipe) app consumed in the [Marvel Characters demo](https://stackblitz.com/edit/react-json-fetching-using-fetch-xhthfx).  Seemed like a good idea, but the web components project that aims to provide both round and square buttons over-complicates code that is not really what anyone wants.

What can be useful would be to combine some micro-interaction work with the kiosk work being done in Electron in the [Gosh project](https://github.com/timofeysie/gosh).

A desperate need also is to put the arbitrary subject backend service to use.  We have the backend side of that in the Calasasaya project.  This is an AWS deployed Serverless app.  However, now that the current role involves Azure, it makes sense to add the service to Strumosa-pipe.

The [items controller](https://github.com/timofeysie/calasasaya/blob/master/controllers/items.controller.js) is the place to start.  It uses the following Curator function:

```js
curator.createWikiDataCategoryUrl(lang, cat, wdt, wd);
```

The new feature then was easy to move to this project.  It can be tested live with [this url](http://strumosa.azurewebsites.net/items?lang=en&category=fallacies&wdt=P31&wd=Q186150)

Next, consume the API in a front end project.  The question is, which one?

* Loranthifolia Ionic Angular project.
* A new Ionic React implementation.
* The Gosh Electron project.
* Acapana React/Redux app.

The choice made was the second.  A shiny new Ionic React app.  Ionic was actually my start with front end development.  After doing Java/Tomcat, then native Android work, Ionic provided me a bridge from mobile development to the front end.

The only question now is what is the name of the shiny new project?  Tea? Gwion?  Xexenes? (a small mosquitos).  I like it!  [Xexenes](https://github.com/timofeysie/xexenes) it is~

Then the need to create an example app to demonstrate theming, especially in an Ionic app.  The next name on the list was Emperor Don Carlos, and thus it was born at the beginning of October and has taken up all the dev work since then.  Xexenes would have been a better choice to receive the theming, but since it is based on the bleeding edge Ionic/React, it might not also be the place to push the edge again with dynamic theming.

[Emperor Don Carlos](https://github.com/timofeysie/emperor-don-carlos) has made some strides, but still needs some layout fixes, as well as adding the border option, and then saving a new theme in a file which can be set as the default of the app.  This work *could* be done as part of using the API, so that is the goal right now.

So how far back did we have an Angular client using the API?  Conchifolia is the vanilla Angular app.  Loranthifolia is the Ionic version.  Tiwanaku is another Angular choice, which uses Redux via NgRx.  That last one seems the most attractive right now, as it ties in with expanding the Redux skills.  That project hasn't been touched since May.  Let's dust it off a bit.

Turns out there *was* some theming work done on this project a few months ago, so it's perfectly placed for what we want to be doing right now.  At that time when I was working in North Sydney, I had to lead a team creating a form which would be used by various other companies to create translation jobs.  They wanted a dynamically themed form that eventually was based on a configuration file and deployed individually.

Tiwanaku sports a very nice Chacana theme, given it's name and proximity to Lake Titicaca, the center of the universe, it's a great project to be working on.  It has a favicon and an options page.  The main app has a list/detail view that uses state management.  Time to add a form on the options page to let the user change the category.  Then we need a new page to choose between these categories.  It's lots of work but the power of the Chacana will drive it forward!

Create issue No.9 to create a form to input a new category.  Time to look at forms with Redux options.

*ngrx-forms* brings the strengths of the redux state management model to the world of forms in applications that are using Angular and ngrx.

This [Medium post] titled *Writing Redux-aware Angular forms with ngrx*

1. Part 1 (which is touching the setup and integration with FormControl).
2. Part 2 (how to handle data in the forms that comes from server-side).
3. Part 3 (using FormArrays).
4. Part 4 (integrating server-side business validation errors in the form)
5. Something else.

That's a lot to be getting into.  I hope this is worth it.

## To Do

### Themes

Sliders and variables for things other than colors:
https://googlechrome.github.io/samples/css-custom-properties/

A theme service [along the lines of this](https://angularfirebase.com/lessons/css-variables-in-ionic-4/#Theme-Generator-Service) is an easy way to go.

Next, create the service and install the Color lib for tinting and other theming utils.

```bash
ng g service core/services/theme
npm i color
npm install @types/color
```

The service works out of the box pretty quickly.  Loads with the correct theme when set in the constructor.
Usage with specific:

```css
.container > .box {
    background-color: var(--ion-color-light-tint);
}
```

A style guid markup would look something like this:

```html
<button ion-button color="light">color-light</button>
  <button ion-button class="light-rgb">light-rgb</button>
  <button ion-button class="light-contrast">light-contrast</button>
  <button ion-button class="contrast-rgb">light-contrast-rgb</button>
  <button ion-button class="light-shade">light-shade</button>
  <button ion-button class="light-tint">light-tint</button>   
```

Supported by some css variables:

```css
    .light { color: var(--ion-color-light) }
    .light-rgb { color: var(--ion-color-light-rbg) }
    .light-contrast { color: var(--ion-color-light-contrast) }
    .light-contrast-rgb { color: var(--ion-color-light-contrast-rgb) }
    .light-shade { color: var(--ion-color-light-shade) }
    .light-tint { color: var(--ion-color-light-tint) }
```

#

## Live Demo Apps

## [Sonic Health Care test](https://stackblitz.com/edit/angular-7n4cob)

Created from a Bootstrap 4 documentation StackBlitz starter using Angular 7.  Data used for the doctors list comes from some [Marvel Characters API](https://developer.marvel.com/docs) results and are safe for non-commercial use.  Other content came from Wikipedia.

## [Playing Cards Demo](https://stackblitz.com/edit/angular-pdfqal)

In-person test for the P&O software company.  Display a deck of palying cards including shuffle, pick and remove jokers functionality.  Took one hour while sitting next to the lead dev.

## [React Myra demo](https://stackblitz.com/edit/react-material-ui-menu-68g9vj)

Just a single wallaby picture and settings menu using React 16.1.1 and material-ui 0.20.0.

## [How are you feeling?](https://stackblitz.com/edit/angular-basic-starter-fkhtuv)

Slider/svg smiley face mood rating app using Angular 7.0.4.

## [A React Redux ToDo app](https://stackblitz.com/edit/react-redux-app-svgdz1)

Only actions, components, containers and reducers.

## [angular-eceqnt](https://stackblitz.com/edit/angular-eceqnt)

Some job test I never took.  The notes say it needs to be *a responsive UI that looks as close as the content within pink dotted lines in the attached mock-ups. Use Wikipedia content for text and free stock images for any images.*

## Blanks

[RxJS playground](https://stackblitz.com/edit/rxjs-epf5uf)

[Blank Angular](https://stackblitz.com/edit/angular-zbme4b).

[Unfinished React](https://stackblitz.com/edit/react-json-fetching-using-fetch-tkaqx9).

#

## GitHub projects

## [Clades](#https://github.com/timofeysie/clades)

Code from the GitBook *Enterprise Angular applications with NgRx and Nx* implemented using Angular 9 and paying attention to unit testing.

## [Xexenes](https://github.com/timofeysie?tab=repositories)

An Ionic React app using WikiData as the source of truth.

## [Viracocha](https://github.com/timofeysie/viracocha)

A list of Wikipedia items using React & Redux.

## [Salicifolia](https://github.com/timofeysie/salicifolia)

A React 16 app that gets a list of items from WikiData and Wikipedia and provides a detail view of these items.  Work in progress includes using a component library built with the Stencil compiler.

## [Acapana](https://github.com/timofeysie/acapana)

A React app to consume serverless functions on AWS.

## [Tiahuanaco](https://github.com/timofeysie/tiahuanaco)

This project is a Serverless backend to manage content uploaded to AWS. The front end is Acapana.

## [Calasasaya](https://github.com/timofeysie/calasasaya)

This project is a Serverless deployment of a NodeJS and AWS Lambda application.
add a category parameter to get an arbitrary list from WikiData.

## [Curator](https://github.com/timofeysie/curator)

A function library begun as a tool to manage art collections.  Now it supports the WikiData parsing apps.

## [Loranthifolia](https://github.com/timofeysie/loranthifolia)

A WikiData List app with Ionic 4
 TypeScript  4  2 GNU General Public License v3.0 Updated on 22 May

## Tiwanaku

Managing application UI layout state with Angular with Redux
 TypeScript MIT License Updated on 22 May

## Quallasuyu

A multi-framework mono-repo full-stack Java-script project using Nrwl/nx.

TypeScript Updated on 15 May

## Viracocha

A list of Wikipedia items using React & Redux

JavaScript MIT License Updated on 18 Apr

## Conchifolia

A NodeJS Angular 6 app to use WikiData content.

 JavaScript  2 GNU General Public License v3.0 Updated on 12 Apr 2019.

## Strumosa-pipe

A NodeJS app with an Azure CI/CD Pipeline.

 JavaScript Other Updated on 28 Mar 2019.

## Strumosa

 NodeJS app for deployment on Azure.

  JavaScript MIT License Updated on 27 Jan 2019.

## [Socius](https://github.com/timofeysie/socius)

A shared component library with micro-interactions which can be used in frontend projects.

Built with Built With Stencil.

## Flabellifolia

Angular Ionic Three.js App with some great 3D and GS animations.

 HTML Updated on 14 Feb.

## Brushlands

Artwork collection app.

 TypeScript  1 MIT License Updated on 7 Feb 2019.

## Teretifolia

React Native app to display data from the WikiData API.

 JavaScript GNU General Public License v3.0 Updated on 16 Jan 2019.

## Stringybark

Dot and line painting with CSS, JavaScript & SVG.

 TypeScript GNU General Public License v3.0 Updated on 29 Oct 2018

## Serene-brushlands

An art collection app.

 CSS  1 MIT License Updated on 9 Aug 2018.

## Tyno-lrs

A TypeScript NodeJS Learning Record Store.

 TypeScript  1 Updated on 30 Jul 2018.

## Shibe-cards

A JavaScript exercise.

 TypeScript Updated on 20 Jul 2018.

## Ulicina

A Stencil Web Component Library.

 JavaScript MIT License Updated on 27 Mar 2018.

## Rainbow-connection

Server and client for Raspberry Pi interaction.

 JavaScript Updated on 28 Feb 2018.

## [Sulcata](https://github.com/timofeysie/sulcata)

Demo project to consume a Stencil web component.

 TypeScript Updated on 6 Feb 2018

## Heat-wave

Ionic super starter demo app

 TypeScript  1  1 Other Updated on 25 Sep 2017

## Needlebush-client

A role-based authentication app with Passport In Ionic.

 TypeScript Updated on 1 Nov 2016

## Acknowledge

Random Code

 Java  1 Updated on 29 Oct 2016

## Theo

A Node.js backend for Vincent.

 HTML Updated on 26 Jun 2015

## Vincent

An app about paintings.

 JavaScript MIT License Updated on 14 Jun 2015

## mitch

Mitch the Art Dealer: a game about art.

 JavaScript Apache License 2.0 Updated on 24 Mar 2015

## Happiness

Happiness takes practice.

 Java GNU General Public License v2.0 Updated on 14 Mar 2015

## FamousCube

This is a Cordova, AngularJS and Famo.us framework hybrid mobile app based on example started by Hina.

 Java  1 Updated on 15 Feb 2015

## wherewithal

Vocabulary NFC Card Game Android client

 Java GNU General Public License v3.0 Updated on 24 Jul 2014

## indoct

Struts Web App for Natural Language learning using spaced repetition.

 Java GNU General Public License v2.0 Updated on 3 Jul 2014

## domartin

Sharable code for wherewithal and friends.

 JavaScript GNU General Public License v2.0 Updated on 26 Mar 2014

## catechis

Natural language learning with spaced repetition.

 Java Apache License 2.0 Updated on 3 Feb 2014

## OpenLRS

Forked from Apereo-Learning-Analytics-Initiative/OpenLRS
Open source java based Learning Record Store
Groovy  39 Other Updated on 20 Jun 2013
