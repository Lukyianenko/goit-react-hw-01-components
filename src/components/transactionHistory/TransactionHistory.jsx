import { Table, MainStroke, MainCell, Type, SecondaryStroke, Stroke } from './TransactionHistory.styled';
import PropTypes from "prop-types";

export const TransactionHistory = ({datas}) => (
    <Table>
  <thead>
    <MainStroke>
      <MainCell>Type</MainCell>
      <MainCell>Amount</MainCell>
      <MainCell>Currency</MainCell>
    </MainStroke>
  </thead>
  <tbody>
  {datas.map(({ id, type, amount, currency }) => (
        <Stroke key={id}>
            <Type>{type}</Type>
            <SecondaryStroke>{amount}</SecondaryStroke>
            <SecondaryStroke>{currency}</SecondaryStroke>
        </Stroke>
    ))
  }
  </tbody>
</Table>
   );


   TransactionHistory.propTypes = {
    operations: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
  })
    ).isRequired 
  }