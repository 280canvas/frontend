
export function createConnection(addProgram: any) {
  const ws = new WebSocket("wss:/platform.280canvas.com/stream");

  ws.onmessage = function (event) {
    if (event.data !== 'heartbeat') {
      console.log(event.data);
      addProgram(JSON.parse(JSON.parse(event.data).program));
    }
  };
}
