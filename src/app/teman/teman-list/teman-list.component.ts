import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Teman} from '../teman.model';

@Component({
  selector: 'app-teman-list',
  templateUrl: './teman-list.component.html',
  styleUrls: ['./teman-list.component.css']
})
export class TemanListComponent implements OnInit {

  @Input() temanParent: Teman[];
  @Output() dariChildParent: EventEmitter<Teman> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  showname(idx:number) {
    this.dariChildParent.emit(this.temanParent[idx]);
  }

}
