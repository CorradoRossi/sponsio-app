import { registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';

const Footer = () => {
  return (
    <div className="footer">
    <div>
      <p><a href="https://nopoventures.com">NoPo Ventures</a> | <a href="https://bestoftheweb.xyz">Best Of The Web</a> | <a href="https://metastash.xyz">MetaStash</a> | <a href="https://frugaltricks.com">Frugal Tricks</a></p>
    </div>
    <div>
      <p>Made with ❤️ and ☕ by <a href="https://motorossi.me" target="_blank">MotoRossi<FormattedMessage id=""/></a></p>
    </div>
    </div>
  )
}

Footer.displayName = "Footer";

registerComponent({ name: 'Footer', component: Footer });