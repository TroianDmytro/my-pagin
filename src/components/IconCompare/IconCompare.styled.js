import styled from 'styled-components';

//стиль кнопки порівняння
export const IconCompareWrapper = styled.div`
    position: absolute;
    right: 2em;
    top:1em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px ;
    height: 40px;
    border-radius:10px ;
    border: 2px solid black;
    background-color:gold;
    &:hover{
        cursor: pointer;
        background-color : violet ;
        border: 2px solid blue;
    }
`;
   
      