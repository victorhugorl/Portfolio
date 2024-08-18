import { Component, signal } from "@angular/core";

//Interface
import { IProjects } from "../../interface/IProjects.inteface";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: "assets/img/projects/vfull.png",
      alt: "Projeto Vida FullStack",
      title: "Vida FullStack",
      width: "100px",
      height: "51px",
      description: "",
      links: [
        {
          name: "Conheça o blog",
          href: "https://vidafullstack.com.br",
        },
      ],
    },
  ]);
}
