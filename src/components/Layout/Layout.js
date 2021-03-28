import React from 'react';

import Wrapper from '../../components/Wrapper/Wrapper';
import classes from './Layout.css';

const layout = (props) => {
  return (
    <Wrapper>
      <div>Toolbar, SideDrawer, Backdrop</div>

      <main className={classes.container}>
        {props.children}
      </main>

    </Wrapper>
  );
}

export default layout;
