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
  selectedLanguage!:string;

  constructor(public translator: NgTranslateService) {
  }
  
  ngOnInit(): void {
    this.languages = this.translator.getLangs();
    this.selectedLanguage = this.translator.getCurrentLang();
    console.log('s', this.languages);      
  }

  onLangChange(lang: string){
    this.selectedLanguage = lang;
  }
}
