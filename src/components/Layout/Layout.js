import React from 'react';

import Wrapper from '../../components/Wrapper/Wrapper';
import classes from './Layout.css';

const layout = (props) => {
  return (
    <Wrapper>
      <nav className={classes.navBar}><h2>Burger Builder</h2></nav>

      <main className={classes.container}>
        {props.children}
      </main>

    </Wrapper>
  );
}

export default layout;
