import { useState, useMemo, useEffect } from 'react';
import { IVenda } from '../models/venda';
import { IParcela } from '../models/parcela';
import { ITotais } from '../models/totais';

interface IVendas extends Array<IVenda>{}
interface IParcelas extends Array<IParcela>{}

export function useListaParcelas()
{

    const [totais, setTotais] = useState<ITotais>();

    function calcular(vendas: IVendas, parcelas: IParcelas){
        let tVendas = 0;
        let tParcelas = 0;
        for (let i=0; i<vendas.length; i++){
            tVendas = tVendas + vendas[i].preco*vendas[i].quantidade;
        }
        for (let i=0; i<parcelas.length; i++){
            tParcelas = tParcelas + parcelas[i].parcelas*parcelas[i].valor;
        }
        const tOk = tVendas===tParcelas;    
        setTotais({
                totVenda : tVendas,
                totParcelas : tParcelas,
                totOk : tOk
            });
    }

    return [ totais , calcular];

}

