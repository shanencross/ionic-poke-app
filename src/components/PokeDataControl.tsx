import PokeDataDisplay from "./PokeDataDisplay";
import PokeSearchBar from "./PokeSearchBar"
import { useState } from 'React';

interface PokeDataControlProps { }

const [searchInput, setSearchInput] = useState<string | null>(null);

const handleSearchChange = (searchInput: string) => {
  setSearchInput(searchInput);
}

const PokeDataControl: React.FC<PokeDataControlProps> = () => {
  return (
    <div className="PokeDataControl">
      <PokeSearchBar onSearchChange={handleSearchChange}/>
      <PokeDataDisplay/>
    </div>
  );
};

export default PokeDataControl;