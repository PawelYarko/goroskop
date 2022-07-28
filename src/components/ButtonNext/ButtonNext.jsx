import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const ButtonNext = () => {
    const navigate = useNavigate();

    async function handleSubmit(e) {
      e.preventDefault();
      navigate(1);
    }
    return(
        <>
        <Button onSubmit={handleSubmit} type="submit" variant="contained">Далее</Button>
        </>
    );
}
export default ButtonNext;