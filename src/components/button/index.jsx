import styles from "./styles.module.scss";

const Button = ({title, onClick=() => {}, secondary=false, long=false}) => {
    const style = `${styles.button} ${secondary ? styles.secondary : ""} ${long ? styles.long : ""}`;
    return <button onClick={onClick} className={style}>{title}</button>
}

export {Button};