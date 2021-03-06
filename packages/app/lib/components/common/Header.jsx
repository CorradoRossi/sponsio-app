import React from 'react';
import PropTypes from 'prop-types';
import { withCurrentUser, getSetting, Components, registerComponent } from 'meteor/vulcan:core';
import { Posts } from '../../modules/posts/index.js';

const Header = (props) => {
  
  const logoUrl = getSetting('logoUrl', '/packages/app/lib/static/sponsio-logo-prpl.png');
  const siteTitle = getSetting('title');
  

  return (
    <div className="header-wrapper">

      <header className="header">

        <div className="logo">
          <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
          
        </div>
        
        <div className="nav">

          <div className="nav-new-post">
            <Components.ShowIf check={Posts.options.mutations.new.check}>
              <Components.PostsNewButton/>
            </Components.ShowIf>
          </div>

          <div className="nav-user">
            {!!props.currentUser ? <Components.UsersMenu/> : <Components.UsersAccountMenu/>}
          </div>

        </div>

      </header>
    </div>
  )
}

Header.displayName = "Header";

Header.propTypes = {
  currentUser: PropTypes.object,
};

registerComponent({ name: 'Header', component: Header, hocs: [withCurrentUser] });
