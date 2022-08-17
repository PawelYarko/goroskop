import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'; 

const ButtonBack = ({ to }) => {
  const navigate = useNavigate();
  const onGoBackButtonClick = e => {
    navigate(to);
  };

  return (
    <>
      <Button onSubmit={onGoBackButtonClick} type="submit" variant="contained">Назад</Button>
    </>
  );
}
export default ButtonBack;