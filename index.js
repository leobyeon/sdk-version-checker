const fs = require('fs');

fs.readdir(process.cwd(), function (err, files) {
  if (err) {
    console.log(err);
    return;
  }
  // loop through files to find CHANGELOG.md
  for (let i = 0; i < files.length; i++) {
    if (files[i] === "CHANGELOG.md") {
        // parse through CHANGELOG to find version
        let fileContents = fs.readFile('CHANGELOG.md', 'utf8', (err, data) => {
            if (err) throw err;
            for (let i = 0; i < data.length; i++)
            console.log(data[i]);
            console.log("every line");
        })
    }
    // if not found, determine which language it is 
    // else if () {

    // };
}});