export class AudioManager {
  constructor(){this.ctx=null;this.master=null;this.musicTimer=null;this.storage=globalThis.localStorage;let enabled="on",volume="0.12";try{enabled=this.storage?.getItem("worms-audio")||"on";volume=this.storage?.getItem("worms-volume")||"0.12";}catch{}this.enabled=enabled!=="off";this.volume=Number(volume)||0.12;}
  ensure(){if(!this.enabled)return null;if(!this.ctx){this.ctx=new AudioContext();this.master=this.ctx.createGain();this.master.gain.value=this.volume;this.master.connect(this.ctx.destination);}if(this.ctx.state==="suspended")this.ctx.resume();return this.ctx;}
  setEnabled(enabled){this.enabled=enabled;try{this.storage?.setItem("worms-audio",enabled?"on":"off");}catch{}if(enabled)this.ensure();else this.stopMusic();}
  setVolume(value){this.volume=Math.max(0,Math.min(1,Number(value)));try{this.storage?.setItem("worms-volume",String(this.volume));}catch{}if(this.master)this.master.gain.value=this.volume;}
  tone(freq,duration,type="sine",gain=.08){const c=this.ensure();if(!c)return;const o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(gain,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+duration);o.connect(g).connect(this.master);o.start();o.stop(c.currentTime+duration);}
  play(name){const sounds={shoot:[150,.08,"square"],hit:[90,.12,"sawtooth"],explosion:[55,.28,"sawtooth"],death:[70,.35,"triangle"],turn:[300,.12,"sine"],win:[520,.5,"sine"],click:[420,.05,"sine"]};const s=sounds[name];if(s)this.tone(...s);}
  startMusic(){if(this.musicTimer||!this.ensure())return;let i=0;const notes=[220,277,330,277];this.musicTimer=setInterval(()=>{if(!this.enabled)return;this.tone(notes[i++%notes.length],.18,"triangle",.025);},650);}
  stopMusic(){if(this.musicTimer){clearInterval(this.musicTimer);this.musicTimer=null;}}
}
