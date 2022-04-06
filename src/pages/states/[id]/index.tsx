import { Header } from "../../../layout/Header";
import { Container, Infos } from "../../../styles/home/style";

import { forecastCovid } from "covid-forecast";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState, FormEvent } from "react";
import { GraphicsContainer } from "../../../components/Graphics/style";
import { useRouter } from "next/router";
import { useStates } from "../../../hooks/useStates";

interface ProjecaoTypes {
  populacao: number;
}

interface DataTypes {
  localidade: string;
  horario: string;
  projecao: ProjecaoTypes;
}

export default function States() {
  const [n, setN] = useState<DataTypes>();
  const [d, setD] = useState(0);
  const [x0, setX0] = useState(0);
  const [days, setDays] = useState<number[]>([]);
  const [array, setArray] = useState<number[]>([]);
  const [population, setPopulation] = useState(0);

  const [rend, setRend] = useState(false);

  const { states } = useStates();

  const router = useRouter();
  const id = router.query.id;
  const IBGE_API = `https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/${id}`;

  useEffect(() => {
    async function fecthAPI() {
      const response = await fetch(IBGE_API);
      const data = await response.json();
      setN(data);
    }

    fecthAPI();
  }, [IBGE_API]);

  useEffect(() => {
    if (n && n.projecao) {
      setPopulation(n.projecao.populacao);
      setRend(false);
    }
  }, [n]);

  useEffect(() => {
    if (d) {
      const arr = [];
      for (let i = 0; i < d; i++) {
        arr.push(i + 1);
        setDays(arr);
      }
    }
  }, [d]);

  function handleSend(e: FormEvent) {
    e.preventDefault();

    if (n && d && x0) {
      setRend(true);
      setArray(forecastCovid(d, population, x0));
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
      text: `Curva de contágio da COVID-19 no(a) ${states}`,
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
      <Container>
        <Header />
        <Infos>
          <h3>{states}</h3>
          <form onSubmit={handleSend}>
            <input
              type="text"
              value={population.toLocaleString().replace(",", ".")}
              disabled
            />
            <input
              type="number"
              placeholder="Dias"
              max={365}
              onChange={(e) => {
                setD(Number(e.target.value));
                setRend(false);
              }}
            />
            <input
              type="number"
              placeholder="Casos iniciais"
              max={population}
              onChange={(e) => {
                setX0(Number(e.target.value));
                setRend(false);
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
      </Container>
    </>
  );
}
