import css from '../../components/statistics/Statistics.module.css';
import PropTypes from "prop-types";

export const Statistics = ({stats, title}) => (
    <section className={css.statistics}>
        { title && <h2 className={css.titles}>{title}</h2>}
        <ul className={css.statList}>
        {stats.map(item => (
      <li className={css.item} key={item.id}>
      <span className={css.label}>{item.label} </span>
      <span className={css.percentage}>{item.percentage}%</span>
        </li>))}
        </ul>
    </section>
)


Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
      ).isRequired,
    title: PropTypes.string,
  }
  