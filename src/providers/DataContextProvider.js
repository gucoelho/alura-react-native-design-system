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
          let filteredItem = copiedItens.find(item => item.id === newItem.id);
          if (filteredItem){
            filteredItem.quantidade = filteredItem.quantidade + 1;
            console.log(filteredItem)
          } else {
            newItem['quantidade'] = 1;
            console.log(newItem)
            copiedItens = [...copiedItens, newItem]
          }
          //console.log(copiedItens)
          setItensCheckout(copiedItens);
        }
      }}>
      {children}
    </ItensContext.Provider>
  );
};

export default Provider;