import PropTypes from "prop-types";
import { Type, SecondaryStroke, Stroke } from './TransactionHistory.styled';

export const TransactionHistoryOperation = ({operations}) => {
    return(operations.map(({ id, type, amount, currency }) => (
        <Stroke key={id}>
            <Type>{type}</Type>
            <SecondaryStroke>{amount}</SecondaryStroke>
            <SecondaryStroke>{currency}</SecondaryStroke>
        </Stroke>
    ))
    )
}

TransactionHistoryOperation.propTypes = {
    operations: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
  })
    ).isRequired 
  }