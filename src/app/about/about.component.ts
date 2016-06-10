import {Component} from '@angular/core';
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";

@Component({
  selector: 'about',
  styles: [`
    .about {
      margin: 10px;
    }
  `],
  template: `
    <div class="about">
      <md-card>
        <md-card-content> About the PWA app</md-card-content>
        <md-card-content> Created by Shidhin</md-card-content>
      </md-card>
    </div>
  `,
  directives: [MD_CARD_DIRECTIVES]
})
export class AboutComponent {
}
