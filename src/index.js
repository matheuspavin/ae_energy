import Express from "express";
import routes from "./server/routes/Routes.js";
import { errorMiddleware } from "./server/middleware/ErrorMiddleware.js";

const app = new Express();
const port = 3000;

app.use(Express.urlencoded({ extended: true }));

routes.forEach((route) => {
    const { method, path, handler } = route;
    app[method](path, handler);
});

app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

