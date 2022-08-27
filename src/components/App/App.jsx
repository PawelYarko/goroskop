import { Routes , Route, Navigate} from 'react-router-dom';
import Home from '../Home/Home';
import Day from '../Day/Day';
import Night from '../Night/Night';
import Plan from '../Plan/Plan';
import Year from '../Year/Year';
import Birthday from '../Birthday/Birthday';
import GetResult from '../GetResult/GetResult';
import CheckValue from '../CheckValue/CheckValue';

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/day" element={<Day/>}/>
      <Route path="/night" element={<Night/>}/>
      <Route path="/plan" element={<Plan/>}/>
      <Route path="/year" element={<Year/>}/>
      <Route path="/birthday" element={<Birthday/>}/>
      <Route path="/checkvalue" element={<CheckValue/>}/>
      <Route path="/getresult" element={<GetResult/>}/>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
    </>
  );
};
