const inquirer = require("inquirer");
const generateHtml = require('./util/generateHtml')
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
            name: 'school',
            message: 'Please enter name of school intern is from:',
        },
    ]).then(ans=>{
        const intern = new Intern(ans.name,ans.id,ans.email,ans.school);
        employees.push(intern);
        options();
    })
};



const engineerInfo = ()=>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter engineer name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter engineer employee ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter engineer email address:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter engineer GitHub username:',
        },
    ]).then(ans=>{
        const engineer = new Engineer(ans.name,ans.id,ans.email,ans.github);
        employees.push(engineer);
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
        switch (ans.choices) {
            case 'Add Intern':
                internInfo();
                
                break;
            case 'Add Engineer':
                engineerInfo();

                break;
            case 'Finish Building Team':
                fs.writeFileSync("./util/index.html", generateHtml(employees));
                console.log("File has been written!")

                break;

            default:
                console.log("Thanks for using the team profile creator!");
                break;


        }

    })
};





managerInfo();