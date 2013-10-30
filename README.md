prestaconcept.github.io
========================

PrestaConcept open source bundle documentation. [prestaconcept.github.io](http://prestaconcept.github.io/)

This is a list of all PrestaConcept open source projects and there documentation.

## Need help with a bundle

If you find an issue bundle, please use the corresponding Github repository to open an issue.

If you need help you can [post a message on our google group](https://groups.google.com/forum/?hl=fr&fromgroups#!forum/prestacms-devs)


## How to edit the site

This code is using [Jekyll](http://jekyllrb.com/) as this is a ruby project,
make sure you have Ruby and RubyGems installed.
If not, launch this command :

    sudo apt-get install ruby-full libyaml-ruby libzlib-ruby rubygems

Next, follow the [installation guide](http://jekyllrb.com/docs/installation/) to install Jekyll
or just launch the following command :

    sudo gem install jekyll

We provide a Makefile for common operation.

So just run "make build" to regenerate the HTML pages automatically when you make changes to Markdown source files.
and then open [localhost:4000](http://localhost:4000/) in your browser.

If you need to modify the less files, you will need to install node-less and yui-compressor

    sudo apt-get install node-less yui-compressor

And here is the command to rebuild styles.css :

    make ai


## Contributing

Pull requests are welcome.


Thanks to
[everyone who has contributed](https://github.com/prestaconcept/prestaconcept.github.io/graphs/contributors) already.

---

*This project is supported by [PrestaConcept](http://www.prestaconcept.net)*

**Lead Developer** : [@nicolas-bastien](https://github.com/nicolas-bastien)

Released under the MIT License


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/prestaconcept/prestaconcept.github.io/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

