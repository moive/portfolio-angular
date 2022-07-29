import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserType } from '../interfaces/user.interface';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  name_project: string = '';
  item: Partial<UserType> = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) {
    let id = '';
    let name = '';

    activatedRoute.params.subscribe(({ name: nameProject, id: idProject }) => {
      name = nameProject;
      id = idProject;
    });

    this.name_project = decodeURI(id);
    this.projectService.getProject(id).subscribe((data: any) => {
      this.item = data;
    });
  }

  ngOnInit(): void {}

  goProject() {
    this.router.navigate(['/project']);
  }
}
