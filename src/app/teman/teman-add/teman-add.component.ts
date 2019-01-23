import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { Teman } from '../teman.model';
import {TemanservService} from '../temanserv.service';


@Component({
  selector: 'app-teman-add',
  templateUrl: './teman-add.component.html',
  styleUrls: ['./teman-add.component.css'],
  providers: [TemanservService]
})
export class TemanAddComponent implements OnInit {

  @ViewChild('inputContact') inputContact: ElementRef;

  @Input() temandiEdit = Teman;
  @Output() temanAdded = new EventEmitter<Teman>();



  inputInfo = new Teman();
  constructor(private temanservService: TemanservService) { }

  tambahTeman(inputNama: HTMLInputElement) {
    console.log(this.inputInfo);
    console.log(inputNama.value);
    console.log(this.inputContact.nativeElement.value);
    this.temanAdded.emit(this.temanservService.convertTeman(this.inputInfo));
    this.inputInfo = new Teman();
  }

  ngOnInit() {
  }
}
