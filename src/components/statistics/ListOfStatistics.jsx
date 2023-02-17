import css from '../../components/statistics/Statistics.module.css';
import PropTypes from "prop-types";

export const ListOfStatistics = ({items}) => {
    return (<ul className={css.statList}>
    {items.map(item => (
      <li className={css.item} key={item.id}>
      <span className={css.label}>{item.label} </span>
      <span className={css.percentage}>{item.percentage}%</span>
    </li>))}
    </ul>
    );
}

ListOfStatistics.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
})
  ).isRequired 
}
