import { IData } from "../../types";
import {
  CardItemStyles,
  CardItemTitle,
  CardItemPrice,
  CardOptionList,
  CardOptionItem,
  CardItemInfoButton,
  Span,
} from "./CardItem.styles";
interface Props extends IData {
  toogle: boolean;
}

const CardItem: React.FC<Props> = ({
  name,
  price,
  storage,
  users,
  sendup,
  toogle,
}) => {
  return (
    <CardItemStyles>
      <CardItemTitle>{name}</CardItemTitle>
      <CardItemPrice>
        <Span>$</Span>
        {toogle ? price.annually : price.monthly}
      </CardItemPrice>
      <CardOptionList>
        <CardOptionItem>{storage} GB Storage</CardOptionItem>
        <CardOptionItem>{users} Users Allowed</CardOptionItem>
        <CardOptionItem>Send up to {sendup} GB</CardOptionItem>
      </CardOptionList>
      <CardItemInfoButton>Learn more</CardItemInfoButton>
    </CardItemStyles>
  );
};

export default CardItem;
