import { Component, OnInit } from '@angular/core';
import { UserType } from './interfaces/user.interface';
import { ProjectService } from './service/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  users: Array<UserType> = [];

  constructor(private userService: ProjectService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  getImage(id: number) {
    let url = `https://picsum.photos/id/3${id}/1000/600/`;
    return url;
  }
}
