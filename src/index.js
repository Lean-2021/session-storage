import express from "express";
import morgan from "morgan";
import { Server } from "socket.io";
import http from "http";
import routeHome from "./routes/home.js";
import routeProduct from "./routes/productsTest.js";
import { connectDB } from "./DB/configDB.js";
import sockets from "./sockets.js";
const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer); //implementación de websocket
const PORT = process.env.PORT || 8080; // puerto de conexión

connectDB();
sockets(io);

// views - motores de plantilla
app.set("views", "./src/views");
app.set("view engine", "ejs"); //motor de plantillas EJS

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static("public"));

//routes
app.use("/", routeHome);
app.use("/api/productos-test", routeProduct);

//connection server
try {
  httpServer.listen(PORT);
  console.log(`Server on port ${PORT}...`);
} catch (error) {
  console.log("Error de conexión con el servidor...", error);
}
