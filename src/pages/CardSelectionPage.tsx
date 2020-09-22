import React from 'react';
import { IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';

import { Header } from './Header';

//TODO: ボタンをカードらしく変更
export const CardSelectionPage = (props: any) => {//TODO: propsの定義
  //TODO: リスト一次元化、外から設定
  const cards = [
    [{ text: "0" }, { text: "1/2" }, { text: "1" }],
    [{ text: "2" }, { text: "3" }, { text: "5" }],
    [{ text: "8" }, { text: "13" }, { text: "20" }],
    [{ text: "40" }, { text: "100" }, { text: "?" }]
  ]

  let table = [];
  let rows = [];
  for (let i = 0; i < cards.length; i++) {
    let cols = [];
    for (let j = 0; j < 3; j++) {
      cols.push(<IonCol class="col"><PorkerCard value={cards[i][j].text} history={props.history} /></IonCol>);
    }
    rows.push(<IonRow class="row">{cols}</IonRow>);
  }
  table.push(<IonGrid>{rows}</IonGrid>);

  return (
    <>
      <Header title="カード選択" />
      {table}
    </>
  );
}


const PorkerCard = (props: any) => {//TODO: propsの定義
  return (
    <IonButton size="large" expand="block" onClick={
      (e) => {
        e.preventDefault();
        props.history.push({ pathname: '/selected', state: { value: props.value } });
      }
    }>
      {props.value}
    </IonButton>
  );
}
