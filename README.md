# jekyll-theme-superb

This is a simple Jekyll theme that uses [tailwindCSS's-based ui-kit](https://github.com/simplysuperb-dev/ui-kit) of simply**superb**. My blog uses it currently, so you can see it live at: https://blog.simplysuperb.app/. Additionally, here's a screenshot*:

![screenshot of the theme](./screenshot.png)

  _\* Article titles were copied from [dev.to](dev.to)'s homepage at the time of designing of this template._

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-superb"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-superb
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-theme-superb

## Usage

Theme has a `post` layout used for displaying a single post, an `index` layout used for displaying all posts and a page layout that differs slightly from the `post` layout.

## Configuration

Additional to other config options already present in jekyll itself, this theme also has:

- **subtitle**: Shown next to the name of the blog (top left corner, visible desktop only)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/simplysuperb-dev/jekyll-theme-superb. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install` and `npm install`.

To run `postcss` for the tailwind part:

```
npm run css:dev
```

To run jekyll and its processor:

```
npm run jekyll:dev
```

> Note: You might checkout [`concurrently`](https://www.npmjs.com/package/concurrently), if you want to run both commands... wait for it... *concurrently*.

## Releasing

First, make sure the theme runs smoothly (or at all) locally.

Then create the 💎
```
gem build jekyll-theme-superb.gemspec 
```

Lastly, publish it to the ☁️
```
gem push jekyll-theme-superb-*.gem
```

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

