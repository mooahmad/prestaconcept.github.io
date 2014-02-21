---
layout: sidebar
title: PrestaComposerPublicBundle
subtitle: This bundle provides a simple way to include public 3rd-party libraries
navigation_mode: anchor
navigation:
    - { id: "overview", link: "overview", title: "Overview" }
    - { id: "installation", link: "installation", title: "Installation" }
    - { id: "usage", link: "usage", title: "Usage" }
    - { id: "how_to_get_help_and_support", link: "how_to_get_help_and_support", title: "Help and support" }
navigation_active: overview
---

[![Build Status](https://travis-ci.org/prestaconcept/PrestaComposerPublicBundle.png)](https://travis-ci.org/prestaconcept/PrestaComposerPublicBundle)
[![Scrutinizer Quality Score](https://scrutinizer-ci.com/g/prestaconcept/PrestaComposerPublicBundle/badges/quality-score.png?s=c9cd4805f46ef250b1310143ad8d955814513268)](https://scrutinizer-ci.com/g/prestaconcept/PrestaComposerPublicBundle/)
[![Latest Stable Version](https://poser.pugx.org/presta/composer-public-bundle/v/stable.png)](https://packagist.org/packages/presta/composer-public-bundle)
[![Total Downloads](https://poser.pugx.org/presta/composer-public-bundle/downloads.png)](https://packagist.org/packages/presta/composer-public-bundle)

[![SensioLabsInsight](https://insight.sensiolabs.com/projects/fc4b4416-def6-428c-b873-5fd1f5a9ad39/big.png)](https://insight.sensiolabs.com/projects/fc4b4416-def6-428c-b873-5fd1f5a9ad39)
[![PrestaComposerPublicBundle on Knpbundles](http://knpbundles.com/prestaconcept/PrestaComposerPublicBundle/badge)](http://knpbundles.com/prestaconcept/PrestaComposerPublicBundle)

## Overview

The goal of this bundle is to provide a simple way to include public 3rd-party libraries (javascripts, css, pictures ...) into your projects and keep its up-to-date.

1. Add the library to composer.json
2. Configure the library in PrestaComposerPublicBundle
3. Use the library as any other assets in the project.


## Installation

### Get the code

The easiest way is to use composer :

    php composer.phar require presta/composer-public-bundle --no-update
    php composer.phar update presta/composer-public-bundle

### Link to Composer

Append the following commands to post install/update's section of `composer.json` like this :

{% highlight json %}
"scripts": {
    "post-install-cmd": [
        "Incenteev\\ParameterHandler\\ScriptHandler::buildParameters",
        "Sensio\\Bundle\\DistributionBundle\\Composer\\ScriptHandler::buildBootstrap",
        "Sensio\\Bundle\\DistributionBundle\\Composer\\ScriptHandler::clearCache",
        "Presta\\ComposerPublicBundle\\Composer\\ScriptHandler::ComposerPublic",
        "Sensio\\Bundle\\DistributionBundle\\Composer\\ScriptHandler::installAssets",
        "Sensio\\Bundle\\DistributionBundle\\Composer\\ScriptHandler::installRequirementsFile"
    ],
    "post-update-cmd": [
        "Incenteev\\ParameterHandler\\ScriptHandler::buildParameters",
        "Sensio\\Bundle\\DistributionBundle\\Composer\\ScriptHandler::buildBootstrap",
        "Sensio\\Bundle\\DistributionBundle\\Composer\\ScriptHandler::clearCache",
        "Presta\\ComposerPublicBundle\\Composer\\ScriptHandler::ComposerPublic",
        "Sensio\\Bundle\\DistributionBundle\\Composer\\ScriptHandler::installAssets",
        "Sensio\\Bundle\\DistributionBundle\\Composer\\ScriptHandler::installRequirementsFile"
    ]
},
{% endhighlight %}

### Update your Kernel

{% highlight php %}
<?php
class AppKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = array(
            ...,
            new Presta\ComposerPublicBundle\PrestaComposerPublicBundle()
        );
    }
}
{% endhighlight %}

## Usage

### Add a library

For example, i want to add a jQuery plugin into my project. Unfortunatly the library is not in [packagist][1].

So as explain in [the composer documentation][2], edit `composer.json` :

{% highlight json %}
{
    ...
    "repositories": [
        {
            "type": "package",
            "package": {
                "name": "wesnolte/Pajinate",
                "version": "1.0.0",
                "source": {
                    "url": "https://github.com/wesnolte/Pajinate.git",
                    "type": "git",
                    "reference": "master"
                }
            }
        }
    ],
    ...
}
{% endhighlight %}

And then add it to the `require` section :

{% highlight json %}
{
    ...
    "require": {
        ...
        "wesnolte/Pajinate": "1.0.*"
    },
    ...
}
{% endhighlight %}

Finally you need to add an entry for this library in the PrestaComposerPublicBundle configuration.

Eg. `app/config/config.yml`:

{% highlight yaml %}
presta_composer_public:
    symlink: true
    blend:
        wesnolte/Pajinate:
            vendor: wesnolte
            name: Pajinate
            path: /
{% endhighlight %}

Or shortly:

{% highlight yaml %}
presta_composer_public:
    blend:
        wesnolte/Pajinate: ~
{% endhighlight %}

Launch the command `app/console config:dump-reference PrestaComposerPublicBundle` for more details.

By default, assets from vendor/wesnolte/Pajinate (for example) were hard copy to Ressources/public/ of the prestaComposerPublicBundle.

If symlink: true option is set and OS was able to use it, a symlink replace hard copy.


### Blend it

Finally you only need to install your vendors:

{% highlight bash %}
composer.phar install
{% endhighlight %}

or manually launch symfony command:

{% highlight bash %}
app/console  presta:composer-public
{% endhighlight %}


### Include assets

{% highlight smarty %}
{% raw %}
{# layout.html.twig #}
{%javascripts
        ...
    '@PrestaComposerPublicBundle/Resources/public/wesnolte/Pajinate/jquery.pajinate.js'
%}
    <script type="text/javascript" src="{{ asset_url }}"></script>
{% endjavascripts %}
{% endraw %}
{% endhighlight %}


## Example

[PrestaCMSCKEditorBundle][3] use PrestaComposerPublicBundle to integrate CKEditor in PrestaCMS with SonataMedia and page links.

For a ready to use demonstration of those bundle you should check the [prestacms-sandbox available on github][5].

Sandbox is also deployed for a live demonstration :

-   [Frontend site][6]
-   [Administration Site][7]

## How to get help and support

If you need help on one of our bundle, please register to our [google group][4] and ask you question.
You can open issues on github too.

[1]: https://packagist.org/
[2]: http://getcomposer.org/doc/05-repositories.md#package-2
[3]: https://github.com/prestaconcept/PrestaCMSCKEditorBundle
[4]: https://groups.google.com/forum/?hl=fr&fromgroups#!forum/prestacms-devs
[5]: https://github.com/prestaconcept/prestacms-sandbox
[6]: http://sandbox.prestacms.com/
[7]: http://sandbox.prestacms.com/admin
