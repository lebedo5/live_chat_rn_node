const { Server } = require("socket.io");

const io = new Server({
    cors: ''
});

io.on("connection", (socket) => {
    // ...
});

io.listen(4000);
