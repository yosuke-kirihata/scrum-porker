import React from 'react';

import "./card.css";
import { Header } from './Header';


export const SelectedCardPage = (props: any) => {//TODO: propsの定義
  return (
    <>
      <Header title="" hasBackButton={true}/>
      {/* TODO:cssのレスポンシブ対応(画面サイズ毎に比率を変えずにカードを大きく出したい) */}
      {/* <Header title="" hasBackButton={false}/> */}
      {/* <Header title=""/> */}
      <div className="flexbox-container-horizontal-center card">
        <div className="flexbox-container-vertical-center">
          <span>{props.history.location.state.value}</span>
        </div>
      </div>
    </>
  );
}
