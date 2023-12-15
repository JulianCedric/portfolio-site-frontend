import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = () => {
    return (
      <Menu>
        <Menu.Item name='home' />
        {/* <Menu.Item name='about me' /> */}
        <Menu.Item name='projects' />
        {/* <Menu.Item name='contact' /> */}
      </Menu>
    );
  };

export default Header;