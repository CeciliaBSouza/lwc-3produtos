import { LightningElement } from "lwc";

export default class App extends LightningElement {
  cores= new Array();
  motoboneca=true;
  motocri=false;
  comFaixa=true;
  semFaixa=false;
  rosaP=true;
  rosaB=false;

  boneca(){
    this.motoboneca=true;
    this.motocri=false;
  }
  crianca(){
    this.motoboneca=false;
    this.motocri=true;
  }
  comfaixa(){
    this.semFaixa=false;
    this.comFaixa=true;
  }semfaixa(){

    this.comFaixa=false;
    this.semFaixa=true;
  }
  rosabordo(){
    this.rosaP=false;
    this.rosaB=true;
  }rosapink(){

    this.rosaB=false;
    this.rosaP=true;
  }


}
