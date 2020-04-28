import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

// Para o router nao achar que tudo apos a barra é rota devemos botar o : e o +
// "/repository/:repository+" (:repository+ é um repositorio)
// Sem o switch as rotas apareceriam juntas. Portanto eles os separa

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
