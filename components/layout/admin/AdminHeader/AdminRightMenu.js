import React, { Component } from 'react';
import Link from 'next/link';
import { Menu, Dropdown, Button } from 'antd';
import { signOut } from '../../../../services/redux/actions/authActions';
import { auth } from '../../../../services/firebase';
import {withRouter} from 'next/router';
import store from '../../../../services/redux/store';

const menu= (
  <Menu >
  <Menu.Item>
    <Link   href="/admin_joblistings">
      <a>Job Postings
        </a>
      </Link>
  </Menu.Item>
  <Menu.Item>
    <Link   href="/admin_messages">
      <a>Messages
        </a>
      </Link>
  </Menu.Item> 
  <Menu.Item>
    <Link   href="/administrative_reports"> 
    <a>
        Administrative Reports 
        </a>
        </Link>
  </Menu.Item>
</Menu>
);

const AdminRightMenu = ({router}) =>(
      <div>
      <Dropdown overlay={menu} placement="bottomLeft">
          <Button size='large' shape= 'round'>Admin Options</Button>
      </Dropdown>
      <Button type='ghost' size='large' shape= 'round' onClick={
        () =>{
        store.dispatch(signOut()),
        auth.signOut(),
        router.push('/login')
        }
      }>Sign Out</Button>
    </div>
    );

export default withRouter(AdminRightMenu);
