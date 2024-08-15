import { Component, signal } from "@angular/core";
import { IExperiences } from "../../interface/IExperiences.interface";

@Component({
  selector: "app-experiences",
  standalone: true,
  imports: [],
  templateUrl: "./experiences.component.html",
  styleUrl: "./experiences.component.scss",
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvedor Open-source",
        p: "OKBR | Jul 2024 - Present",
      },
      text: '<p>Desde Julho de 2024, atuo como voluntário no projeto <a href="https://ok.org.br/projetos/querido-diario/" >Querido Diário</a> como Desenvolvedor Open-Source.<br>Minhas principais atividades eram traduzir documentações e imagens para o inglês.',
    },
  ]);
}
