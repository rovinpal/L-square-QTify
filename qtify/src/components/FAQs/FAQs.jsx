import styles from "./FAQs.module.css";
import Accordions from "../Accordian/Accordian";


const Faqs = () => {

    return (
        <div className={styles.faqs}>
            <h1>FAQs</h1>

            <Accordions />
        </div>
    );
}

export default Faqs;