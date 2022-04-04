import { forecastCovid } from "covid-forecast";
import Highcharts from "highcharts";
//import { forecastCovid } from "covid-forecast";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import { Container, Divisao } from "./style";

export function Chartist() {
  const [n, setN] = useState(0);
  const [d, setD] = useState(0);
  const [x0, setX0] = useState(0);
  const [days, setDays] = useState<number[]>([]);
  const [array, setArray] = useState<number[]>([]);

  const [rend, setRend] = useState(false);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < d; i++) {
      arr.push(i + 1);
      setDays(arr);
    }
  }, [d]);

  function handleSend() {
    setRend(true);
    setArray(forecastCovid(d, n, x0));
    console.log(days);
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
      <Divisao>
        <input
          type="number"
          placeholder="n"
          onChange={(e) => {
            setN(Number(e.target.value));
            setRend(false);
          }}
        />
        <input
          type="number"
          placeholder="d"
          onChange={(e) => {
            setD(Number(e.target.value));
            setRend(false);
          }}
        />
        <input
          type="number"
          placeholder="x0"
          onChange={(e) => {
            setX0(Number(e.target.value));
            setRend(false);
          }}
        />
        <button type="button" onClick={handleSend}>
          Testar
        </button>
      </Divisao>
      {rend === true && (
        <Container>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Container>
      )}
    </>
  );
}
