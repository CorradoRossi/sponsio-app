import { Components, registerComponent} from 'meteor/vulcan:core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; 

const About = () =>
    
    <div className="sidebar-all">
     
      <Components.Newsletter />

    </div>

registerComponent({ name: 'About', component: About });
