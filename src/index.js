import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { handleServices } from './services/HandleServices';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.listen(5000, () => {
    console.log("Server runing on port 5000...");
    setInterval(() => {
        handleServices.exec();
    }, 600 * 1000);
});

module.exports = app;