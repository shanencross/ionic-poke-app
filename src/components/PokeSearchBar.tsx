import { IonHeader, IonToolbar, IonTitle, IonSearchbar, } from '@ionic/react';

interface PokeSearchBarProps { 
  onSearchChange: Function
}

const PokeSearchBar: React.FC<PokeSearchBarProps> = (props) => {
  return (
    <div className="PokeSearchBar"> 
    <IonToolbar>
      <IonTitle size="small">Search for Pokemon by type (fire, grass, water, electric, etc.):</IonTitle>
    </IonToolbar>
    <IonSearchbar id="pokemon-type" placeholder="Enter Pokemon Type" onIonChange={(e) => props.onSearchChange(e.detail.value)}/>
    </div>
  );
};

export default PokeSearchBar;