import { EventEmitter, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class NgTranslateService {
  direction: string = 'ltr';
  rtlLangs: string[] = ['ar', 'arc', 'dv', 'fa', 'ha', 'he', 'khw', 'ks', 'ku', 'ps', 'ur', 'yi']

  dirChange: EventEmitter<string> = new EventEmitter<string>(false);

  constructor(private translate: TranslateService) {
    this.init();
  }

  init() {
    this.translate.addLangs(['en', 'fr', 'ru', 'ar', 'hi']);
    this.translate.setDefaultLang('en');
  }

  getLangs(): string[] {
    return this.translate.getLangs();
  }

  getCurrentLang(): string {
    this.translate.currentLang = 'en';
    return this.translate.currentLang;
  }

  switchLang(lang: string): void {
    this.direction = this.rtlLangs.includes(lang) ? 'rtl' : 'ltr';
    console.info(this.direction);
    this.dirChange.emit(this.direction)
    this.translate.use(lang);
  }
}
