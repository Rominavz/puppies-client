
import styles from "../styles/Filters.module.css";

export default function Filters({
    temperaments,
    handleOrdered,
    handleFilterOrigen,
    handleFilterTemperament,
    }) {

    return(
        <div className={styles.filterBox}>
            <select onChange={handleFilterOrigen}>
                <option value='All'>Origen</option>
                <option value='created'>Community</option>
                <option value='api'>Web</option>
            </select>
           
            <select onChange={handleFilterTemperament}>
                <option value='All'>Temperaments</option>
                {temperaments?.map((temperament) => {
                    return (
                    <option key={temperament.id} value={temperament.name}>
                        {temperament.name}
                    </option>
                );
                })}
            </select>

            <select onChange={handleOrdered}>
                <option value=''>Order</option>
                <option value='Asc'>Name Asc.</option>
                <option value='Desc'>Name Desc.</option>
                <option value='Min'>Weight Asc.</option>
                <option value='Max'>Weight Desc.</option>
            </select>
       
        </div>
    );

}