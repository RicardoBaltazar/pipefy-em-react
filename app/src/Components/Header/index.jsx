import styled from 'styled-components';

const HEADER = styled.header`
    width: 100vw;
    height: 4rem;
    background-color: #009CA3;
    box-shadow: 0px 4px 8px #00000029;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 2rem;
    
`

function Header(){
    return (
        <HEADER>
            Lista Rango
        </HEADER>
    )
}

export default Header;