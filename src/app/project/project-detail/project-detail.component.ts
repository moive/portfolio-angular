import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  name_project: string = '';

  constructor(private activatedRoute: ActivatedRoute) {
    let id = '';

    activatedRoute.params.subscribe(({ id: nameProject }) => {
      id = nameProject;
    });

    this.name_project = decodeURI(id);
  }

  ngOnInit(): void {}
}
