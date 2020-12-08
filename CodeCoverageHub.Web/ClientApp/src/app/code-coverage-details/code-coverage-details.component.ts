import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from '../shared/project.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-code-coverage-details',
  templateUrl: './code-coverage-details.component.html',
  styleUrls: ['./code-coverage-details.component.css']
})
export class CodeCoverageDetailsComponent implements OnInit {

  project: Project;
  coverageResult$: Observable<string>;
  constructor(private http: HttpClient
            , @Inject('BASE_URL') private baseUrl: string
            , private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.project = window.history.state.data;
    // console.log(this.activeRoute.snapshot);
    // if (this.isProjectDefined()) {
      // this.getCoverageDetails(this.project.coverageFilePath);
      this.getCoverageDetails('');
    // }
  }


  getCoverageDetails(filePath: string) {
    this.coverageResult$ = this.http.get<string>(this.baseUrl + 'api/CodeCoverage/getCoverageDetails');
  }

  isProjectDefined(): boolean {
    if (typeof this.project !== 'undefined') {
      return true;
    } else {
      return false;
    }
  }

}
