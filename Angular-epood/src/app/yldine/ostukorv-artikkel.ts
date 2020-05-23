import { Toode } from './toode';

export class OstukorvArtikkel {
    id: string;
    nimi: string;
    pildiUrl: string;
    artikliHind: number;

    kogus: number;

    constructor(toode: Toode) {
        this.id = toode.id;
        this.nimi = toode.nimi;
        this.pildiUrl = toode.pildiUrl;
        this.artikliHind = toode.artikliHind;

        this.kogus = 1;
    }
}
