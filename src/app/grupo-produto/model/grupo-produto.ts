import { Filial } from 'src/app/filial/model/filial';

export class GrupoProduto {
    id: number;
    cdGrupo: string;
    dsGrupo: string;
    stAtivo: boolean;
    filial: Filial;
    constructor(customer) {
        this.id = customer.id;
        this.dsGrupo = customer.dsGrupo;
        this.cdGrupo = customer.cdGrupo;
        this.stAtivo = customer.stAtivo;
        this.filial = customer.filial;
    }
}
