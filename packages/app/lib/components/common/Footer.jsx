import { registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';

const Footer = props => {
  return (
    <div className="footer">Made with ❤️ and ☕ by <a href="https://motorossi.me" target="_blank">MotoRossi<FormattedMessage id=""/></a></div>
  )
}

Footer.displayName = "Footer";

registerComponent({ name: 'Footer', component: Footer });