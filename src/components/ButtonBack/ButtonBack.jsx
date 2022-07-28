import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'; 

const ButtonBack = () => {
    const navigate = useNavigate();

    async function handleSubmit(e) {
      e.preventDefault();
      navigate(-1);
    }

    return(
        <>
        <Button onSubmit={handleSubmit} type="submit" variant="contained">Назад</Button>
        </>
    );
}
export default ButtonBack;