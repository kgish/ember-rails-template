# Ember-rails template

This is a bare-bones template that you can use as a starting point for building impressive ember-rails applications.

Using this approach, you can easily ombine the power of the Rails backend with the flexibility of an Ember client interface.

Special credit goes to the article [Getting Started with Rails and Ember CLI](https://spin.atomicobject.com/2017/03/06/rails-ember-cli) by Laura Robb which inspired me to create this.

For convenience I take the liberty to repeat the most important points below.


## Installation

The steps needed for a successful installation are easy, just follow these instructions.

Install the new Rails application as usual. Since you will be using Ember for the front end, use the `--api` option for creating an API-only application.

```
$ rails new ember-rails-template -d postgresql --api
$ cd ember-rails-template
$ bundle install
$ rails db:create
```

Add the following line to the `Gemfile`:

```
gem 'ember-cli-rails'
```

Create and setup the ember front end.

```
$ ember new frontend —skip-git
$ rails generate ember:init
$ cd frontend
$ ember install ember-cli-rails-addon
```

Finally, modify the `ember-rails-template/config/routes.rb` file to look like this:

```ruby
Rails.application.routes.draw do
  mount_ember_app :frontend, to: "/"
end

```

Now you're all set to go. Start the server

```
$ bin/rails server
```

and point your favorite browser to http://localhost:3000.


## References

Here are a number of links that you might find useful.

* [Ember.js](http://emberjs.com/)
* [Ember-cli](https://ember-cli.com/)
* [ember-cli-rails](https://github.com/thoughtbot/ember-cli-rails)
* [Using Rails for API-only Applications](http://edgeguides.rubyonrails.org/api_app.html)


## Author

Kiffin Gish \< kiffin.gish@planet.nl \>

[Gishtech](http://gishtech.com)
Advanced Software Development for the Web

\- You're never too old to learn new stuff.