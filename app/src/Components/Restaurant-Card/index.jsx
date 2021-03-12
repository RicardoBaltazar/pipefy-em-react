import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid purple;
    width: 367px;
    height: 100px;
    display: flex;
    justify-content: left;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 4px #00000029;
    border-radius: 4px;
    opacity: 1;
    @media screen and (max-width: 600px) {      
        width: 90vw;
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
`

function RestaurantCard() {
    return (
        <>
            <Card>
                <img src="" alt="logotipo do restaurante" />
                <div>
                    <h4>restaurante name</h4>
                    <p>restaurant address</p>
                </div>
            </Card>
        </>
    )
};

export default RestaurantCard;