// 1) Create a function that checks if a received folder name exists in the root directory.

// 2) Create a simple HTTP GET server that reads user data from data.json and returns it to the client. Ensure that data.json is present before reading the data.

// 3) Add a new route that returns a random number between 1 and 100 at /random.

// 4) Add a new route that returns a simple HTML table at /html.

// 5) Add a new route that returns the current time in ISO format at /current-time.

// 6) Add a new route that returns an array of objects, such as users, animals, posts, etc., at /api.


const fs = require("fs/promises")
const express= require('express')
const path = require = ("path")

const app = express()

function folderExists(folderName){
    const folderPath = path.join(__dirname,folderName)
    return fs.existsSunc(folderPath) && fs.lstatSync(folderPath).isDirectory()
}


app.get('/data', async(req,res)=>{
    const data = await fs.readFile("data.json","utf-8")
    res.json(JSON.parse(data))
})

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.json({ randomNumber });
  });
  

  app.get('/html', (req, res) => {
    const htmlContent = `
      <html>
        <body>
          <table border="1">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ani</td>
              </tr>
              <tr>
                <td>2</td>
                <td> levani</td>
              </tr>
            </tbody>
          </table>
        
        </body>
      </html>
    `;
    res.send(htmlContent);
  });
  
  app.get('/current-time', (req, res) => {
    const currentTime = new Date().toISOString();
    res.json({ currentTime });
  });
  

  const users = [
    { id: 1, name: 'lasha' },
    { id: 2, name: 'giorgi' }
  ];
  
  app.get('/api', (req, res) => {
    res.json(users);
  });
  

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });