const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

function createNewTeam() {
  function addNewManager() {
    console.log("Please begin by adding a new Manager...");
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please add Manager name"
        },
        {
          type: "input",
          name: "id",
          message: "Please add Manager id"
        },
        {
          type: "input",
          name: "email",
          message: "Please add Manager email address"
        },
        {
          type: "input",
          name: "number",
          message: "Please add Manager office telephone number"
        }
      ])
      .then(({ name, id, email, number }) => {
        const newManager = new Manager(name, id, email, number);
        console.log(newManager);
        addNewIntern();
      });
  }

  function addNewIntern() {
    console.log("Please insert Intern details...");
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please add Intern name"
        },
        {
          type: "input",
          name: "id",
          message: "Please add Intern id"
        },
        {
          type: "input",
          name: "email",
          message: "Please add Intern email address"
        },
        {
          type: "input",
          name: "school",
          message: "Please add Intern's role"
        }
      ])
      .then(({ name, id, email, school }) => {
        const newIntern = new Intern(name, id, email, school);
        console.log(newIntern);
        addNewEngineer();
      })
      .catch(console.error());
  }

  function addNewEngineer() {
    console.log("Please insert Engineer details...");
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please add Engineer name"
        },
        {
          type: "input",
          name: "id",
          message: "Please add Engineer id"
        },
        {
          type: "input",
          name: "email",
          message: "Please add Engineer email address"
        },
        {
          type: "input",
          name: "github",
          message: "Please add Engineer's github account"
        }
      ])
      .then(({ name, id, email, github }) => {
        const newEngineer = new Engineer(name, id, email, github);
        console.log(newEngineer);
      })
      .catch(console.error());
  }
  addNewManager();
}

createNewTeam();

// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?"
//     },
//     {
//       type: "input",
//       name: "id",
//       message: "What is your employee id?"
//     },
//     {
//       type: "input",
//       name: "email",
//       message: "What is your email address?"
//     },
//     {
//       type: "input",
//       name: "number",
//       message: "What is your office number?"
//     }
//   ])
//   .then(managerAnswers => {
//     console.info("Manager details:", managerAnswers);
//   });
//manager
// var manager = [
//   {
//     type: "input",
//     name: "name",
//     message: "What's your name"
//   },
//   {
//     type: "input",
//     name: "id",
//     message: "What's your work id"
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "What's your email address"
//   },
//   {
//     type: "input",
//     name: "number",
//     message: "What's your office number?"
//   }
// ];

// inquirer.prompt(manager).then(({ name, id, email, officeNumber }) => {
//   const newManager = new Manager(name, id, email, officeNumber);
//   console.log(newManager);
// });

//engineer
// var engineer = [
//   {
//     type: "input",
//     name: "name",
//     message: "What's your name"
//   },
//   {
//     type: "input",
//     name: "id",
//     message: "What's your work id"
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "What's your email address"
//   },
//   {
//     type: "input",
//     name: "github",
//     message: "What's your github username"
//   }
// ];

// inquirer.prompt(engineer).then(({ name, id, email, github }) => {
//   const newEngineer = new Engineer(name, id, email, github);
//   console.log(newEngineer);
// });

//intern
// var intern = [
//   {
//     type: "input",
//     name: "name",
//     message: "What's your name"
//   },
//   {
//     type: "input",
//     name: "id",
//     message: "What's your work id"
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "What's your email address"
//   },
//   {
//     type: "input",
//     name: "github",
//     message: "What school are you attending?"
//   }
// ];

// inquirer.prompt(intern).then(({ name, id, email, school }) => {
//   const newIntern = new Intern(name, id, email, school);
//   console.log(newIntern);
// });

//employee
// var employee = [
//   {
//     type: "input",
//     name: "name",
//     message: "What's your name"
//   },
//   {
//     type: "input",
//     name: "id",
//     message: "What's your work id"
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "What's your email address"
//   },
//   {
//     type: "input",
//     name: "github",
//     message: "What's your role?"
//   }
// ];

// inquirer.prompt(employee).then(({ name, id, email, role }) => {
//   const newEmployee = new Employee(name, id, email, role);
//   console.log(newEmployee);
// });

// addNewManager();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
