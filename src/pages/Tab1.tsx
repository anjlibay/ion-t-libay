import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonAlert, IonActionSheet, IonModal } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const history = useHistory();
  const [showAlert, setShowAlert] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [showModal_coverpic, setShowModal_coverpic] = useState(false);
  const [showModal_profpic, setShowModal_profpic] = useState(false);

  const handleProceed = () => {
    setShowAlert(false);
    window.open('https://www.facebook.com/profile.php?id=100090915698723', '_blank');
  };

  const handleOpenActionSheet = () => {
    setShowActionSheet(true);
  };

  const toggleModal_coverpic = () => {
    setShowModal_coverpic(true);
  };

  const toggleModal_profpic = () => {
    setShowModal_profpic(true);
  };
  

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
          <img alt="Silhouette of mountains" id="cover_pic" onClick={toggleModal_coverpic} src="../src/assets/img/COVER_PIC.png" />
          <img alt="Silhouette of mountains" id="profile_pic" onClick={toggleModal_profpic} src="../src/assets/img/PROFILE_PIC.png" />  

          <IonCardHeader>
            <IonCardTitle>Angela N. Libay</IonCardTitle>
            <IonCardSubtitle>BSIT Student, 3rd Year - NBSC</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent><i>❤️ Blessed</i> 😊 🙏 &#x1F446;</IonCardContent>

          <IonButton onClick={() => setShowAlert(true)} expand="block" color="primary">Quick Facts</IonButton>

          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="Explore Quick Facts?"
            subHeader="It's worth your time."
            message="Discovering quick facts will provide comprehensive insights about me."
            buttons={[
              {
                text: 'Proceed',
                handler: handleProceed
              },
              {
                text: 'Cancel',
                role: 'cancel'
              }
            ]}
          />

          <IonButton onClick={handleOpenActionSheet} expand="block" color="primary">Open Action Sheet</IonButton>

          <IonActionSheet
            isOpen={showActionSheet}
            onDidDismiss={() => setShowActionSheet(false)}
            header="Actions"
            buttons={[
              {
                text: 'Delete',
                role: 'destructive',
                handler: () => {
                  console.log('Delete clicked');
                }
              },
              {
                text: 'Share',
                handler: () => {
                  console.log('Share clicked');
                }
              },
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
            ]}
          />







          {/* <IonModal isOpen={showModal} onDidDismiss={toggleModal} id="modal_cover_pic">
            <img alt="Silhouette of mountains" src="../src/assets/img/COVER_PIC_WHOLE_JPG.jpg" />
            <IonButton onClick={toggleModal}>X</IonButton>
          </IonModal> */}




          <IonModal
            isOpen={showModal_coverpic}
            onDidDismiss={() => setShowModal_coverpic(false)}
            id="modal_cover_pic"
            className="custom-modal"
          >
            <img alt="Silhouette of mountains" id="coverpic" src="../src/assets/img/COVER_PIC.png" />
            <IonButton color="light" id="modal_coverpic_close_button" onClick={() => setShowModal_coverpic(false)}>X</IonButton>
          </IonModal>
          
          <IonModal
            isOpen={showModal_profpic}
            onDidDismiss={() => setShowModal_profpic(false)}
            id="modal_prof_pic"
            className="custom-modal"
          >
            {/* <img alt="Silhouette of mountains" src="../src/assets/img/HENHEN_JPG.jpg" /> */}
            <img alt="Silhouette of mountains" id="profpic" src="../src/assets/img/PROFILE_PIC.png" />
            <IonButton color="light" id="modal_profpic_close_button" onClick={() => setShowModal_profpic(false)}>X</IonButton>
          </IonModal>


        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
