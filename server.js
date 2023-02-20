// express, http, socket.io 모듈 불러오기
const express = require('express');
const http = require('http');
const app = express();

// 서버 인스턴스 생성
const server = http.createServer(app);

// cors 설정
const io = require('socket.io')(server, {
cors: {
origin: '*',
methods: ['GET', 'POST'],
},
});

// 포트 설정
const port = 4002;

// 소켓 연결 처리
io.on('connection', socket => {
console.log('user connections: ', socket.id);
socket.on('send message', item => {
const msg = item.name + ' : ' + item.message;
console.log(msg);
io.emit('receive message', { name: item.name, message: item.message });
});
socket.on('disconnect', function () {
console.log('user disconnected: ', socket.id);
});
});

// 서버 시작
server.listen(port, () => console.log(Listening on port ${port}));