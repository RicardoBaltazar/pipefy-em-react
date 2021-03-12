import styled from 'styled-components';

const STATUS = styled.div`
    background-color: #2B0D61;
    height: 3rem;
    width: 3rem;
    box-shadow: 0px 1px 2px #00000029;
    border-radius: 50%;
    color: #fff;
    display: flex;
    align-items:center;
    span {
        font-size: 0.6rem;
        font-weight: bold;
        text-align: center;
        letter-spacing:0px;
    }
`

function Status(props){
    return (
        <STATUS>
            <span>{props.statusText}</span>
        </STATUS>
    )
}

export default Status;