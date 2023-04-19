import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listaPraias: any[] = new Array();

  constructor(public toastController: ToastController) {

    this.listaPraias = [
     { id: 1, imagem: 'assets/images/praiaBoaViagem.jpg', titulo: 'Praia de Boa Viagem', subtitulo: 'Recife-PE' },
     { id: 2, imagem: 'assets/images/praiaBoaViagem.jpg', titulo: 'Praia do Pina', subtitulo: 'Recife-PE' },
     { id: 2, imagem: 'assets/images/praiaBoaViagem.jpg', titulo: 'Praia de Porto de Galinhas', subtitulo: 'Cabo de Santo Agostinho'},
    ];


  }

  openSite(url) {
    window.open(url);
  }

  async like() {
    const toast = await this.toastController.create({
      message: 'Obrigado por curtir!.',
      duration: 2000
    });
    toast.present();
  }



}
