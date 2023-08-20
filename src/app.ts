// environment variables
import dotenv from "dotenv";
dotenv.config();

import express, { Express, Request, Response } from "express";

// third party modules
import cors from "cors";
import helmet from "helmet";

// import routes
import { api } from "./routes";

// app
const app: Express = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// routes
app.use("/api", api);

app.get("/", (req: Request, res: Response) => {
	res.sendStatus(200);
});

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
