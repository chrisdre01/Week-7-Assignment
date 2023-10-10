import { lazy } from 'react';
import React from 'react';

const sheet = file.SheetNames  // Here the value of the sheets will be 1

// Requiring the module 
const reader = require('xlsx') 
  
// Reading our test file 
const file = reader.readFile('./MoviesDataset.xlsx') 
  
let data = [] 
  
const sheets = file.SheetNames 
  
for(let i = 0; i < sheets.length; i++) 
{ 
   const temp = reader.utils.sheet_to_json( 
        file.Sheets[file.SheetNames[i]]) 
   temp.forEach((res) => { 
      data.push(res) 
   }) 
} 

function Read() {
    return (
        <>
            <h3>Movie Database</h3>
        </>
    )
}
  export default Read;
  
// Printing data 
console.log(data)