import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateLoader } from "@ngx-translate/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class TranslationService implements TranslateLoader {

  constructor(private http: HttpClient) { }

  getTranslation(lang: string): Observable<any> {
    return this.http.get(environment.apiUrl + 'assets/i18n/' + lang + '.json')
      .pipe(
        map((response: JSON) => {
          return response;
        })
      );
  }   
}