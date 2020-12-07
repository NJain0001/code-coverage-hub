import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Project } from '../shared/project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  public projectList: Project[];
  public coverageResult$: Observable<string>;

  constructor(private http: HttpClient
            , private router: Router
            , @Inject('BASE_URL') private baseUrl: string) {}

  ngOnInit() {
    this.getProjectList();
  }

  getProjectList() {
    this.http.get<Project[]>(this.baseUrl + 'api/CodeCoverage/getProjects').subscribe(result => {
      this.projectList = result;
    }, error => console.error(error));
  }

  navigateToCoverageDetail(project: Project) {
    this.router.navigate(['code-coverage-detail'], { state: { data: project }});
  }

}
