import { Components, registerComponent} from 'meteor/vulcan:core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; 

const Sidebar = () =>
    
    <div className="sidebar-all">
     
      <Components.Newsletter />

      <div className="sidebar-exp">
        <div className="sidebar-logo">
          <img src="/packages/app/lib/static/iwndwyt.png" alt="IWNDWYT"/>
        </div>
        <div className="sidebar-txt">
          <h4>Sidebar</h4>
          <p>All the words that I want to post go right in here and then you can see them!</p>
        </div>
      </div>

    </div>

registerComponent({ name: 'Sidebar', component: Sidebar });