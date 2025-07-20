import bodyParser from 'body-parser'
import express from 'express'

const app = express();
app.use(express.static("public"))
bodyParser.urlencoded({extended: true})

app.get('/', (req, res) => {
    res.json({ message: "Hello from Express!" });
  });

  app.listen(8000, () => {
    console.log(`Server running on port ${port}`);
  });