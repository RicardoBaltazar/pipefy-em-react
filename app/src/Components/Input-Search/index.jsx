import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const Form = styled.form`
    display: flex;
    align-items:center;
    @media screen and (max-width: 900px) {      
        width: 75vw;
    }
    @media screen and (max-width: 600px) {      
        width: 90vw;
    }
`

const Search = styled.input`
    width: 50vw;
    height: 2.5rem;
    color: #404040;
    background-color:#FBFBFB;
    box-shadow:  0px 2px 4px #00000029;
    border-radius:2rem 0 0 2rem;
    outline: 0;
    border: none;
    padding: 0 2rem;
    ::-webkit-input-placeholder {
        font-size: 1rem;
        font-weight: bold;
    }
    @media screen and (max-width: 900px) {      
        width: 100%;
    }
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items:center;
    height: 2.5rem;
    background-color:#FBFBFB;
    outline: 0;
    padding:0 0.5rem;
    border-radius: 0 2rem 2rem 0;
    box-shadow:  0px 2px 0px #00000029;
    cursor: pointer;
    border: none;
`

function InputSearch() {
    return (
        <>
            <Form action="">
                <Search type="text" placeholder='Buscar estabelecimento' name="" id="" />
                <Button type="submit">
                    <SearchIcon />
                </Button>
            </Form>
        </>
    )
};

export default InputSearch;