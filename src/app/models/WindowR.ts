import {Injectable} from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
@Injectable()
export class WindowRef {
  constructor() {}

  getNativeWindow() {
    return window;
  }
}
