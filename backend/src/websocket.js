const socketio = require('socket.io')

const calculateDistance = require('./utils/calculateDistance')

let io
const connections = []

exports.setupWebsocket = (server) => {
  io = socketio(server)

  io.on('connection', socket => {
    const { latitude, longitude, techs } = socket.handshake.query

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude)
      },
      techs: techs.split(',').map(tech => tech.trim())
    })
  })
}

exports.findConnection = (coordinates, techs) => {
  return connections.filter(connection => {
    return calculateDistance(coordinates, connection.coordinates) < 10
      && connection.techs.some(tech => techs.includes(tech))
  })
}

exports.sendMessage = (to, message, data) =>{
  to.forEach(connection => {
    io.to(connection.id).emit(message, data)
  })
}
