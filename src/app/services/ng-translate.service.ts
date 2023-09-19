import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class NgTranslateService {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
  }

  init(){
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
  }

  getLangs(): string[]{
    return this.translate.getLangs();
  }

  getCurrentLang(): string{
    this.translate.currentLang = 'en';
    return this.translate.currentLang;
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }
}
