
/*********************************************

Program should render Comma Separated Values in below format

//Output

latitude - Floating decimal ranging from -180 to 180    (random floating value with 6 decimal places)
longitude - Floating decimal ranging from -90 to 90     (random floating value with 6 decimal places)
altitude - leave blank or zero
geometry - Point
name - import dockerNames //var dockerNames = require('docker-names'); dockerNames.getRandomName()
details - import loremIpsum //const loremIpsum = require("lorem-ipsum").loremIpsum ; loremIpsum()
Summary - import randomWords -//var randomWords = require('random-words'); randomWords({ exactly: 19, join: ' ' })

latitude,longitude,altitude,geometry,name,details,summary
10.1,125.6,,Point,Dinagat_Islands,details,summary

Inputs - 
//Get the number of lines to output - from cli arguments = process.argv[2] - if not set or undefined or blank ""- set it to 3
//Eg. node ./renderPoints.js 70 //Should render outut file with 70 lines 
/*********************************************/

//Importing Random numbers and letters libraries
var randomWords = require('random-words');
var dockerNames = require('docker-names');
const loremIpsum = require("lorem-ipsum").loremIpsum
let random = require("./randomizer").randomizer();


let outputFile = "point_randomizer.csv";

//Get the number of lines to output 
let numberOfLines = process.argv[2]
if (numberOfLines === undefined || numberOfLines === "" || numberOfLines === null){
    numberOfLines = 5
}
console.log(
    `Starting to process ${numberOfLines} number of lines of geojson points, 
    \nWill Output to file : ${outputFile}`)

//Import for writing back to File System using node
var fs = require('fs');
var stream = fs.createWriteStream(outputFile);

stream.once('open', function(fileDescriptor) {

    console.log("latitude,longitude,altitude,geometry,name,details,summary")
    stream.write("latitude,longitude,altitude,geometry,name,details,summary"+"\n");
        
    for (let i=0; i< 5; i++) {
        let latitude = random({min:-90, max:90, requiredNmberOfDecimals: 8});
        let longitude = random({min:-180, max:180, requiredNmberOfDecimals: 8});
        let altitude = 0;
        let geometry = "Point";
        let name = dockerNames.getRandomName();
        let details = loremIpsum()
        let summary = randomWords({ exactly: 19, join: ' ' })
        
        let line = `${latitude},${longitude},${altitude},${geometry},${name},${details},${summary}`
        console.log(line)
        stream.write(line+"\n");
    }

    //End the write file
    stream.end();
});

