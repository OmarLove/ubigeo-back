import { Injectable } from '@nestjs/common';
import { Ubigeo } from '../model/ubigeo';
import * as path from 'path';
import * as fs from 'fs';
import * as lineReader from 'line-reader';

@Injectable()
export class UbigeoService {
  
  public filePath: string = 'D:\\PRUEBA BELAX\\ubigeo-back\\src\\ubigeo\\ubigeo.txt'; //path.resolve(__dirname, './ubigeo.txt');
 
  constructor(){}

  async getUbigeos(): Promise<Ubigeo[]> {
    let ubigeos: Ubigeo[] = [];
    let file = fs.readFileSync(this.filePath, "utf8");

    let lines: string[] = file.split("\n"); // split the document into lines
    console.log(lines);
    console.log('lines');

    for (let line of lines) {
      ubigeos.push(this.generateUbigeo(line));
    }
    return ubigeos;
  }

  generateUbigeo(item: string): Ubigeo {
    let line: string[] = item.split("/", 3);
      let ubigeo = new Ubigeo();

      if(line[0] != null){
        let splitted: string[] = line[0].trim().split(" ");
        if(splitted.length >= 2){
          ubigeo.codigoDepartamento = splitted[0];
          ubigeo.nombreDepartamento = '';
          for (var i = 1; i < splitted.length; i++) {
            ubigeo.nombreDepartamento = ubigeo.nombreDepartamento + " " + splitted[i].trim();
          }
          ubigeo.tipo = 1;
        }
      }

      if(line[1] != null){
        let splitted: string[] = line[1].trim().split(" ");
        if(splitted.length >= 2){
          ubigeo.codigoProvincia = splitted[0];
          ubigeo.nombreProvincia = '';
          for (var i = 1; i < splitted.length; i++) {
            ubigeo.nombreProvincia = ubigeo.nombreProvincia + " " + splitted[i].trim();
          }
          ubigeo.tipo = 2;
        }
      }
      if(line[2] != null){
        let splitted: string[] = line[2].trim().split(" ");
        if(splitted.length >= 2){
          ubigeo.codigoDistrito = splitted[0];
          ubigeo.nombreDistrito = '';
          for (var i = 1; i < splitted.length; i++) {
            ubigeo.nombreDistrito = ubigeo.nombreDistrito + " " + splitted[i].trim();
          }
          ubigeo.tipo = 3;
        }
      }
      return ubigeo;
  }
}
