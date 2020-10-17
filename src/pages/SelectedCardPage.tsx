import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Header } from './Header';
import './card.css';

export const SelectedCardPage = (props: RouteComponentProps<{}, any, {value: string}>) => {
  return (
    <>
      <Header title='' hasBackButton={true}/>
      {/* TODO:cssのレスポンシブ対応(画面サイズ毎に比率を変えずにカードを大きく出したい) */}
      <div className='flexbox-container-horizontal-center card'>
        <div className='flexbox-container-vertical-center' onClick={
          (e) => {
            e.preventDefault();
            props.history.goBack();
          }
        }>
          <span>{props.history.location.state.value}</span>
        </div>
      </div>
    </>
  );
}
