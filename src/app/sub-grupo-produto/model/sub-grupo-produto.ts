import { GrupoProduto } from 'src/app/grupo-produto/model/grupo-produto';
import { Filial } from 'src/app/filial/model/filial';

export class SubGrupoProduto {
    id: number;
    cdSubgrupo: string;
    dsSubgrupo: string;
    filial: Filial;
    grupoProduto: GrupoProduto;
}
