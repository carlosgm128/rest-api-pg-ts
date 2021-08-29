import express from "express";
import routes from './routes/user.routes'
import morgan from 'morgan';
import cors from 'cors';
//app condig
const app = express();
const corsConfig = {
    origin: '*'
}
app.use(cors(corsConfig))
//app middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
//routes
app.use(routes)
app.listen(3000, () => {
    console.log('app runing on port 3000')
})