# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-superb"
  spec.version       = "0.1.0"
  spec.authors       = ["Ivanka Todorova"]
  spec.email         = ["fakeheal@gmail.com"]

  spec.summary       = "Simple type driven theme suitable for developers."
  spec.homepage      = "https://github.com/simplysuperb-dev/jekyll-theme-superb"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.9"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.1"
end
