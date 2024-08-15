import { Component, signal } from "@angular/core";
import { IMetaImage } from "../../interface/IMetaImage.interface";

@Component({
  selector: "app-knowledge",
  standalone: true,
  imports: [],
  templateUrl: "./knowledge.component.html",
  styleUrl: "./knowledge.component.scss",
})
export class KnowledgeComponent {
  path: string = "assets/icons/knowledge/";
  alias: string = "Ícone de conhecimento de";

  public arrayKnowledge = signal<IMetaImage[]>([
    {
      src: `${this.path}html.svg`,
      alt: `${this.alias} html5`,
    },
    {
      src: `${this.path}css.svg`,
      alt: `${this.alias} css3`,
    },
    {
      src: `${this.path}js.svg`,
      alt: `${this.alias} JavaScript`,
    },
    {
      src: `${this.path}angular.svg`,
      alt: `${this.alias} Angular`,
    },
    {
      src: `${this.path}docker.svg`,
      alt: `${this.alias} Docker`,
    },
    {
      src: `${this.path}dart.svg`,
      alt: `${this.alias} Dart`,
    },
    {
      src: `${this.path}flutter.svg`,
      alt: `${this.alias} Flutter`,
    },
  ]);
}
