import express from 'express';
const app = express();


app.use(express.static('public'));

app.use(express.urlencoded());

import pagesRouter from './routers/pagesRouter.js';
app.use(pagesRouter);



const PORT = process.env.PORT ?? 8080;

app.listen(PORT, (error) => {  
    if (error) {
        console.log("Error starting the server:", error);
        return;
    }
    console.log("Server is running on port", PORT);
});