const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
const http = require("http").createServer(app);
const itemService = require("./services/item.service");

if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.resolve(__dirname, "public"))
  );
} else {
  const corsOptions = {
    origin: [
      "http://127.0.0.1:8080",
      "http://localhost:8080",
      "http://127.0.0.1:3000",
      "http://localhost:3000",
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

app.get("/api/item", (req, res) => {
  const { category, isSetPage } = req.query;

  itemService
    .getItems(category, isSetPage)
    .then((items) => {
      res.send(items);
    });
});

app.listen(3030, () =>
  console.log("Server listening on port 3030")
);
