import { Estado } from 'src/app/estado/model/estado';

export class Municipio {
    id: number;
    nmMunicipio: string;
    qtPopulacao: number;
    cdUfibge: string;
    estado: Estado;
}