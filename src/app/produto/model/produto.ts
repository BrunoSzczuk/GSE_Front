import { Marca } from 'src/app/marca/model/marca';
import { SubGrupoProduto } from 'src/app/sub-grupo-produto/model/sub-grupo-produto';
import { UnidadeMedida } from 'src/app/unidade-medida/model/unidade-medida';

export class Produto {
    id: number;
    cdProduto: string;
    dsProduto: string;
    tpProduto: TipoProduto;
    stAtivo: boolean;
    qtBaseestrutura: number;
    ftConversao: number;
    tpConversao: TipoConversao;
    dtAtualizacao: Date;
    psProduto: number;
    vlIpipauta: number;
    vlPispauta: number;
    vlCofpauta: number;
    nrNcm: string;
    cdSegum: string;
    psBruto: number;
    cdEan: string;
    unidadeMedida: UnidadeMedida;
    marca: Marca;
    subGrupoProduto: SubGrupoProduto;

}

export enum TipoProduto {
    MATERIA_PRIMA, PRODUTO_FINAL
}
export enum TipoConversao {
    MULTIPLICACAO, DIVISAO
}