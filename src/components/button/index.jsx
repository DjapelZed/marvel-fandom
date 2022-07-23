import styles from "./styles.module.scss";

const Button = ({title, onClick=() => {}, href="", secondary=false, long=false}) => {
    const classSecondary = secondary ? styles.secondary : "";
    const classLong = long ? styles.long : "";
    const classNames = `${styles.button} ${classSecondary} ${classLong}`;
    const onClickWrapper = () => {
        if (href) {
            window.open(href, '_blank').focus();
        }
        onClick()
    }
    return <button onClick={onClickWrapper} className={classNames}>{title}</button>
}

export {Button};