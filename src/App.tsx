import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet } from '@ionic/react';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { CardSelectionPage } from './pages/CardSelectionPage';
import { SelectedCardPage } from './pages/SelectedCardPage';


const App = () => {

  useEffect(() => {
    ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT)
  }, [])

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
