import { Injectable } from '@angular/core';
import {Teman} from './teman.model';

@Injectable({
  providedIn: 'root'
})
export class TemanservService {

  constructor() { }
  convertTeman(temanInfo: Teman): Teman {
    temanInfo.nama = temanInfo.nama.toUpperCase();
    return temanInfo;
  }
}
