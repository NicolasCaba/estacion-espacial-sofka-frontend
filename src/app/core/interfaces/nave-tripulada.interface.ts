import { Astronauta } from "../classes/astronauta.class";

// Interface NaveTripulada
export interface INaveTripulada {
  // Methods
  subirAstronauta(astronauta: Astronauta): void;
  bajarAstronauta(astronauta: Astronauta): boolean;
}
