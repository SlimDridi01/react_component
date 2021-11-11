import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';

const App = () => {
  return (
    <div>
      <FullName />
      <Adress />
      <ProfilePhoto />

    </div>
  );
}

export default App;
