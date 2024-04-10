const express = require("express");
const connectDB = require("./database/Db.js");
const userRouter = require("./router/userRouter.js");
const cors = require("cors");
const app = express();
const PORT = 7000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRouter);

// app.get("/", (req, res) => {
//   res.send("Server Started");
// });

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error connecting to mongodb database ${error.message}`);
  }
};
startServer();
