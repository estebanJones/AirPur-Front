import { Departement } from "./departement.model";
import { MeteoIndicateur } from "./meteoindicateur.model";

export class Commune {
    public nomCummune: string;
    public codeInseeCommune: string;
    public populationTotaleCommune: number;
    public departementCommune: Departement;
    public meteoIndicateurs: MeteoIndicateur[];
}