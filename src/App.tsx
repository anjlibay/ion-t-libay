import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calculatorOutline, ellipse, home, personOutline, speedometerOutline, square, triangle } from 'ionicons/icons';

// Home resources
import Home from './pages/home/home';

import Profile from './pages/profile/Profile';
import Click_counter from './pages/click_counter/Click_counter'; 
import Calculator from './pages/calculator/Calculator';
import To_do_list from './pages/todolist/To_do_list';
import Quotes_generator from './pages/quotes_generator/Quotes_generator';
import Notes from './pages/notes/notes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          
          {/* Application default route */}
           <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          {/* Home Router */}
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/click_counter">
            <Click_counter />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>

          <Route path="/to_do_list">
            <To_do_list />
          </Route>

          <Route path="/quotes_generator">
            <Quotes_generator />
          </Route>

          <Route path="/notes">
            <Notes />
          </Route>

        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          {/* Home Tab Button */}
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
       
          <IonTabButton tab="profile" href="/profile">
            <IonIcon aria-hidden="true" icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
            {/*
          <IonTabButton tab="clickcounter" href="/clickcounter">
            <IonIcon aria-hidden="true" icon={speedometerOutline} />
            <IonLabel>Click Counter</IonLabel>
          </IonTabButton>
        
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={calculatorOutline} />
            <IonLabel>Calculator</IonLabel>
          </IonTabButton>
           */}
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;