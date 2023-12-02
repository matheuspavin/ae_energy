import Express from "express";
import routes from "./server/routes/Routes.js";




const app = new Express();
const port = 3000;

routes.forEach((route) => {
    const { method, path, handler } = route;
    app[method](path, handler);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

