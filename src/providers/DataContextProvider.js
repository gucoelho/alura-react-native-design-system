import React, {useState} from 'react';

export const ItensContext = React.createContext();

const Provider = ({children}) => {
  const [itensCheckout, setItensCheckout] = useState([]);

  return (
    <ItensContext.Provider
      value={{
        itensCheckout,
        addItem: newItem => {
          let copiedItens = [...itensCheckout];
          let filteredItem = copiedItens.find(i => i.id === newItem.id);
          if (filteredItem)
            filteredItem.quantidade = filteredItem.quantidade + 1;
          else {
            newItem.quantidade = 1;
            copiedItens = [...copiedItens, newItem]
          }

          setItensCheckout(copiedItens);
        },
      }}>
      {children}
    </ItensContext.Provider>
  );
};

export default Provider;