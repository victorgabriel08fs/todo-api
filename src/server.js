import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.listen(process.env.PORT, () => {
    console.log("Server runing on port " + process.env.PORT + "...");
    setInterval(() => {
    }, process.env.HANDLE_INTERVAL * 1000);
})