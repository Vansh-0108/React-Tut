import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import './SubMenu.scss'

interface node {
    title: string;
    path: string;
    icon: ReactNode;
    iconClosed?: ReactNode;
    iconOpened?: ReactNode;
    subNav?: node[];
    cName?: string;
}

interface props {
    item: node;
}

const SubMenu = ({ item }: props) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Link className='sideBarLink' to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <span className='sideBarLabel'>{item.title}</span>
        </div>
        <div>
          {item.subNav && (subnav ? item.iconOpened : (item.subNav ? item.iconClosed : null))}
        </div>
      </Link>
      {subnav &&
        item.subNav?.map((item, index) => {
          return (
            <Link className='dropDownLink' to={item.path} key={index}>
              {item.icon}
              <span className='sideBarLabel'>{item.title}</span>
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;