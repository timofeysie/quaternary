# quaternary

This is the god project for all the other projects contained in this repository, as well as live samples for some of them.

#
## Current work

Use the [Socius](https://github.com/timofeysie/socius) project in the [Stumosa Pipe]() app consumed in the [Marvel Characters demo](https://stackblitz.com/edit/react-json-fetching-using-fetch-xhthfx).  Seemed like a good idea, but the web components project that aims to provide both round and square buttons over-complicates code that is not really what anyone wants.

What can be usefull would be to combine some micro-interaction work with the kiosk work being done in Electron in the [Gosh project]().

A desperate need also is to put the arbitrary subject backend service to use.  We have the backend side of that in the Calasasaya project.  This is an AWS deployed Serverless app.  However, now that the current role involves Azure, it makes sense to add the service to Strumosa-pipe.

The [items controller](https://github.com/timofeysie/calasasaya/blob/master/controllers/items.controller.js) is the place to start.  It uses the following Curator function:
```
curator.createWikiDataCategoryUrl(lang, cat, wdt, wd);
```

The new feature then was easy to move to this project.  It can be tested live with this url:
```
http://strumosa.azurewebsites.net/items?lang=en&category=fallacies&wdt=P31&wd=Q186150
```

Next, consume the API in a front end project.  The question is, which one?
* Loranthifolia Ionic project.
* A new Ionic React implementation.
* The Gosh Electron project.
* Acapan React/Redux app.



#
# Live Demo Apps

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

## [](https://stackblitz.com/edit/angular-eceqnt)
Some job test I never took.  The notes say it needs to be *a responsive UI that looks as close as the content within pink dotted lines in the attached mock-ups. Use Wikipedia content for text and free stock images for any images.*

## Blanks
[RxJS playground](https://stackblitz.com/edit/rxjs-epf5uf)
[Blank Angular](https://stackblitz.com/edit/angular-zbme4b).
[Unfinished React](https://stackblitz.com/edit/react-json-fetching-using-fetch-tkaqx9).

#
# GitHub projects

## [Viracocha](https://github.com/timofeysie/viracocha)
A list of Wikipedia items using React & Redux.


## [Salicifolia](https://github.com/timofeysie/salicifolia)
a React 16 app that gets a list of items from WikiData and Wikipedia and provides a detail view of these items.  Work in progress includes using a component library built with the Stencil compiler.


# [Acapana](A React app to consume serverless functions on AWS)
 JavaScript Updated 3 days ago

# [Tiahuanaco](https://github.com/timofeysie/tiahuanaco)
This project is a Serverless backend to manage content uploaded to AWS. The front end is Acapana.


## [Calasasaya](https://github.com/timofeysie/calasasaya)
This project is a Serverless deployment of a NodeJS and AWS Lambda application.
add a category parameter to get an arbitrary list from WikiData.


## Curator
Manages art collections
 JavaScript Updated 18 days ago

## Salicifolia
React app to parse WikiData
 JavaScript Updated on 22 May

## Loranthifolia
A WikiData List app with Ionic 4
 TypeScript  4  2 GNU General Public License v3.0 Updated on 22 May

## Tiwanaku
Managing application UI layout state with Angular with Redux
 TypeScript MIT License Updated on 22 May

## Quallasuyu
A multi-framework mono-repo full-stack Java-script project
 TypeScript Updated on 15 May

## Viracocha
A list of Wikipedia items using React & Redux
 JavaScript MIT License Updated on 18 Apr

## Conchifolia
A NodeJS Angular 6 app to use WikiData content
 JavaScript  2 GNU General Public License v3.0 Updated on 12 Apr

## Strumosa-pipe
A NodeJS app with an Azure CI/CD Pipeline.
 JavaScript Other Updated on 28 Mar

## Strumosa
 NodeJS app for deployment on Azure
  JavaScript MIT License Updated on 27 Jan

## [Socius](https://github.com/timofeysie/socius)
A shared component library with micro-interactions which can be used in frontend projects.
Built with Built With Stencil.


## Flabellifolia
Angular Ionic Three.js App
 HTML Updated on 14 Feb

## Brushlands
Artwork collection app
 TypeScript  1 MIT License Updated on 7 Feb

## Teretifolia
React Native app to display data from the WikiData API
 JavaScript GNU General Public License v3.0 Updated on 16 Jan

## Stringybark
Dot and line painting with CSS, JavaScript & SVG
 TypeScript GNU General Public License v3.0 Updated on 29 Oct 2018


## Serene-brushlands
An art collection app
 CSS  1 MIT License Updated on 9 Aug 2018

## Tyno-lrs
A TypeScript NodeJS Learning Record Store
 TypeScript  1 Updated on 30 Jul 2018

## Shibe-cards
A JavaScript exercise
 TypeScript Updated on 20 Jul 2018


## Ulicina
A Stencil Web Component Library
 JavaScript MIT License Updated on 27 Mar 2018


## Rainbow-connection
Server and client for Rapsverry Pi interaction
 JavaScript Updated on 28 Feb 2018


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


Theo
A Node.js backend for Vincent.
 HTML Updated on 26 Jun 2015

Vincent
An app about paintings.
 JavaScript MIT License Updated on 14 Jun 2015

mitch
Mitch the Art Dealer: a game about art.
 JavaScript Apache License 2.0 Updated on 24 Mar 2015

Happiness
Happiness takes practice.
 Java GNU General Public License v2.0 Updated on 14 Mar 2015

FamousCube
This is a Cordova, AngularJS and Famo.us framework hybrid mobile app based on example started by Hina.
 Java  1 Updated on 15 Feb 2015

wherewithal
Vocabulary NFC Card Game Android client
 Java GNU General Public License v3.0 Updated on 24 Jul 2014

indoct
Struts Web App for Natural Language learning using spaced repetition.
 Java GNU General Public License v2.0 Updated on 3 Jul 2014

domartin
Sharable code for wherewithal and friends.
 JavaScript GNU General Public License v2.0 Updated on 26 Mar 2014

catechis
Natural language learning with spaced repetition.
 Java Apache License 2.0 Updated on 3 Feb 2014


OpenLRS
Forked from Apereo-Learning-Analytics-Initiative/OpenLRS
Open source java based Learning Record Store
Groovy  39 Other Updated on 20 Jun 2013
