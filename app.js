import { userRoute } from './routes/user.routes.js';
import express from 'express';
import cors from 'cors';

const app = express()
const port = 3000

var corsOptions = {
    origin: "*",
};
  
app.use(cors(corsOptions));
app.use(cors())
app.use(express.json());
app.use('/api/user', userRoute)

app.get('/', async (req, res) => {
    res.send({message: "R6Stats back-end"})
})
  
  
app.listen(port, () => {
console.log(`Listening at http://localhost:${port}`)
})