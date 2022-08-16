const express = require("express");
const app = express();
const connectDB = require("./config/connection");
const authRouter = require("./routes/auth");
const eventRouter = require("./routes/routes_event");
const userRouter = require("./routes/user");

// connect with db
connectDB();

// middleware
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/event", eventRouter);
app.use("/api/user", userRouter);



const port = 5000;
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`server started on port ${port}`)
);
