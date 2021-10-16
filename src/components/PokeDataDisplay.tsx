import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { v4 } from 'uuid';
import SinglePokemonInterface from '../apiHelpers/SinglePokemonInterface';
import capitalizeFirstLetter from '../helpers/capitalizeFirstLetter';

interface PokeDataDisplayProps {
  pokeData: SinglePokemonInterface[];
}

const PokeDataDisplay: React.FC<PokeDataDisplayProps> = ({pokeData}) => {
  console.log("Data display!");
  return (
    <div className="PokeDataDisplay">
      <IonGrid>
        {pokeData.map(({name, pokedexNumber, pokemonTypes}) =>
        <div key={v4()}>
          <IonRow>           
            <IonCol>#{pokedexNumber}</IonCol>
            <IonCol>{capitalizeFirstLetter(name)}</IonCol>
            <IonCol>{pokemonTypes.map((pokemonType) => 
              <div key={v4()}>
                {pokemonType}
              </div>)}
            </IonCol>
          </IonRow>
        </div>
        )}
      </IonGrid>
    </div>
  );
};

export default PokeDataDisplay;