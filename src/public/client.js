// IIFE
;(()=>{
  const socket = new WebSocket(`ws://${window.location.host}/ws`)
  socket.addEventListener('open',()=>{
    socket.send('Hello, Server!!!')   // server로 보내는 message
  })

  socket.addEventListener('message',(event)=>{  // From server (message)
    alert(event.data)
  })
})()