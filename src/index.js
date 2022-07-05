import express from "express";
import morgan from "morgan";
import { Server } from "socket.io";
import http from "http";
import routeHome from "./routes/home.js";
import routeProduct from "./routes/productsTest.js";
import routeLogin from "./routes/login.js";
import routeLogout from "./routes/logout.js";
import { connectDB } from "./DB/configDB.js";
import sockets from "./sockets.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer); //implementación de websocket
const PORT = process.env.PORT || 8080; // puerto de conexión
const URI = process.env.URI;
const advanceOptions = { useNewUrlParser: true, useUnifiedTopology: true };

connectDB();
sockets(io);

// views - motores de plantilla
app.set("views", "./src/views");
app.set("view engine", "ejs"); //motor de plantillas EJS

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/public", express.static("public"));
app.use(
  session({
    secret: "logeo",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: `${URI}`,
      mongoOptions: advanceOptions,
      ttl: 60,
    }),
  })
);

//routes
app.use("/", routeHome);
app.use("/api/productos-test", routeProduct);
app.use("/login", routeLogin);
app.use("/logout", routeLogout);

//connection server
try {
  httpServer.listen(PORT);
  console.log(`Server on port ${PORT}...`);
} catch (error) {
  console.log("Error de conexión con el servidor...", error);
}
