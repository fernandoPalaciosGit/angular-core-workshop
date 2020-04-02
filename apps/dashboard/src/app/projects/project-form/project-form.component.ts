import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'workshop-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Input() project: Project;
  @Output() saved = new EventEmitter();
  @Output() reset = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
