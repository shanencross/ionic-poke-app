import { IonSearchbar, } from '@ionic/react';

interface PokeSearchBarProps { 
  onSearchChange: Function
}

const PokeSearchBar: React.FC<PokeSearchBarProps> = (props) => {
  return (
    <div className="PokeSearchBar">
      <h1>Search for Pokemon by type (fire, grass water, electric, etc.):</h1>
      <IonSearchbar id="pokemon-type" placeholder="Enter Pokemon Type" onIonChange={(e) => props.onSearchChange(e.detail.value)}/>
    </div>
  );
};

export default PokeSearchBar;