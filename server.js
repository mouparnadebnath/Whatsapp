import next from 'next';
import { createServer } from "node:http";
import { Server } from "socket.io";
import { connectDB } from './src/app/lib/database.js';
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
  console.log("An user connected",socket.id)

  socket.on("hello", (msg) => {
    console.log("hello:",msg)
  });
  });
  
  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
connectDB()
      console.log(` Ready on http://${hostname}:${port}`);
    });
});