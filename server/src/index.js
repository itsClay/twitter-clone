import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const PORT = process.env.PORT || 3000;

// applies middleware
app.use(bodyParser.json());

app.listen(PORT, err => {
  if(err) {
    console.error(err);
  } else {
    console.log(`app listen on port: ${PORT}`);
  }
});
