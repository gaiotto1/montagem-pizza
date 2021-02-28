import React from 'react';
import { Name, Ingredients } from './styles';

const Description = ({ name, desc }) => (
  <>
    <Name>{name}</Name>
    <Ingredients>{desc}</Ingredients>
  </>
);
export default Description;
