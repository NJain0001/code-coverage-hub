import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}

  ngOnInit() {
    this.getProjectList();
  }

  getProjectList() {
    this.http.get<Project[]>(this.baseUrl + 'api/CodeCoverage/getProjects').subscribe(result => {
      this.projectList = result;
    }, error => console.error(error));
  }

  getCoverageDetails(filePath: string) {
    this.coverageResult$ = this.http.get<string>(this.baseUrl + 'api/CodeCoverage/getCoverageDetails');
  }

}
