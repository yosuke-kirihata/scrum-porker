import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Header } from './Header';
import './card.css';

export const SelectedCardPage = (props: RouteComponentProps<{}, any, {value: string}>) => {
  return (
    <>
      <Header title='' hasBackButton={true}/>
      <div className='space'>
        <div className='card' onClick={
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
