# Ember-rails template

This is a bare-bones template that you can use as a starting point for building your impressive ember-rails applications.

Using this approach as a generic basis, you can easily combine the power of the Rails backend with the flexibility of an Ember client interface.

I've also extended the template to use [Sass](http://sass-lang.com/) and [Bootstrap v4 alpha](https://v4-alpha.getbootstrap.com/), but this can be left out if you prefer.


## Installation

The steps needed for a successful installation are easy, just follow these instructions.

### Rails API backend

Install the new Rails application as usual. Since you will be using Ember for the front end, use the `--api` option for creating an API-only application.

```
$ rails new ember-rails-template -d postgresql --api
$ cd ember-rails-template
```

Enable CORS and add the following lines to the `Gemfile`:

```
gem 'rack-cors'

gem 'ember-cli-rails'
gem 'active_model_serializers',
```

Install it all:

```
$ bundle install
$ rails db:create
```

Change the origin and resource settings in the `config/initializers/cors.rb` to look like this:

```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

Finally, modify the `ember-rails-template/config/routes.rb` file to look like this:

```ruby
Rails.application.routes.draw do
  mount_ember_app :frontend, to: "/"
end

```

### Ember frontend

Create and setup the ember front end as follows.

```
$ ember new frontend —skip-git
$ rails generate ember:init
$ cd frontend
```

Install Sass, Bootstrap and Font Awesome.

```
$ ember install ember-cli-sass
$ bower install bootstrap#4.0.0-alpha.6 --save
$ bower install fontawesome --save
```

Convert the default Ember stylesheet CSS to SASS:

```
$ mv app/styles/app.css app/styles/app.scss
```

Include bootstrap and fontawesome in the `app.scss` file:

```scss
@import "../../bower_components/bootstrap/scss/bootstrap";
@import "../../bower_components/font-awesome/scss/font-awesome";
```

Add the following lines to the `ember-cli-build.js` file:

```
app.import('bower_components/tether/dist/js/tether.min.js');
app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');

```

IMPORTANT: make sure that `tether` import goes BEFORE the `bootstrap` import.

Include the API hostname and COR details in the `config/environment.js` file:

```
module.exports = function(environment) {
  var ENV = {

    ...

    APP: {
      ...
    },

    apiHost: 'http://localhost:3000/api',

    contentSecurityPolicy: {
        'default-src': "'none'",
        'script-src': "'self'",
        'font-src': "'self'",
        'connect-src': "'self' http://localhost:3000/",
        'img-src': "'self'",
        'style-src': "'self'",
        'media-src': "'self'"
    }
  };

  ...

  return ENV;
};
```


### Start the application

Now you're all set to go. Start the server:

```
$ bin/rails server
```

Then cross your fingers and point your favorite browser to [http://localhost:3000](http://localhost:3000).

### Cleanup and final polish

Once you are convinced that everything is working according to expectations, you can remove the default `ember-welcome-page` addon:

```
$ npm uninstall ember-welcome-page --save-dev

```

and then modify the `templates/application.hbs` file by removing `{{welcome-page}}` and embellishing it with your own idiosyncrasies.

```
<div class="container">

    <div class="main-wrapper">

        <h1>Ember Rails Bootstrap starter template</h1>

        <p class="lead">Use this document as a way to quickly start any new project.<br> Have fun and enjoy being a creative web developer.</p>

        {{outlet}}

    </div>

</div>
```


## Credits

Special credit goes to the article [Getting Started with Rails and Ember CLI](https://spin.atomicobject.com/2017/03/06/rails-ember-cli) by Laura Robb which triggered me to create this.

I was also inspired by the Tuts+ course [Create a Full-Stack Rails and Ember App](https://code.tutsplus.com/courses/create-a-full-stack-rails-and-ember-app)
by Gunther Mühlberger.

## References

Here are a number of links that you might find useful.

* [Ember.js](http://emberjs.com/)
* [Ember-cli](https://ember-cli.com/)
* [Github ember-cli-rails](https://github.com/thoughtbot/ember-cli-rails)
* [Using Rails for API-only Applications](http://edgeguides.rubyonrails.org/api_app.html)
* [Sass](http://sass-lang.com/)
* [Bootstrap v4 alpha](https://v4-alpha.getbootstrap.com/)
* [Font awesome](http://fontawesome.io/icons/)


## Author

Kiffin Gish \< kiffin.gish@planet.nl \>

[Gishtech](http://gishtech.com)
Advanced Software Development for the Web

\- You're never too old to learn new stuff.