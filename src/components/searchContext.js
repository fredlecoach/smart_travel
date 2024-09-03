import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    /** Quand tu appelles la fonction createContext(), elle retourne un objet qui contient deux composants importants :Provide ou Consumer
    Provider : SearchContext.Provider est un composant qui permet de fournir une valeur contextuelle aux composants enfants qui en ont besoin.
    createContext() crée un contexte, qui est un objet contenant le composant Provider.
    Provider est utilisé pour envelopper les composants qui doivent avoir accès au contexte. Il prend une prop appelée value, qui contient les données que tu veux rendre accessibles à tous les composants enfants.
    */
    <SearchContext.Provider value={{ search, setSearch }}>
      {/* children retourne tous les composants enfants */}
      {children}
    </SearchContext.Provider>
  );
};
