/* eslint-disable max-len */
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public listaParques: any = new Array();

  constructor() {
    this.listaParques = [
      // eslint-disable-next-line max-len
      { id: 1, rota:'/trezedemaio', imagem: '../../assets/images/parque-13-de-maio.jpg', titulo: 'Parque 13 de maio', subTitulo: 'Centro - Recife-PE'},

      { id: 1, rota:'trezedemaio', imagem: '../../assets/images/parque-dois-irmaos-recife.jpg', titulo: 'Parque Dois Irmãos', subTitulo: 'Dois Irmãos, Recife - PE'},

      { id: 1, rota:'trezedemaio', imagem: '../../assets/images/parque-da-jaqueira.jpg', titulo: 'Parque da Jaqueira', subTitulo: 'Graças, Recife - PE'},

      { id: 1, rota:'trezedemaio', imagem: '../../assets/images/parque-macaxeira.jpg', titulo: 'Parque da Macaxeira', subTitulo: 'Macaxeira, Recife - PE'},

      { id: 1, rota:'trezedemaio', imagem: '../../assets/images/parque-santana.jpg', titulo: 'Parque Santana', subTitulo: 'Santana, Recife - PE'},

      { id: 1, rota:'trezedemaio', imagem: '../../assets/images/parque-dona-lindu.jpg', titulo: 'Parque Dona Lindu', subTitulo: 'Boa Viagem, Recife - PE'}
    ];
  }



}
