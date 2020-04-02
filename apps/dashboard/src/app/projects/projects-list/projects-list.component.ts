import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'workshop-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Project[]; // no va a ser un observable como el del componente padre, porque lo vamos a utilizar como campo de entrada (lectura, NO va a mutar)
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  private primaryColor: string = 'red';
  private readonly: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }
}
