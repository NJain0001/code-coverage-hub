import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  public codeCoverageResult: string;

  /**
   *
   */
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<string>(baseUrl + 'api/CodeCoverage').subscribe(result => {
      this.codeCoverageResult = result;
    }, error => console.error(error));
  }  
}
