import { Pais } from 'src/app/pais/model/pais';

export class Estado {
    id: number;
    nmEstado: string;
    cdIbge: string;
    sgEstado: string;
    pais: Pais;

    get nmPais(): string {
        console.log('vai retornar alguma coisa');
        return this.pais ? this.pais.nmPais : '';
    }

    set nmPais(value) {
    }
}
