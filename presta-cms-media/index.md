---
layout: presta-cms-media-default
title: PrestaCMSMediaBundle Documentation
navigation:
    - { link: "overview", title: "Overview" }
    - { link: "media_and_media_advanced", title: "Media" }
    - { link: "gallery_and_gallery_advanced", title: "Gallery" }
    - { link: "carousel", title: "Carousel" }
    - { link: "customize_it_for_your_project_need", title: "Customize" }
    - { link: "ask_for_help", title: "Help & Support" }
    - { link: "how_to_contribute", title: "Contribute" }

---


# PrestaCMSMediaBundle Documentation

[![Build Status](https://secure.travis-ci.org/prestaconcept/PrestaCMSMediaBundle.png)](http://travis-ci.org/prestaconcept/PrestaCMSMediaBundle)
[![Total Downloads](https://poser.pugx.org/presta/cms-media-bundle/downloads.png)](https://packagist.org/packages/presta/cms-media-bundle)
[![Latest Stable Version](https://poser.pugx.org/presta/cms-media-bundle/v/stable.png)](https://packagist.org/packages/presta/cms-media-bundle)

[![SensioLabsInsight](https://insight.sensiolabs.com/projects/d4e48cf2-8182-4eae-a7aa-f2c370cffb55/big.png)](https://insight.sensiolabs.com/projects/d4e48cf2-8182-4eae-a7aa-f2c370cffb55)
[![knpbundles.com](http://knpbundles.com/prestaconcept/PrestaCMSMediaBundle/badge)](http://knpbundles.com/prestaconcept/PrestaCMSMediaBundle)

## Overview

PrestaCMSMediaBundle integrates Sonata Media in [PrestaCMS][1].

For a ready to use demonstration of PrestaCMS you should check the [prestacms-sandox available on github][7].

This bundles adds a the following block type to your project :

-   Media Simple
-   Media Advanced
-   Gallery Simple
-   Gallery Advanced
-   Carousel

Feel free to use it, extends it or take it as an example for your own block.

## Media and Media advanced

This blocks allow you to add a sonata media.

The advanced media adds a title, a content and handle a layout parameter which allow you to have different rendering with the same block.

Here is an exemple with Creative theme :

![Media advanced](/assets/presta-cms-media/block-media.jpg)

## Gallery and Gallery advanced

The same thing for rendering galleries

Here is an exemple with Creative theme :

![Gallery advanced](/assets/presta-cms-media/block-gallery.jpg)

## Carousel

Carousel block allow you to add carousel based on a Sonata gallery. It contains three type of format : full, medium and small to be easilly integrated in any kind of container.

Here is an exemple with Creative theme :

![Carousel](/assets/presta-cms-media/block-carousel.jpg)


## Customize it for your project need

### Change rendering

This bundle provides blocks with a basic HTML structure, if you need to add some HTML elements, css class... the best way is to benefit of [Symfony 2
way to override template][5].

First use easy-extends to generate your application bundle :

    php app/console sonata:easy-extends:generate PrestaCMSMediaBundle --dest=src

Then you just need to override the template you need.

### Add settings

If you need to add settings or functionnality, create your own application bundle with the command line above and create your own block.

Then either you need it as a new block and you should register it as a block service or you just want it to override the default block and you should
add a parameter for the corresponding block class.

Have a look at the [services.yml][6] file for a full list of parameters :

-   Carousel : %presta_cms.block.carousel.class%
-   Media : %presta_cms.block.media.class%
-   Media Advanced : %presta_cms.block.media_advanced.class%
-   Gallery : %presta_cms.block.gallery.class%
-   Gallery Advanced : %presta_cms.block.gallery_advanced.class%

## Ask for help ##

If you need help about this project you can [post a message on our google group][3]

## How to contribute ##

The best way to contribute is to use Github Pull Request system. Any contributions like translation, documentation, bug reporting...

This bundle is not meant to contain complex template or js librairies.

If you want to make advanced rendering maybe the best way to do that is to build a theme.


[1]: https://github.com/prestaconcept/PrestaCMSCoreBundle
[2]: https://github.com/prestaconcept/prestacms-sandbox
[3]: https://groups.google.com/forum/?hl=fr&fromgroups#!forum/prestacms-devs
[4]: http://sonata-project.org/bundles/media/master/doc/reference/installation.html
[5]: http://symfony.com/doc/2.0/book/templating.html#overriding-bundle-templates
[6]: https://github.com/prestaconcept/PrestaCMSMediaBundle/blob/master/Resources/config/services.yml
[7]: http://sandbox.prestacms.fr/medias/media
