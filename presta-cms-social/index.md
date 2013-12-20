---
layout: presta-cms-contact-default
title: PrestaCMSSocialBundle Documentation
navigation:
    - { link: "overview", title: "Overview" }
    - { link: "installation", title: "Installation" }
    - { link: "usage", title: "Usage" }
    - { link: "ask_for_help", title: "Help & Support" }
    - { link: "how_to_contribute", title: "Contribute" }

---

# PrestaCMSSocialBundle Documentation
[![Build Status](https://secure.travis-ci.org/prestaconcept/PrestaCMSSocialBundle.png?branch=master)](http://travis-ci.org/prestaconcept/PrestaCMSSocialBundle)
[![Scrutinizer Quality Score](https://scrutinizer-ci.com/g/prestaconcept/PrestaCMSSocialBundle/badges/quality-score.png?s=a5721c174fead4cb642be18f44965d15d024333c)](https://scrutinizer-ci.com/g/prestaconcept/PrestaCMSSocialBundle/)
[![Latest Stable Version](https://poser.pugx.org/presta/cms-social-bundle/v/stable.png)](https://packagist.org/packages/presta/cms-social-bundle)
[![Total Downloads](https://poser.pugx.org/presta/cms-social-bundle/downloads.png)](https://packagist.org/packages/presta/cms-social-bundle)

[![SensioLabsInsight](https://insight.sensiolabs.com/projects/c6c99c8b-0706-4b09-a7c4-f21d165cb7c3/big.png)](https://insight.sensiolabs.com/projects/c6c99c8b-0706-4b09-a7c4-f21d165cb7c3)
[![knpbundles.com](http://knpbundles.com/prestaconcept/PrestaCMSSocialBundle/badge)](http://knpbundles.com/prestaconcept/PrestaCMSSocialBundle)

## Overview

PrestaCMSSocialBundle adds contact form in [PrestaCMS][cms-core-bundle].

For a ready to use demonstration of PrestaCMS you should check the [prestacms-sandbox available on github][prestacms-sandbox].
Two blocks are available in the footer of the prestacms-sandbox.

Currently we provide the three following blocks

+ Facebook fan count block
+ Twitter follower count
+ Twitter latest tweet

## Installation

This bundle should be installed through composer

Require ``presta/cms-social-bundle`` to your composer.json file:

{% highlight yaml %}
{
    "require": {
        "presta/cms-social-bundle": "1.0.*"
    }
}
{% endhighlight %}

Register the bundles in ``app/AppKernel.php``

{% highlight php %}

// app/AppKernel.php
public function registerBundles()
{
    return array(
        // ...
        new \new Sonata\IntlBundle\SonataIntlBundle(),
        new \new Presta\CMSSocialBundle\PrestaCMSSocialBundle(),
    );
}
{% endhighlight %}

## Usage

By default none of the three blocks are available, you have to add some configurations in your config.yml file

To enable the twitter relative block, you have to put the config below in your config.yml file. Takes care of replacing the parameters with your own parameters, the parameters can be found in your twitter developer account.

{% highlight yaml %}
# app/config/config.yml
presta_cms_social:
    twitter:
        url: %twitter.api_url%
        consumer_key: %twitter.consumer_key%
        consumer_secret: %twitter.consumer_secret%
        token: %twitter.access_token%
        token_secret: %twitter.access_token_secret%
{% endhighlight %}

By adding the configuration above, you now have access to the two twitter blocks which displays your latest tweet, and your current follower count.


To enable the facebook relative block, you have to add in your config.yml, the configuration below, here you also have to replace the parameters with your own parameters, the parameters can be found in your facebook developer account.

{% highlight yaml %}
# app/config/config.yml
presta_cms_social:
    facebook:
        application_id: %facebook.application_id%
        application_secret: %facebook.application_secret%
{% endhighlight %}

With this config, you can now add the facebook fan count block into your pages

## Ask for help ##

If you need help about this project you can [post a message on our google group][google-groups]

## How to contribute ##

The best way to contribute is to use Github Pull Request system. Any contributions like translation, documentation, bug reporting or even new block...

[cms-core-bundle]: https://github.com/prestaconcept/PrestaCMSCoreBundle
[prestacms-sandbox]: https://github.com/prestaconcept/prestacms-sandbox
[google-groups]: https://groups.google.com/forum/?hl=fr&fromgroups#!forum/prestacms-devs