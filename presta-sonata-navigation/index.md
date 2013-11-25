---
layout: presta-sonata-navigation
title: PrestaSonataNavigationBundle Documentation
navigation:
    - { link: "overview", title: "Overview" }
    - { link: "installation", title: "Installation" }
    - { link: "add_new_menu_entry", title: "Add new menu entry" }
    - { link: "how_to_get_help_and_support", title: "Help and support" }

---

#PrestaSonataNavigationBundle

[![Build Status](https://secure.travis-ci.org/prestaconcept/PrestaSonataNavigationBundle.png?branch=master)](http://travis-ci.org/prestaconcept/PrestaSonataNavigationBundle)
[![Scrutinizer Quality Score](https://scrutinizer-ci.com/g/prestaconcept/PrestaSonataNavigationBundle/badges/quality-score.png?s=00888f95880ed208af842bfd35eece9b993c0d62)](https://scrutinizer-ci.com/g/prestaconcept/PrestaSonataNavigationBundle/)
[![Latest Stable Version](https://poser.pugx.org/presta/sonata-navigation-bundle/v/stable.png)](https://packagist.org/packages/presta/sonata-navigation-bundle)
[![Total Downloads](https://poser.pugx.org/presta/sonata-navigation-bundle/downloads.png)](https://packagist.org/packages/presta/sonata-navigation-bundle)

[![SensioLabsInsight](https://insight.sensiolabs.com/projects/08074de8-32da-42cb-b2e4-a273f893bd77/big.png)](https://insight.sensiolabs.com/projects/08074de8-32da-42cb-b2e4-a273f893bd77)
[![knpbundles.com](http://knpbundles.com/prestaconcept/PrestaSonataNavigationBundle/badge)](http://knpbundles.com/prestaconcept/PrestaSonataNavigationBundle)

## Overview

Base Sonata Admin only allow you to add CRUD entry in it's main navigation.

PrestaSonataNavigationBundle allow you to add custom action (for example PrestaCMS page administation) in SonataAdmin main
navigation menu.

This bundle allow you to finely tune user right on each menu entry and add the possibility to have an extra description for each sub menu.


## Installation

### Get the code

The easiest way is to use composer :

    php composer.phar require presta/sonata-navigation-bundle --no-update
    php composer.phar update presta/sonata-navigation-bundle

### Update your Kernel

{% highlight php %}
<?php
class AppKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = array(
            ...
            new Presta\SonataNavigationBundle\PrestaSonataNavigationBundle()
        );
    }
}
{% endhighlight %}

### Add it to you layout

If not already done, extends your sonata admin layout.

The best way to do that is to easy-extends SonataAdminBundle like this :

    php app/console sonata:easy-extends:generate SonataAdminBundle --dest=src

Then create a new template: Application\Sonata\AdminBundle\Resources\views\layout.html.twig

This template code should look like this :

{% highlight html %}
{% raw %}
{% extends 'SonataAdminBundle::standard_layout.html.twig' %}

{% block sonata_top_bar_nav %}
    {{ knp_menu_render('presta_sonata_navigation.menu.main', {'allow_safe_labels' : true}, 'list') }}
{% endblock %}
{% endraw %}
{% endhighlight %}

### Try PrestaSonataAdminExtendedBundle

Navigation is just one of our utils for SonataAdmin, maybe you should [try our Admin extended bundle](https://github.com/prestaconcept/PrestaSonataAdminExtendedBundle).


## Add new menu entry

### Configuration

Now you just need to add some configuration to add new entry in your navigation. Here is an example taken from
[PrestaSonataAdminExtendedBundle](https://github.com/prestaconcept/PrestaSonataAdminExtendedBundle/blob/master/Resources/config/user/config_navigation.yml)

{% highlight yaml %}
presta_sonata_navigation:
    menu:
        items:
            user:
                route: admin_sonata_user_user_list
                roles:
                    - ROLE_ADMIN_USER
                children:
                    users:
                        route: admin_sonata_user_user_list
                    groups:
                        route: admin_sonata_user_group_list
{% endhighlight %}

Pay attention to the "roles" entry which allow you to define user role to access this menu.

### Translations

By default, navigation translation are made with PrestaSonataNavigationBundle translation domain so you will need to add
a `PrestaSonataNavigationBundle.en.xliff` file (or yml if you want) to add you new menu entries.

You want to disable description you just need to add 'with_description: false' configuration under presta_sonata_navigation.

{% highlight yaml %}
presta_sonata_navigation:
    menu:
        with_description: false
        items:
            ...
{% endhighlight %}

# How to get help and support

If you need help on one of our bundle, please register to our [google group][4] and ask you question.
You can open issues on github too.

[4]: https://groups.google.com/forum/?hl=fr&fromgroups#!forum/prestacms-devs
