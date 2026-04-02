import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer class="app-footer"><span>&copy; {{ year }} Bank of America Corporation. For internal use only.</span></footer>`,
  styles: [`.app-footer { background: #333; color: #aaa; padding: 12px 24px; text-align: center; font-size: 12px; }`]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
