import { useEffect, useState } from "react";
import { Container } from "./style";
import { useRouter } from "next/router";
import { useStates } from "../../hooks/useStates";

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
  return (
    <Container>
      <input type="text" placeholder="Pesquise um estado" />

      <ul>
        <li onClick={() => router.push("/")}>Testar manualmente</li>
        {data.map((item) => {
          return (
            <li
              onClick={() => {
                setStates(item.name);
                router.push(`/states/${item.uf}`);
              }}
              key={item.id}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
