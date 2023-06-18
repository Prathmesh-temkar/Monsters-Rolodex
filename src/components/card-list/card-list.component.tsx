import { Monster } from "../../App";
import CardContainer from "../card-container/card-container.component";
import "./card-list.styles.css";

type CardListComponentProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListComponentProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardContainer monster={monster} />;
    })}
  </div>
);

export default CardList;
