import { Component, HostListener } from "@angular/core";

import { NgClass } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSidenavModule } from "@angular/material/sidenav";
@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgClass,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  previousScrollPosition = 0;
  isHidden = false;
  background = false;
  isMenuOpen = false;

  @HostListener("window:scroll", ["$event"])
  onScroll(event: Event): void {
    const currentScrollPosition = window.scrollY;

    if (
      currentScrollPosition > this.previousScrollPosition &&
      currentScrollPosition > 100
    ) {
      // Scroll down
      this.isHidden = true;
    } else {
      // Scroll up
      this.isHidden = false;
    }

    if (currentScrollPosition == 0) {
      this.background = false;
    } else {
      this.background = true;
    }

    this.previousScrollPosition = currentScrollPosition;
  }

  menuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
