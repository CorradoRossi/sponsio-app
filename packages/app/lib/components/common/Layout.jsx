import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Helmet from 'react-helmet';

const Layout = ({currentUser, children, currentRoute}) =>

  <div className={classNames('wrapper', `wrapper-${currentRoute.name.replace('.', '-')}`)} id="wrapper">

    <Helmet>
      <link name="bootstrap" rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"/>
      <link name="font-awesome" rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Helmet>
   
    <Components.HeadTags />

    {currentUser ? <Components.UsersProfileCheck currentUser={currentUser} documentId={currentUser._id} /> : null}

    <Components.Header />
  
    <div className="main">

      {children}

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

      <Components.FlashMessages />

    </div>

    <div className="footerdiv">
      <Components.Footer />
    </div>

  </div>

registerComponent({ name: 'Layout', component: Layout, hocs: [withCurrentUser] });