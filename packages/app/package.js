Package.describe({
  name: "app",
  summary: "Sponsio Forum",
  version: '1.12.12',
  git: "https://github.com/CorradoRossi/sponsio-app"
});

Package.onUse(function (api) {

  api.versionsFrom('METEOR@1.5.2');

  api.use([

    'promise',
    'fourseven:scss@4.5.0',

    // vulcan core
    'vulcan:core@1.12.17',

    // vulcan packages
    'vulcan:ui-bootstrap@1.12.17',
    'vulcan:voting@1.12.17',
    'vulcan:accounts@1.12.17',
    'vulcan:email@1.12.17',
    'vulcan:forms@1.12.17',
    'vulcan:newsletter@1.12.17',
    'vulcan:events@1.12.17',
    'vulcan:embed@1.12.17',
    'vulcan:admin@1.12.17',
    'vulcan:debug@1.12.17',

  ]);

  api.addAssets([
    'lib/static/sponsio-logo.png',
    'lib/static/sponsio-logo-prpl.png',
    'lib/static/placeholder.png',
    'lib/static/favicon.png',
    'lib/static/zenproverb.jpg',
    '../../favicon.png',

    'lib/assets/images/stackoverflow.png',
    'lib/static/time-understanding.png',
    'lib/static/me-7.jpg',
  ], ['client']);

  api.addAssets([

    'lib/server/email/templates/common/test.handlebars',
    'lib/server/email/templates/common/wrapper.handlebars',
    'lib/server/email/templates/comments/newComment.handlebars',
    'lib/server/email/templates/comments/newReply.handlebars',
    'lib/server/email/templates/posts/newPendingPost.handlebars',
    'lib/server/email/templates/posts/newPost.handlebars',
    'lib/server/email/templates/posts/postApproved.handlebars',
    'lib/server/email/templates/users/accountApproved.handlebars',
    'lib/server/email/templates/users/newUser.handlebars',
    'lib/server/email/templates/newsletter/newsletter.handlebars',
    'lib/server/email/templates/newsletter/newsletterConfirmation.handlebars',
    'lib/server/email/templates/newsletter/postItem.handlebars',

  ], ['server']);

  api.addFiles([
    //'lib/stylesheets/bootstrap.css',
    'lib/stylesheets/wizard.css',
    'lib/stylesheets/main.scss',
  ], ['client']);

  api.mainModule("lib/server/main.js", "server");
  api.mainModule("lib/client/main.js", "client");

});
