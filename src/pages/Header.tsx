import React from 'react';

import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/react';

interface HeaderProps {
  title: string
  hasBackButton?: boolean | undefined
  destination?: string
}

export const Header: React.FC<HeaderProps> = ({title, hasBackButton=false, destination='/' }) => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          {hasBackButton && 
          <IonButtons slot='start'>
            <IonBackButton defaultHref={destination}/>
          </IonButtons>}
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
}
