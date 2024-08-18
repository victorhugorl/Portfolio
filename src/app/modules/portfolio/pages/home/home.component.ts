import { Component } from "@angular/core";

// components
import { HeaderComponent } from "../../components/header/header.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { ServiceSectionComponent } from "../../components/service-section/service-section.component";
import { KnowledgeComponent } from "../../components/knowledge/knowledge.component";
import { ExperiencesComponent } from "../../components/experiences/experiences.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { AboutComponent } from "../../components/about/about.component";
import { ContactComponent } from "../../components/contact/contact.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    ServiceSectionComponent,
    KnowledgeComponent,
    ExperiencesComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}
