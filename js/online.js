export class OnlineClient {
  constructor({onMessage=()=>{},onStatus=()=>{}}={}){this.onMessage=onMessage;this.onStatus=onStatus;this.socket=null;}
  connect(url=location.protocol==="https:"?"wss://"+location.host:"ws://"+location.host){
    this.socket=new WebSocket(url);
    this.socket.onopen=()=>this.onStatus("connected");
    this.socket.onclose=()=>this.onStatus("disconnected");
    this.socket.onerror=()=>this.onStatus("error");
    this.socket.onmessage=e=>{try{this.onMessage(JSON.parse(e.data));}catch{}};
  }
  send(type,payload={}){if(this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type,...payload}));}
  createLobby(){this.send("lobby:create");}
  joinLobby(code){this.send("lobby:join",{code});}
  configure(config){this.send("match:config",config);}
  startMatch(){this.send("match:start");}
  endTurn(){this.send("turn:end");}
  action(action,payload){this.send("action",{action,payload});}
}
