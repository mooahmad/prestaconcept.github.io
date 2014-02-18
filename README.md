Prestaconcept.github.io
========================

PrestaConcept open source bundle documentation. [prestaconcept.github.io](http://prestaconcept.github.io/)

This is a list of all PrestaConcept open source projects and there documentation.


## Issue tracker ##

:clipboard: Issues are managed in [prestaconcept/open-source-management](https://github.com/prestaconcept/open-source-management) to centralize our open source activity.


## Ask for help ##

:speech_balloon: If you need help about this project you can [post a message on our google group][3]


## How to edit the site

This code is using [Jekyll](http://jekyllrb.com/) as this is a ruby project,
make sure you have Ruby and RubyGems installed.
If not, launch this command :

    sudo apt-get install ruby-full libyaml-ruby libzlib-ruby rubygems

Next, follow the [installation guide](http://jekyllrb.com/docs/installation/) to install Jekyll
or just launch the following command :

    sudo gem install jekyll

For Windows users (Thanks to @madhur) : [Running Jekyll on Windows](http://www.madhur.co.in/blog/2011/09/01/runningjekyllwindows.html)
or [Building portable Jekyll for Windows](http://www.madhur.co.in/blog/2013/07/20/buildportablejekyll.html)

We provide a Makefile for common operation.

So just run "make build" to launch the server.
HTML pages will be regenerate automatically when you make changes to Markdown source files.
And then open [localhost:4000](http://localhost:4000/) in your browser.

If you need to modify the less files, you will need to install node-less and yui-compressor

    sudo apt-get install node-less yui-compressor

And here is the command to rebuild styles.css :

    make ai

## Styles

### Callout
Callout is special area used to highlight some text.

3 colours are available :

  - warning (orange)
  - info (blue)
  - tips (green)

This is an example of callout use :

```
<div class="callout warning|info|tips">
<h4>Title</h4>
Yout text
</div>
```

## Contributing

Pull requests are welcome.


Thanks to
[everyone who has contributed](https://github.com/prestaconcept/prestaconcept.github.io/graphs/contributors) already.

---

*This project is supported by [PrestaConcept](http://www.prestaconcept.net)*

**Lead Developer** : [@nicolas-bastien](https://github.com/nicolas-bastien)

Released under the MIT License

[3]: https://groups.google.com/forum/?hl=fr&fromgroups#!forum/prestacms-devs

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/prestaconcept/prestaconcept.github.io/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

