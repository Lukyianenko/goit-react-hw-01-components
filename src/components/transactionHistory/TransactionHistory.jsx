import { TransactionHistoryOperation } from '../../components/transactionHistory/TransactionHistoryOperation';
import { Table, MainStroke, MainCell } from './TransactionHistory.styled';

export const TransactionHistory = ({datas}) => {
   return (
    <Table>
  <thead>
    <MainStroke>
      <MainCell>Type</MainCell>
      <MainCell>Amount</MainCell>
      <MainCell>Currency</MainCell>
    </MainStroke>
  </thead>
  <tbody>
    <TransactionHistoryOperation operations={datas}/>
  </tbody>
</Table>
   ) 
}