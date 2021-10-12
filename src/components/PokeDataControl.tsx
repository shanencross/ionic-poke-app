import PokeDataDisplay from "./PokeDataDisplay";
import PokeSearchBar from "./PokeSearchBar"
import { useState } from 'react';

interface PokeDataControlProps { }

const PokeDataControl: React.FC<PokeDataControlProps> = () => {
  const [searchInput, setSearchInput] = useState<string | null>(null);

  const handleSearchChange = (searchInput: string) => {
    setSearchInput(searchInput);
  }

  return (
    <div className="PokeDataControl">
      <PokeSearchBar onSearchChange={handleSearchChange}/>
      <PokeDataDisplay/>
    </div>
  );
};

export default PokeDataControl;