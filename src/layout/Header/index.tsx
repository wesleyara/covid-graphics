import { useEffect, useState } from "react";
import { Container } from "./style";
import { useRouter } from "next/router";
import { useStates } from "../../hooks/useStates";

import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuMotion } from "react-icons/cg";

interface DataTypes {
  id: string;
  name: string;
  uf: string;
}

const STATES_API = process.env.NEXT_PUBLIC_STATES_API as string;

export function Header() {
  const [data, setData] = useState<DataTypes[]>([]);

  const { setStates } = useStates();

  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(STATES_API);
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  const [active, setActive] = useState(false);

  function handleActive() {
    setActive(!active);
  }

  return (
    <Container className={active ? "active" : ""}>
      <nav className={active ? "active" : ""}>
        <button className="btnMenu" onClick={handleActive}>
          {!active ? <GiHamburgerMenu /> : <CgMenuMotion />}
        </button>
        <ul>
          <li className="search">
            <input type="text" placeholder="Pesquise um estado" />
          </li>
          <li
            onClick={() => {
              setActive(!active);
              router.push("/");
            }}
          >
            Testar manualmente
          </li>
          {data.map((item) => {
            return (
              <li
                onClick={() => {
                  setStates(item.name);
                  setActive(!active);
                  router.push(`/states/${item.uf}`);
                }}
                key={item.id}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
}
