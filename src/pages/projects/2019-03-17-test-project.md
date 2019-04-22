---
templateKey: project-post
featimage: 'https://ucarecdn.com/43f20c3d-8712-4d4f-a1a6-c05a06222989/'
title: Appliance Comparison Program - ¬App (Not App)
github: 'https://github.com/notdev17/NotApp'
date: 2017-12-17T01:20:29.244Z
description: >
  A basic application to compare various home appliances using their energy
  usage and cost.
tags:
  - Java
  - JavaFX
  - H2 in-memory Database
  - Agile Methodology
---
# ¬ App: Appliance Comparison Program

| Team                                           | ¬Dev:                              |                                     |                                     |                                       |
| ---------------------------------------------- | ---------------------------------- | ----------------------------------- | ----------------------------------- | ------------------------------------- |
| [Michelle](https://github.com/michellesuchang) | [Tim](https://github.com/podoodoo) | [Brandon](https://github.com/Ciyon) | [Devon](https://github.com/DevonS3) | [Daylen](https://github.com/flannyan) |

A basic application to compare various home appliances, their energy usage and cost.

Created as a team project to develop our skills in UX and software development. 

This program was created through the use of an [**in-memory H2Database**](http://h2database.com/html/main.html) to facilitate our dataset as well as [**JavaFX**](https://docs.oracle.com/javase/8/javafx/get-started-tutorial/index.html) to create our user-interface.

## Requirements

To run this program, you will need to install the latest version of [Java](https://www.java.com/en/download/)

## Running The Program

To start the program you will need to download the repo. Inside the root directory you will find the `notApp.jar`. Simply double click this and the program will execute.

## Table of Contents

* [Features and Functionality](#features-and-functionality)
  * [Search Page](#search-page)
  * [Comparison Page](#comparison-page)
  * [User Profile Page](#user-profile-page)
* [Development Procedure](#development-procedure)
* [Front-End: JavaFX](#front-end-javafx)
* [Back-End: H2Database](#back-end-h2database)

## Features and Functionality

### Search Page

The Search Page provides basic functionality to search through multiple appliance data sources. 

Namely, [the U.S. Department of Energy's Database](https://www.regulations.doe.gov/certification-data/) and [Energy Star's Certified Product Data Sets](https://www.energystar.gov/productfinder/advanced). Additionally, the user is given the option to apply filters to the DB query for: the Appliance Type, Energy Usage, and Model.

| Filter by Energy Usage | Search by Model |
| ---------------------- | --------------- |
|                        |                 |

![](https://ucarecdn.com/072566c1-07a4-4c16-9e25-a3084aac3a3c/)

|     |
| --- |

![Search by Appliance Model](https://ucarecdn.com/dcaeb249-6aae-42bc-ac46-8b2ec4e7fb44/ "Appliance Model Searching Screenshot")

### Comparison Page

The comparison page displays the appliances selected through the search page. Furthermore, the user is given the option to input the dollar amount that they pay for each kilowatt hour (kWh).

A **use-case** for this specific page would be to estimate the cost of a collection of products that user owns. Another use case would be to compare two different appliances that the user may consider purchasing.

| Use-Case 1                          | Use-Case 2              |
| ----------------------------------- | ----------------------- |
| ![calculate3](./img/calculate3.png) | ![calc](./img/calc.png) |

### User Profile Page

The user page is currently incomplete, although has a functioning favorites page. Which allows users to create a separate list of appliances from the comparison page.

![User Profile in Not App](https://ucarecdn.com/18bd2ab5-1b6e-4b74-8192-4629e22560e4/ "User Profile in Not App")

- - -

## Development Procedure

This was a **Team project** where we had created and designed an application to compare a variety of different appliances and the data that relates to them; such as price, energy cost, name and manufacturer. 

We had **analyzing requirements** as well as created prototypes and mockups through involved UX which had then gone through review through our peers. 

![Agile Prototyping Paperprototype](https://ucarecdn.com/ec85c829-7c91-4959-a1ef-c16c9dd6fe58/ "Agile Prototyping Paperprototype")

![Development Lifecycle](https://raw.githubusercontent.com/notdev17/notDev.us/master/Appliance%20Comparison%20Application%20-%20Not%20Dev.png)

## Front-End: JavaFX

The usage of FXML allowed for our team to quickly develop a non-intimidating, modern looking user-interface. Correspondingly, when working with FXML debugging was relatively painless considering that the syntax is relatable to XML or HTML. 

The **source code for our user-interface** may be accessed through the directory: `\src\fxml\`	

![Editing JavaFX UI](https://ucarecdn.com/fe2a4aef-cf76-4c4b-9859-6939e0f64f50/ "Editing JavaFX UI")



> ##### Example FXML Code:

![Example FXML Code](https://ucarecdn.com/b01561d3-d759-449c-9d88-186981c25711/ "Example FXML Code")

## Back-End: [H2Database](http://h2database.com/html/main.html)

H2Database is a **Java SQL database** to which we had opt'd to configure an in-memory database. More specifically, when the program is initially executed the data is loaded from the CSV files contained within the `./database/` directory. This is accomplished, through the `./src/driver/H2Database.java` which is used to interact with the DB server. This includes, connecting to the server, sending queries, parsing the CSVs and other various SQL and DBMS commands.

![img](./img/db.png)
