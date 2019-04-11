import { Components, registerComponent} from 'meteor/vulcan:core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; 

const Sidebar = () =>
    
    <div className="sidebar-all">
     
      <Components.Newsletter />

    </div>

registerComponent({ name: 'Sidebar', component: Sidebar });