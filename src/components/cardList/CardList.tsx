import { IData } from "../../types";
import CardItem from "../cardItem/CardItem";
import { CardListStyle } from "./CardList.styles";

interface Props {
  data: IData[] | null;
  toogle: boolean;
}

const CardList: React.FC<Props> = ({ data, toogle }) => {
  return (
    <CardListStyle>
      {data ? (
        data.map((el) => {
          return <CardItem toogle={toogle} {...el} />;
        })
      ) : (
        <h2>Loading</h2>
      )}
    </CardListStyle>
  );
};

export default CardList;
