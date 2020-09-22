import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet } from '@ionic/react';

import { CardSelectionPage } from './pages/CardSelectionPage';
import { SelectedCardPage } from './pages/SelectedCardPage';


const App = () => {
  return (
    <Router>
    <div className='App'>
      <IonApp>
        <IonPage id='main'>
          <IonRouterOutlet>
            <Route exact path='/' component={CardSelectionPage} />
            <Route path="/selected" component={SelectedCardPage} />
          </IonRouterOutlet>
        </IonPage>
      </IonApp>
    </div>
  </Router>
  );
}

export default App;
