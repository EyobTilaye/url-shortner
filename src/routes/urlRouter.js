import { Router } from "express";
import { urlRedirector, urlShortener } from "../controllers/urlController.js";

const urlRouter = Router();

urlRouter.get("/:shorten", urlRedirector);
urlRouter.post("/shortener", urlShortener);

export default urlRouter;
