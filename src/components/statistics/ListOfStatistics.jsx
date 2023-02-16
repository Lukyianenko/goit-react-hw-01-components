import css from '../../components/statistics/Statistics.module.css';

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

