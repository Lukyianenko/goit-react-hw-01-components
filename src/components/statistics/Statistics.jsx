import css from '../../components/statistics/Statistics.module.css';
import {ListOfStatistics} from '../../components/statistics/ListOfStatistics';

export const Statistics = ({stats}) => {
    return (
    <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
        <ListOfStatistics items={stats} />
    </section>
    )
}
