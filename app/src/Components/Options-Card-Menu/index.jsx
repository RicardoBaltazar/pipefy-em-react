import styled from 'styled-components';
import Link from 'next/link';

// import img from '../../../public/assets/vegan-restaurant-logo-design_1438-10.png'

const Card = styled.div`
    /* border: 1px solid #800080; */
    width: 367px;
    height: 100px;
    display: flex;
    justify-content: left;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 4px #00000029;
    border-radius: 4px;
    opacity: 1;
    margin: 0 0 2rem 0;
    transition:0.2s;
    &:hover{
        cursor: pointer;
        box-shadow: 0px 4px 6px #00000029;
    }
    @media screen and (max-width: 600px) {      
        width: 90vw;
        margin: 0 0 1rem 0;
    }
    img{
        width: 100px;
        height: 100px;
        border-radius: 4px 0px 0px 4px;
    }
    div {
        text-align: left;
    }
    div p{
        font-size: 0.8rem;
        margin: 0;
        letter-spacing: 0px;
        color: #404040;
    }
    div span{
        color: #009CA3;
        font-weight: bold;
        font-size: 0.6rem;
    }
`

function OptionsCardMenu(props) {
    return (
        <>

            <Card>
                {/* <img src={props.img} alt="iamgems da opção" /> */}
                <div>
                    <h4>{props.optionMenuName}</h4>
                    <p>{props.optionMenuDescripion}</p>
                    <span>{props.optionMenuValue}</span>
                </div>
            </Card>

        </>
    )
};

export default OptionsCardMenu;