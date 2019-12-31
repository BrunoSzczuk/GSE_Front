import { Empresa } from 'src/app/empresa/model/empresa';

export class Filial {
    id: number;
    cdFilial: string;
    nmRazaoSocial: string;
    nmFantasia: string;
    dsEndereco: string;
    dsBairro: string;
    nrCep: string;
    nrDdd: string;
    nrTelefone: string;
    nrCnpj: string;
    nrIe: string;
    empresa: Empresa;
}