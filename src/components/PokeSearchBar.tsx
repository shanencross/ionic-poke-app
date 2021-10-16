import { IonToolbar, IonTitle, IonSearchbar, IonGrid, IonRow, IonCol } from '@ionic/react';

interface PokeSearchBarProps { 
  onSearchChange: Function
}

const PokeSearchBar: React.FC<PokeSearchBarProps> = (props) => {
  return (
    <div className="PokeSearchBar"> 
    <IonToolbar>
      <IonTitle size="large">Search for Pokemon by type!</IonTitle>
    </IonToolbar>
    <IonGrid>
      <IonRow><IonCol>Types (try entering these!):</IonCol></IonRow>
      <IonRow><IonCol>Normal · Fire · Water · Grass · Electric</IonCol></IonRow>
      <IonRow><IonCol>Ice · Fighting · Poison · Ground · Flying</IonCol></IonRow>
      <IonRow><IonCol>Psychic · Bug · Rock · Ghost · Dark</IonCol></IonRow>
      <IonRow><IonCol>Dragon · Steel · Fairy</IonCol></IonRow>
    </IonGrid>
    <IonSearchbar id="pokemon-type" placeholder="Enter Pokemon Type" onIonChange={(e) => props.onSearchChange(e.detail.value)}/>
    </div>
  );
};

export default PokeSearchBar;