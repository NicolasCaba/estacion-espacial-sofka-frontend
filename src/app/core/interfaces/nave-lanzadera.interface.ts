import { NaveNoTripulada } from "../classes/nave-no-tripulada.class";
import { NaveTripulada } from "../classes/nave-tripulada.class";

// Interface NaveLanzadera
export interface INaveLanzadera {
  // Methods
  cambiarCarga(carga: NaveNoTripulada | NaveTripulada): void;
  soltarCarga(): void;
}
