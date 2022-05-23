// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


export default function getExpenses(req,res){
  let agrupation = 4;
  let concept= 0;
  var array = [];
  let categoriesArray = [];
  let brandsArray =[];

  // https://docs.google.com/spreadsheets/d/1CMfYFGhXhIBEMO-Ob9CZucRujqTdkRSIkD7hM-xaYew/edit?usp=sharing
  // https://docs.google.com/spreadsheets/d/e/2PACX-1vQFnMi5Y3MTnyCuJdjlm2ezQXysLIQ7-ivf_oGK8T5xSCkd9qW8tUqQUf3lF4x-Mz5vY1OEY7TAbqgt/pubhtml
  
  // https://sheets.googleapis.com/v4/spreadsheets/1fY6EL6Ng9bQ3r2NEaVdasrAFEQBuUOWrZTXEHyjkhis/values/MASTER?alt=json&key=AIzaSyDOWFfaM8hhMIdzJb_vp4RUh3Ls4_AN10g

  fetch('https://sheets.googleapis.com/v4/spreadsheets/1fY6EL6Ng9bQ3r2NEaVdasrAFEQBuUOWrZTXEHyjkhis/values/MASTER?alt=json&key=AIzaSyDOWFfaM8hhMIdzJb_vp4RUh3Ls4_AN10g')

     .then(response => response.json())

     .then(data => {
           
           for (var i = 3; i < data.values.length; i++) {
        array.push({
          "tipo":                data.values[i][0],
          "marca":               data.values[i][2],
              "producto":           data.values[i][1],
              "presentacion":         data.values[i][5],
              "precioBulto":        data.values[i][7],
              // "precioBulto":          data.values[i][7],
              "precioUnidad":         data.values[i][9],
              "precioFraccion":         data.values[i][11],
              "precioOferta":            data.values[i][16]
        });
         
            categoriesArray.push(data.values[i][0]);
            brandsArray.push(data.values[i][2])
           }
           
        res.send(JSON.stringify([
           array, 
           categoriesArray.filter((v, i, a) => a.indexOf(v) === i),
           brandsArray.filter((v, i, a) => a.indexOf(v) === i),
        ]))
     })

}
