const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const models = require('./items_model');
const repo = require('./repository');
const {userInfo} = require('./fetchUser')

const pdfTemplate = require('./documents');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post('/create-pdf',  (req, res) => {

    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => { //passing getByOne json
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/items', (req,res) => {
    res.send(models.loadItem());
});

////////////////////////

app.get('/', (req, res) => {
    res.send(`
      <form method='POST'>
        <button>Fetch User Information</button>
      </form>
    `)
  })
    
  // Route to fetch particular user 
  // information using id
  app.post('/:id', async (req, res) => {
      
    // Find user from (id:3f2006d22864b8af)  user  is the candidate
    const user = await repo.findById(req.params.id)
    res.send(userInfo(user))


  })
//////////////////////////

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port}`));