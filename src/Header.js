import React, { useState, useEffect } from "react";

function Header() {
  const [financialIndicators, setFinancialIndicators] = useState({});
  // const [weather, setWeather] = useState({});

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
        "http://127.0.0.1:8000/indicadores/dolar"
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

  return (
    <header>
      <p>Dólar: {dolar}</p>
      <p>UF: {uf} </p>
      <p>Bitcoin: {bitcoin}</p>
    </header>
  );
}

export default Header;
