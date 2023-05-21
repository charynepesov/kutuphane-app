const express = require("express");
const appRouter = require("./routes/routes");


const app = express();
app.use("/", appRouter);

app.listen(5000, () => {
    console.log("Server started at 5000");
});