---
layout: sidebar
title: PrestaSonataAdminExtendedBundle
subtitle: Ease SonataAdmin configuration
navigation_mode: anchor
navigation:
    - { link: "overview", title: "Overview" }
    - { link: "installation", title: "Installation" }
    - { link: "working_example", title: "Working example" }

---

[![Build Status](https://secure.travis-ci.org/prestaconcept/PrestaSonataAdminExtendedBundle.png?branch=master)](http://travis-ci.org/prestaconcept/PrestaSonataAdminExtendedBundle)
[![Scrutinizer Quality Score](https://scrutinizer-ci.com/g/prestaconcept/PrestaSonataAdminExtendedBundle/badges/quality-score.png?s=fdbe18e09e866427bfb9c37268372cd9611b6607)](https://scrutinizer-ci.com/g/prestaconcept/PrestaSonataAdminExtendedBundle/)
[![Latest Stable Version](https://poser.pugx.org/presta/sonata-admin-extended-bundle/v/stable.png)](https://packagist.org/packages/presta/sonata-admin-extended-bundle)
[![Total Downloads](https://poser.pugx.org/presta/sonata-admin-extended-bundle/downloads.png)](https://packagist.org/packages/presta/sonata-admin-extended-bundle)

[![SensioLabsInsight](https://insight.sensiolabs.com/projects/21a9c095-6aff-4661-82a3-4b3b6f36f5e3/big.png)](https://insight.sensiolabs.com/projects/21a9c095-6aff-4661-82a3-4b3b6f36f5e3)
[![knpbundles.com](http://knpbundles.com/prestaconcept/PrestaSonataAdminExtendedBundle/badge)](http://knpbundles.com/prestaconcept/PrestaSonataAdminExtendedBundle)

## Overview

This bundle has been made to ease SonataAdmin installation and configuration for all our projects.

<div class="screenshot" markdown="1">
![PrestaSonataAdminExtendedBundle-Dashboard](/assets/presta-sonata-admin-extended/presta-sonata-admin-extended-dashboard.jpg)
</div>

## Installation

### Get the code

The easiest way is to use composer :

    php composer.phar require presta/sonata-admin-extended-bundle --no-update
    php composer.phar update presta/sonata-admin-extended-bundle

### Update your Kernel

{% highlight php %}
<?php
class AppKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = array(
            ...
            new Presta\SonataAdminExtendedBundle\PrestaSonataAdminExtendedBundle(),
            new Presta\SonataNavigationBundle\PrestaSonataNavigationBundle(),
            new Presta\SonataGedmoDoctrineExtensionsBundle\PrestaSonataGedmoDoctrineExtensionsBundle(),
        );
    }
}
{% endhighlight %}

### Generate your application bundles

    php app/console sonata:easy-extends:generate SonataAdminBundle
    php app/console sonata:easy-extends:generate SonataUserBundle
    php app/console sonata:easy-extends:generate SonataMediaBundle

-> Update 'ApplicationSonataAdminBundle' to extends 'PrestaSonataAdminExtendedBundle'

{% highlight php %}
<?php
class ApplicationSonataAdminBundle extends Bundle
{
    /**
     * {@inheritdoc}
     */
    public function getParent()
    {
        return 'PrestaSonataAdminExtendedBundle';
    }
}
{% endhighlight %}
### Update your Kernel

{% highlight php %}
<?php
class AppKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = array(
            ...
            new Application\Sonata\UserBundle\ApplicationSonataUserBundle(),
            new Application\Sonata\AdminBundle\ApplicationSonataAdminBundle(),
            new Application\Sonata\MediaBundle\ApplicationSonataMediaBundle()
        );
    }
}
{% endhighlight %}

### Make a custom layout

Create [src/Application/Sonata/AdminBundle/Resources/layout.html.twig (click to see complete code)](https://github.com/prestaconcept/symfony-prestacms/blob/master/src/Application/Sonata/AdminBundle/Resources/views/layout.html.twig).

### Configuration

Create a new configuration file : app/config/bundles/presta_sonata_admin_extended.yml

First, import all the configuration you need. There are several files so you can easily choose what you really need.

Configure your locales :

- locale: default for symfony
- locales : every front locales this is used by gedmo to translation your entities
- presta_sonata_admin_extended.locales: locales availables for your administration interface
- presta_sonata_admin_extended.default_locale: your admin default locale

Then add bundles to assetics and update default sonata configuration.

{% highlight yaml %}
imports:
    - { resource: '@PrestaSonataAdminExtendedBundle/Resources/config/config.yml' }
    - { resource: '@PrestaSonataAdminExtendedBundle/Resources/config/user/config.yml'}
    - { resource: '@PrestaSonataAdminExtendedBundle/Resources/config/user/config_navigation.yml' }
    - { resource: '@PrestaSonataAdminExtendedBundle/Resources/config/user/config_dashboard.yml' }
    - { resource: '@PrestaSonataAdminExtendedBundle/Resources/config/media/config.yml'}
    - { resource: '@PrestaSonataAdminExtendedBundle/Resources/config/media/config_navigation.yml' }
    - { resource: '@PrestaSonataAdminExtendedBundle/Resources/config/media/config_dashboard.yml' }

parameters:
    locale:  en
    locales: [fr, en]
    presta_sonata_admin_extended.locales: [fr, en]
    presta_sonata_admin_extended.default_locale: en

assetic:
    bundles:
        - SonataAdminBundle
        - PrestaSonataAdminExtendedBundle
        - ApplicationSonataAdminBundle

sonata_admin:
    title:      ' '
    title_logo: ./bundles/prestasonataadminextended/img/logo_title.jpg
    templates:
        # default global templates
        layout:  ApplicationSonataAdminBundle::layout.html.twig
        user_block: PrestaSonataAdminExtendedBundle:Core:user_block.html.twig
        dashboard:  PrestaSonataAdminExtendedBundle:Dashboard:two_columns.html.twig

{% endhighlight %}


## Working example

You should have a look at [symfony-prestacms project][1] for a ready to use installation of this bundles.


## How to get help and support

If you need help on one of our bundle, please register to our [google group][4] and ask you question.
You can open issues on github too.

[1]: https://github.com/prestaconcept/symfony-prestacms
[4]: https://groups.google.com/forum/?hl=fr&fromgroups#!forum/prestacms-devs
