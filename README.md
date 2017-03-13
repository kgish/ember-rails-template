# Ember-rails template

This is a bare-bones template that you can use as a starting point for building your impressive ember-rails applications.

Using this approach as a generic basis, you can easily combine the power of the Rails backend with the flexibility of an Ember client interface.

I've also extended the template to use [Sass](http://sass-lang.com/) and [Bootstrap v4 alpha](https://v4-alpha.getbootstrap.com/), but this can be left out if you prefer.


## Installation

The steps needed for a successful installation are easy, just follow these instructions.

### Rails API back-end

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

### Ember front-end

Create and setup the ember front-end as follows.

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

Now you're all set to go, simply fire up the server by executing the following command:

```
$ bin/rails server
```

Then cross your fingers and point your favorite browser to [http://localhost:3000](http://localhost:3000). Voilà, mon ami.

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

## JSON-API

```
ember install ember-cli-scaffold
```

```
$ ember g model user firstname:string lastname:string email:string details:string
```

```
$ ember generate adapter application
```

Add a namespace to `app/adapters/application.js` so that it looks like this:

```
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    namespace: 'api'
});
```

To configure it, enter this line of code in `config/environments/development.rb`, `config/environments/test.rb` and `config/environments/production.rb`:

```
ActiveModelSerializers.config.adapter = :json_api
```

Add the following lines to `mime_types.rb`:

```
api_mime_types = %W(
  application/vnd.api+json
  text/x-json
  application/json
)
Mime::Type.register 'application/vnd.api+json', :json, api_mime_types
```

Gemfile:

```
gem 'bcrypt', '~> 3.1.7'
```

Users:

```
$ rails g scaffold users firstname:string lastname:string email:string password_digest:string token:string description:text
```

Notes:

```
$ rails g scaffold notes title:string contents:text user:references
```


## References

Here are a number of links that you might find useful.

* [Ember.js](http://emberjs.com/)
* [Ember-cli](https://ember-cli.com/)
* [Github ember-cli-rails](https://github.com/thoughtbot/ember-cli-rails)
* [Using Rails for API-only Applications](http://edgeguides.rubyonrails.org/api_app.html)
* [Sass](http://sass-lang.com/)
* [Bootstrap v4 alpha](https://v4-alpha.getbootstrap.com/)
* [Font awesome](http://fontawesome.io/icons/)
* [Ember-cli-rails](https://github.com/thoughtbot/ember-cli-rails)

Some good articles about implementing the JSON:API can be found here:

* [How and why should you use JSON API in your Rails API?](http://blog.arkency.com/2016/02/how-and-why-should-you-use-json-api-in-your-rails-api/)
* [Creating Rails 5 API only application following JSON:API specification](https://www.simplify.ba/articles/2016/06/18/creating-rails5-api-only-application-following-jsonapi-specification/)

Some excellent Tuts+ courses:

* [Create a Full-Stack Rails and Ember App](https://code.tutsplus.com/courses/create-a-full-stack-rails-and-ember-app)
by Gunther Mühlberger
* [Build an Ambitious App with Ember 2](https://code.tutsplus.com/courses/build-an-ambitious-app-with-ember-2)

Special credit goes to the following article which inspired me:

* [Getting Started with Rails and Ember CLI](https://spin.atomicobject.com/2017/03/06/rails-ember-cli) by Laura Robb


## Author

Kiffin Gish \< kiffin.gish@planet.nl \>

[Gishtech](http://gishtech.com)
Advanced Software Development for the Web

\- You're never too old to learn new stuff.