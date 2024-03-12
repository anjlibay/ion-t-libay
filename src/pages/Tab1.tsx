import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonAlert, IonButton,
  IonActionSheet} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
              <img alt="Silhouette of mountains" src="../src/assets/image/profile.png" />
              <IonCardHeader>
                <IonCardTitle>Student</IonCardTitle>
                  <IonCardSubtitle>Angela N. Libay</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent style={{ color: 'lightblue' }}>There are always flowers for those who want to see them.</IonCardContent>

          <IonButton id="present-alert" expand="full" color="tertiary" >Quick Facts</IonButton>
              <IonAlert
                trigger="present-alert"
                header="A Short Title Is Best"
                subHeader="A Sub Header Is Optional"
                message="A message should be a short, complete sentence."
                buttons={['Action']}
              ></IonAlert>

          <IonButton id="open-action-sheet" expand="full" color="warning" >Action Sheet</IonButton>
            <IonActionSheet
              trigger="open-action-sheet"
              header="Actions"
              buttons={[
                {
                  text: 'Delete',
                  role: 'destructive',
                  data: {
                    action: 'delete',
                  },
                },
                {
                  text: 'Share',
                  data: {
                    action: 'share',
                  },
                },
                {
                  text: 'Cancel',
                  role: 'cancel',
                  data: {
                    action: 'cancel',
                  },
                },
              ]}
          ></IonActionSheet>
              
        </IonCard>

        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
