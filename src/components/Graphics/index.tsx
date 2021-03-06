import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { forecastCovid } from "covid-forecast";

import { FormEvent, useState } from "react";
import { GraphicsContainer, Infos } from "./style";

export function Graphics() {
  const [n, setN] = useState(0);
  const [d, setD] = useState(0);
  const [x0, setX0] = useState(0);
  const [days, setDays] = useState<number[]>([]);
  const [array, setArray] = useState<number[]>([]);

  const [rend, setRend] = useState(false);

  function handleSend(e: FormEvent) {
    e.preventDefault();

    const arr = [];
    for (let i = 0; i < d; i++) {
      arr.push(i + 1);
      setDays(arr);
    }

    if (n && d && x0) {
      setRend(true);
      setArray(forecastCovid(d, n, x0));
      return;
    }

    return;
  }

  const options = {
    chart: {
      type: "line",
      style: {
        fontFamily: "serif",
        color: "red",
      },
    },
    title: {
      text: "Curva de contágio da COVID-19",
    },
    subtitle: {
      text: "Source: https://github.com/wesleyara",
    },
    xAxis: {
      categories: days,
    },
    yAxis: {
      title: {
        text: "Nº de casos confirmados",
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: true,
      },
    },
    series: [
      {
        name: "Casos no dia",
        data: array,
      },
    ],
  };

  return (
    <>
      <Infos>
        <h3>Testar manualmente</h3>
        <form onSubmit={handleSend}>
          <input
            type="number"
            placeholder="População"
            onChange={(e) => {
              setN(Number(e.target.value));
              setRend(false);
              setArray([]);
            }}
          />
          <input
            type="number"
            placeholder="Dias"
            max={365}
            onChange={(e) => {
              setD(Number(e.target.value));
              setRend(false);
              setArray([]);
            }}
          />
          <input
            type="number"
            placeholder="Casos iniciais"
            max={n}
            onChange={(e) => {
              setX0(Number(e.target.value));
              setRend(false);
              setArray([]);
            }}
          />
          <button type="submit">Testar</button>
        </form>

        {rend === true && (
          <GraphicsContainer>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </GraphicsContainer>
        )}
      </Infos>
    </>
  );
}
