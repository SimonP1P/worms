export class OnlineClient {
  constructor({onMessage=()=>{},onStatus=()=>{}}={}){
    this.onMessage=onMessage;
    this.onStatus=onStatus;
    this.socket=null;
    this.session=JSON.parse(sessionStorage.getItem("worms-online-session")||"null");
    this.reconnectTimer=null;
    this.url=null;
  }

  static defaultUrl(){
    const configured=globalThis.WORMS_WS_URL || new URLSearchParams(location.search).get("server");
    if(configured) return configured;
    if(location.protocol==="https:") return null;
    return "ws://"+location.host;
  }

  connect(url=this.url || OnlineClient.defaultUrl()){
    if(!url){
      this.onStatus("not-configured");
      return false;
    }
    this.url=url;
    this.socket=new WebSocket(url);
    this.socket.onopen=()=>{
      this.onStatus("connected");
      if(this.session)this.send("lobby:reconnect",{code:this.session.code,playerId:this.session.playerId});
    };
    this.socket.onclose=()=>{
      this.onStatus("disconnected");
      if(this.session&&!this.reconnectTimer)this.reconnectTimer=setTimeout(()=>{
        this.reconnectTimer=null;
        this.connect(this.url);
      },3000);
    };
    this.socket.onerror=()=>this.onStatus("error");
    this.socket.onmessage=e=>{try{this.onMessage(JSON.parse(e.data));}catch{}};
    return true;
  }

  send(type,payload={}){
    if(this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type,...payload}));
  }
  rememberSession(code,playerId){this.session={code,playerId};sessionStorage.setItem("worms-online-session",JSON.stringify(this.session));}
  createLobby(){this.send("lobby:create");}
  joinLobby(code){this.send("lobby:join",{code});}
  configure(config){this.send("match:config",config);}
  startMatch(){this.send("match:start");}
  endTurn(){this.send("turn:end");}
  action(action,payload){this.send("action",{action,payload});}
}
