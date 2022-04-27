const inquirer = require("inquirer");
const generateHTML = require('./util/generateHtml')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require("fs");
const employees = [];

const managerInfo = ()=>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter team manager name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter team manager employee ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter team manager email address:',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter team manager office number:',
        },
    ]).then(ans=>{
        const manager = new Manager(ans.name,ans.id,ans.email,ans.officeNumber);
        employees.push(manager);
        options();
    })
};


const internInfo = ()=>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter intern name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter intern employee ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter intern email address:',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter name of school intern is from:',
        },
    ]).then(ans=>{
        const intern = new Intern(ans.name,ans.id,ans.email,ans.school);
        employees.push(intern);
        options();
    })
};




const options = ()=>{
    inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'Please select option:',
            choices: ['Add Intern', 'Add Engineer', 'Finish Building Team']
        }

    ]).then(ans=>{
        switch (ans.selection) {
            case 'Add Intern':
                internInfo();
                options();

                break;
            case 'Add Engineer':
                
        }

    })
};





managerInfo();
// pick up at 1:27 on video