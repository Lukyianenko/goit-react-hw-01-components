import css from '../../components/statistics/Statistics.module.css';
import {ListOfStatistics} from '../../components/statistics/ListOfStatistics';
import PropTypes from "prop-types";

export const Statistics = ({stats, title}) => {
    if(title) {
        return (
            <section className={css.statistics}>
                <h2 className={css.titles}>{title}</h2>
                    <ListOfStatistics items={stats} />
            </section>
            )
    }
    return (
        <section className={css.statistics}>
            <ListOfStatistics items={stats} />
        </section>
        )
}


Statistics.propTypes = {
    title: PropTypes.string,
  }
  