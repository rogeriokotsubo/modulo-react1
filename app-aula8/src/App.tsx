import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useListaParcelas } from './hooks/hooks'
import { IVenda } from './models/venda';
import { IParcela } from './models/parcela';

function App() {

  interface IVendas extends Array<IVenda>{};
  interface IParcelas extends Array<IParcela>{};

  const [vendas, setVendas] = useState<IVenda[]>([]);
  const [parcelas, setParcelas] = useState<IParcela[]>([]);

  const [totais, calcular] = useListaParcelas();

  return (
    <div className="App">
      <header className="App-header">
        <p>{`Total de Vendas ${totais.totVenda}`}</p>
        <p>{`Total do Valor das Parcelas ${totais.totParcelas}`}</p>
        <p>Valores Ok? {totais.totOk ? 'Sim' : 'Não'}</p>
      </header>
      <button type='button' onClick={() => calcular(vendas, parcelas)}>Calcular</button>
    </div>
  );

  function addProduto (vendas: IVendas, _produto: string , _preco: number, _quantidade: number){
    const venda = vendas;
    
    venda.push({
      produto: _produto,
      preco: _preco,
      quantidade: _quantidade
    });

    setVendas(venda);
  }

  function addParcela (parcelas: IParcelas, _produto: string , _parcelas: number, _valor: number){
    const parcela = parcelas 
    
    parcela.push({
      produto: _produto,
      parcelas: _parcelas,
      valor: _valor
    });
    setParcelas(parcela);
  }



}


export default App;
