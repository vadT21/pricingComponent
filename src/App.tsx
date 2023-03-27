import { useEffect, useState } from "react";
import styled from "styled-components";
import CardList from "./components/cardList/CardList";
import ToggleButton from "./components/toggleButton/ToggleButton";
import useDataStore from "./store";
import GlobalStyles from "./styles/global";

function App() {
  const [toogle, setToogle] = useState(false);
  const { data, fetchData } = useDataStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const H1 = styled.h1`
    font-size: 32px;
    color: hsl(232, 13%, 33%);
  `;
  return (
    <>
      <H1>Our Pricing</H1>
      <ToggleButton toogle={toogle} setToogle={setToogle} />
      {data ? (
        <CardList data={data.pricing} toogle={toogle} />
      ) : (
        <h3>loading...</h3>
      )}
      <GlobalStyles />
    </>
  );
}

export default App;
