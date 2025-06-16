import style from "./Card.module.css";
import { Tipo_Card } from "./constant";

const Card = (props) => {
    const { tipo = Tipo_Card.PRIMARIO, ...outrasProps } = props;
    return (
        <div className={style.Card} tipo={tipo} {...outrasProps}>
            
        </div>
    )
}

export { Card };