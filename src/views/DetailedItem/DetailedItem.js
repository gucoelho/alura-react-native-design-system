
import React from 'react';
import { Background } from './components/Background';
import { ItemDescription } from './components/ItemDescription';

export const DetailedItem = ({route}) => {
  const {item} = route.params;

  return (
    <>
      <Background />
      <ItemDescription item={item} />
    </>
  );
};
