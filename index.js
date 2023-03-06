const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const connectDB = require('./config/db');
require('dotenv').config();

const { errorHandler } = require('./middleware/errorHandlingMiddleware');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is started on port ${port}`);
});
