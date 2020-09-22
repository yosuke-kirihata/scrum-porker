import React from 'react';

import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/react';


type HeaderProps = {
  title: string;
  hasBackButton?: boolean|undefined;
}


export const Header = (props: HeaderProps) => {
  const hasBack = props.hasBackButton;

  return (
    <>
      <IonHeader>
        <IonToolbar>
          {/* TODO: 画面戻り先設定 */}
          {hasBack && 
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/'/>
          </IonButtons>}
          <IonTitle>{props.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
}
