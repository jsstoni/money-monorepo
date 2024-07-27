import cors from "cors";
import express, { Application } from "express";

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json({ limit: "1mb" }));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middelware CORS
app.use(cors());
app.options("*", cors());

//server
app.listen(8080, () => console.log("server start por 8080"));
