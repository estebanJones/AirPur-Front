import { MeteoIndicateur } from "src/app/home/main/core/meteoindicateur.model";
import { RelevePolluant } from "src/app/home/main/core/relevePolluant.model";

export class FavorisAffichage {
    dtosMeteoIndicateurs: MeteoIndicateur;
    dtosRelevePolluants: RelevePolluant;

    constructor(params?: any) {
        Object.assign(this, params);
    }
}