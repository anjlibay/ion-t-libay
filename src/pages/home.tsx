import {
    //initial components
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    IonButton, IonIcon, IonGrid, IonRow, IonCol,IonCard, IonCardContent, IonCardHeader,  IonCardTitle,
} from '@ionic/react';


//CSS
//  import './Profile.css';

import { search, notifications, settings, person } from 'ionicons/icons';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Home</IonTitle>
                    </IonToolbar>
                </IonHeader>

                {/* Main Content Area */}
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <img src="../src/assets/img/home-page-png.jpg" alt="Placeholder" />
                                <IonCardHeader>
                                    <IonCardTitle>Welcome to Gelay's property</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                You only live once, but if you do it right, once is enough.
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                {/* Action Buttons */}
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block">
                                <IonIcon slot="start" icon={search} />
                                Search
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block">
                                <IonIcon slot="start" icon={notifications} />
                                Notifications
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                {/* Profile and Settings */}
                <IonGrid>
                    <IonRow>
                        
                        <IonCol>
                            <IonButton expand="block">
                                <IonIcon slot="start" icon={settings} />
                                Settings
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                

            </IonContent>
        </IonPage>
    );
};

export default Home;
