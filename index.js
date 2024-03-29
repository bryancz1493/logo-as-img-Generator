const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = requier('./lib/generateSVG');

const shapes = ['circle', 'traingle', 'square'];

// questions to generate SVG logo
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters: ',
        validate: input.length <=3,
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters: '
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters: '
    },
]