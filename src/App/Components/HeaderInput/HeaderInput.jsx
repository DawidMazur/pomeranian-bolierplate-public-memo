import './style.css';
import { SearchIcon } from '../Icons/SearchIcon';

const HeaderInput = () => {
  return (
    <div class="input-container">

      <SearchIcon />
      <input type="text" placeholder="Search" />

    </div>
  );
};

export default HeaderInput;
