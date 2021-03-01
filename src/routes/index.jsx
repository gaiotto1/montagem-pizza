import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Recomendacao from '../pages/Recomendacao';
import Passo1 from '../pages/Passo1';
import Passo2 from '../pages/Passo2';
import Passo3 from '../pages/Passo3';
import Obrigado from '../pages/Obrigado';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Recomendacao} />
    <Route path="/passo1" component={Passo1} />
    <Route path="/passo2" component={Passo2} />
    <Route path="/passo3" component={Passo3} />
    <Route path="/obrigado" component={Obrigado} />
  </Switch>
);

export default Routes;
