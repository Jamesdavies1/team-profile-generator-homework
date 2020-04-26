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
  const createdEmployees = [];

  function appNavigation() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message: "Would you like to add another employee?",
          choices: ["Engineer", "Intern", "No, I am finished"]
        }
      ])
      .then(({ choice }) => {
        const choiceMapping = {
          Engineer: addNewEngineer,
          Intern: addNewIntern,
          "No, I am finished": () => {
            const generatedHtml = render(createdEmployees);
            fs.writeFileSync(outputPath, generatedHtml);
          }
        };

        choiceMapping[choice]();
      });
  }
  function addNewManager() {
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
        createdEmployees.push(newManager);
        appNavigation();
      });
  }

  function addNewIntern() {
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
          message: "Please add the Intern's school"
        }
      ])
      .then(({ name, id, email, school }) => {
        const newIntern = new Intern(name, id, email, school);
        createdEmployees.push(newIntern);
        appNavigation();
      })
      .catch(console.error());
  }

  function addNewEngineer() {
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
        createdEmployees.push(newEngineer);
        appNavigation();
      })
      .catch(console.error());
  }
  addNewManager();
}

createNewTeam();
