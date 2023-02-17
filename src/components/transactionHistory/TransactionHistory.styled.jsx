import styled from 'styled-components'

export const Table = styled.table`
    width: 900px;
    border: 3px solid black;
    font-size: 36px;
    border-collapse: collapse;
    table-layout: fixed;
    margin-bottom: 15px;
`;

export const MainStroke = styled.tr`
    border: 2px solid black;
    
`;

export const MainCell = styled.th`
    padding: 15px 0px;
    border: 2px solid black;
    background-color: #baffff;
`;

export const SecondaryStroke = styled.td`
    font-size: 26px;
    padding: 5px 0px;
    border: 1px solid black;
    text-align: center;
`;

export const Type = styled.td`
    font-size: 26px;
    padding: 5px 0px;
    border: 1px solid black;
    text-align: center;

    &:first-letter {
        text-transform: uppercase;
    }
`;

export const Stroke = styled.tr`
    &:nth-child(2n) {
  background-color: #c7c6c4;
}
`;