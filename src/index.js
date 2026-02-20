import express from "express";
import urlRouter from "./routes/urlRouter.js";

const app = express();

app.use(express.json());

app.use("/", urlRouter);

app.listen(3000, () => {
    console.log("the server is running on 3000");
});
