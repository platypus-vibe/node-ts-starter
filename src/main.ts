import { createServer } from "http";

const server = createServer();
const PORT = process.env.PORT;


server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})