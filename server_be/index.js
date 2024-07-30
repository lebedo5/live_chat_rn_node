const express = require('express');
const cors = require('cors');

const app = express();
const mongoose = require('mongoose');
const { createServer } = require('http');
const { Server } = require('socket.io');

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:8081',
    },
});

io.on('connection', socket => {
    console.log('a user connected');

    socket.on('send_message', data => {
        console.log('received message in server side', data);
        io.emit('received_message', data);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

httpServer.listen(4000);

const userRoute = require('./Routers/userRoute');
const chatRoute = require('./Routers/chatRoute');
const messageRoute = require('./Routers/messageRoute');

app.use(express.json());
require('dotenv').config();

app.use(cors());

app.use('/api/users', userRoute);
app.use('/api/chats', chatRoute);
app.use('/api/messages', messageRoute);

// CRUD
app.get('/', (req, res) => {
    res.send('Welcome our chat app APIs..');
});
const port = 3000;
const uri = process.env.ATLAS_URI;

app.listen(port, (res, req) => {
    console.log(`Server running on port 3000 ...: ${port}`);
});
//connect mongodb
mongoose
    .connect(uri)
    .then(() => console.log('MongoDB connection'))
    .catch(error => console.log('MongoDB connection failed', error.message));
