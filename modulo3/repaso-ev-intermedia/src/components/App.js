import ClubList from './ClubList';
import clubs from '../data/data.json';

function App() {
  return <ClubList clubs={clubs} />;
}

export default App;
