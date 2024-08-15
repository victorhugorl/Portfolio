import { Component } from "@angular/core";

// components
import { HeaderComponent } from "../../components/header/header.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { ServiceSectionComponent } from "../../components/service-section/service-section.component";
import { KnowledgeComponent } from "../../components/knowledge/knowledge.component";
import { ExperiencesComponent } from "../../components/experiences/experiences.component";
import { ProjectsComponent } from "../../components/projects/projects.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    ServiceSectionComponent,
    KnowledgeComponent,
    ExperiencesComponent,
    ProjectsComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}
