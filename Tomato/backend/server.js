import express from 'express'
import cors from 'cors '



// app config
const app = express();
const PORT = 4000;


//middlewares
app.use(express.json())
