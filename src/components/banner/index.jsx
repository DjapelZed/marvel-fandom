import styles from "./styles.module.scss";
import avengers from "../../resources/img/Avengers.png";
import avengersLogo from "../../resources/img/Avengers logo.png"
const Banner = () => {
    return (
        <section className={styles.banner}>
            <img src={avengers} alt="Avengers"/>
            <h3 className={styles.title}>New comics every week!<br/>
                Stay tuned!</h3>
            <img src={avengersLogo} alt="Avengers Logo"/>
        </section>
    )
}

export {Banner};