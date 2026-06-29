// Function that creates a cookiecutter project folder. This uses the hard-coded
// variables: FolderLocation and subfolders, specified below.
//
// Inputs:   ProjName = name of the new project
// Outputs:  ProjPath = Path to project folder
//
// C.W. Davies-Jenkins, Johns Hopkins Medicine, 2023


// EDIT: Folder Location is the path to the top-level directory for your projects:
const FolderLocation = '/Path/To/Project/Folder';

// EDIT: subfolders lays out the sub-directory structure of your cookiecutter:
const subfolders = ['code', 'docs', 'data', 'results'];
const subfolders = ['code', 'docs', 'data', 'results', 'tests', 'libraries'];


const fs = require('fs').promises;
const path = require('path');

async function CookieCutter(ProjName, ProjSummary) {
    const ProjPath = FolderLocation + ProjName;

    try {
          await fs.access(ProjPath);
          console.log('Project directory already exists! Not created.');
          return;
        } catch (err) {
        }

    try {
        // Construct project directory
        await fs.mkdir(ProjPath);
    
        for (const subfolderName of subfolders) {
          const subfolderPath = path.join(ProjPath, subfolderName);
          await fs.mkdir(subfolderPath);
        }
    
        console.log('Subfolders created successfully.');
      } catch (err) {
        console.error('Error creating subfolders:', err);
      }
      
      // Create the README file with specified content
      const readmePath = path.join(ProjPath, 'README.txt')
      const Header = '# Project summary:\n'
      ProjSummary = Header + ProjSummary;
      await fs.writeFile(readmePath, ProjSummary);

      return ProjPath;
}

module.exports = CookieCutter