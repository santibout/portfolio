import React from 'react';
import omnifood from "../static/omnifood.png";
import lightsout from "../static/Lights-Out.png";
import cccaa from "../static/cccaa.PNG";

const projectData = [
    {
        link: 'https://santibout.github.io/displayProjectDavid_client/',
        title: 'CCCAA Form',
        image: cccaa,
        alt: 'omnifood',
        description: "This is a sample of a project consisting of taking a hard copy form and converting it to an online platform which then takes the data submitted and creates and emails out a pdf.", 
        disclaimer: "This is only a display version and does not reflect the final project.This is to show some of my capabilities as a developer focusing on some 3rd party library to create, fill, send pdf's as well as send emails. In the future I do plan on modifying the form as to add form validation and to change the address fields to better enhance address validation."
    },
    {
        link: 'https://santibout.github.io/omnifood/',
        title: 'Omnifood',
        image: omnifood,
        alt: 'omnifood Logo',
        description: 'Omnifood is a meal delivery service that services cities all around the world. Omnifood ships ingredients directly to your door so you can prepare healthy meals every week for you and your family.',
        disclaimer: 'Omni food to my knowledge, does not exist. This is only a display project. This is to showcase some of my capabilities as a developer focusing on my html and css skills. Currently there is no backend attached to this project.'
    },
    {
        link: 'https://santibout.github.io/lights-out/',
        title: 'Lights Out',
        image: lightsout,
        alt: 'Lights Out Logo',
        description: "The game consists of a 5 by 5 grid of lights. When the game starts, a random number or a stored pattern of these lights is switched on. Pressing any of the lights will toggle it and the four adjacent lights. The goal of the puzzle is to switch all the lights off, preferably in as few button presses as possible.",
        disclaimer: "In the future I do plan on making this application mobile friendly"
    }
];

export default projectData;