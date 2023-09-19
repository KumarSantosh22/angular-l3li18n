import { Component, OnInit } from '@angular/core';
import { NgTranslateService } from './services/ng-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-l3li18n';
  languages: string[] = [];

  constructor(public translator: NgTranslateService) {
  }

  ngOnInit(): void {
      this.languages = this.translator.getLangs();
      console.log('s', this.languages);      
  }
}
