import * as React from 'react';
import { EHEaderTypes, Header } from './components/header';
import { SHOP_NAME } from './constants';
import styles from './app.module.scss';

export const App = React.memo(() => {
  return (
    <div>
      <Header className={styles.header} headerType={EHEaderTypes.H1}>{SHOP_NAME}</Header>
      <p>Hello world</p>
    </div>
  );
});
