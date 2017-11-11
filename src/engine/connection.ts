
export function createConnection() {
  const ws = new WebSocket("ws:/localhost:8000/stream");

  ws.onmessage = function (event) {
    console.log(event.data);
  };
}
