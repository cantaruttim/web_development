// it has to be inside the server folder
const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);



db.sequelize.sync().then(() => {

    app.listen(3001, () => {
        console.log('Server is running on port 3001')
    });

})

