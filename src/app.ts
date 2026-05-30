import express from "express";
import type {Application, Response, Request} from "express";
import userRoute from "./routes/user.route";
import courseRoute from "./routes/course.route";

const app: Application = express();
app.use(express.json());

app.use('/user', userRoute);
app.use('/course', courseRoute);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
})

export default app;