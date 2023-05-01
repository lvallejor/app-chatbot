import React, { useState, useEffect } from "react";
import "./styles.css";

function Header() {
  const [financialIndicators, setFinancialIndicators] = useState({});
  // const [weather, setWeather] = useState({});
  console.log(financialIndicators);

  useEffect(() => {
    const fetchData = async () => {
      // Llamada a la api del clima
      /*
      const weatherResponse = await fetch("http://127.0.0.1:8000/clima");
      const weatherData = await weatherResponse.json();
      setWeather(weatherData);
*/
      // Llamada a la api de indicadores financieros
      const financialResponse = await fetch(
        "https://web-production-a4cd.up.railway.app/indicadores/dolar"
      );
      const financialData = await financialResponse.json();
      setFinancialIndicators(financialData);
    };

    fetchData();
  }, []);

  const dolar =
    financialIndicators.value && financialIndicators.value.dolar
      ? financialIndicators.value.dolar.valor.toLocaleString()
      : "";
  const uf =
    financialIndicators.value && financialIndicators.value.uf
      ? financialIndicators.value.uf.valor.toLocaleString()
      : "";
  const bitcoin =
    financialIndicators.value && financialIndicators.value.bitcoin
      ? financialIndicators.value.bitcoin.valor.toLocaleString()
      : "";
  const euro =
    financialIndicators.value && financialIndicators.value.bitcoin
      ? financialIndicators.value.euro.valor.toLocaleString()
      : "";
  const ipc =
    financialIndicators.value && financialIndicators.value.bitcoin
      ? financialIndicators.value.ipc.valor.toLocaleString()
      : "";
  const utm =
    financialIndicators.value && financialIndicators.value.bitcoin
      ? financialIndicators.value.utm.valor.toLocaleString()
      : "";

  return (
    <header>
      <p>
        Dólar: <span className="number">{dolar}</span>
      </p>
      <p>
        UF: <span className="number">{uf}</span>
      </p>
      <p>
        Bitcoin: <span className="number">{bitcoin}</span>
      </p>
      <p>
        EURO: <span className="number">{euro}</span>
      </p>
      <p>
        UTM: <span className="number">{utm}</span>
      </p>
      <p>
        IPC: <span className="number">{ipc}</span>
      </p>
    </header>
  );
}

export default Header;
