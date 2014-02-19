---
layout: sidebar
title: PrestaCMSMediaBundle
subtitle: Integrates Sonata Media in PrestaCMS
navigation_mode: anchor
navigation:
    - { id: "overview", link: "overview", title: "Overview" }
    - { id: "media_and_media_advanced", link: "media_and_media_advanced", title: "Media" }
    - { id: "gallery_and_gallery_advanced", link: "gallery_and_gallery_advanced", title: "Gallery" }
    - { id: "carousel", link: "carousel", title: "Carousel" }
    - { id: "customize_it_for_your_project_need", link: "customize_it_for_your_project_need", title: "Customize" }
    - { id: "ask_for_help", link: "ask_for_help", title: "Help & Support" }
    - { id: "how_to_contribute", link: "how_to_contribute", title: "Contribute" }
navigation_active: overview
---

[![Build Status](https://secure.travis-ci.org/prestaconcept/PrestaCMSMediaBundle.png)](http://travis-ci.org/prestaconcept/PrestaCMSMediaBundle)
[![Total Downloads](https://poser.pugx.org/presta/cms-media-bundle/downloads.png)](https://packagist.org/packages/presta/cms-media-bundle)
[![Latest Stable Version](https://poser.pugx.org/presta/cms-media-bundle/v/stable.png)](https://packagist.org/packages/presta/cms-media-bundle)

[![SensioLabsInsight](https://insight.sensiolabs.com/projects/d4e48cf2-8182-4eae-a7aa-f2c370cffb55/big.png)](https://insight.sensiolabs.com/projects/d4e48cf2-8182-4eae-a7aa-f2c370cffb55)
[![knpbundles.com](http://knpbundles.com/prestaconcept/PrestaCMSMediaBundle/badge)](http://knpbundles.com/prestaconcept/PrestaCMSMediaBundle)

## Overview

PrestaCMSMediaBundle integrates Sonata Media in [PrestaCMS][1].

For a ready to use demonstration of PrestaCMS, you should check the [prestacms-sandox available on github][7].

This bundles adds the following block type to your project :

-   Media Simple
-   Media Advanced
-   Gallery Simple
-   Gallery Advanced
-   Carousel

Feel free to use it, extend it or take it as an example for your own block.

## Media and Media advanced

This block allows you to add a sonata media.

The advanced media adds a title, a content and handle a layout parameter which allows you to have different rendering with the same block.

Here is an example with Creative theme :

<div class="screenshot" markdown="1">
![Media advanced](/assets/presta-cms-media/block-media.jpg)
</div>

## Gallery and Gallery advanced

The same thing for rendering galleries

Here is an example with Creative theme :

<div class="screenshot" markdown="1">
![Gallery advanced](/assets/presta-cms-media/block-gallery.jpg)
</div>

## Carousel

Carousel block allows you to add carousel based on a Sonata gallery. It contains three types of format : full, medium and small to be easily integrated in any kind of container.

Here is an example with Creative theme :

<div class="screenshot" markdown="1">
![Carousel](/assets/presta-cms-media/block-carousel.jpg)
</div>

## Customize it for your project needs

### Change rendering

This bundle provides blocks with a basic HTML structure, if you need to add some HTML elements, css class... the best way is to benefit of [Symfony 2
way to override template][5].

First use easy-extends to generate your application bundle :

    php app/console sonata:easy-extends:generate PrestaCMSMediaBundle --dest=src

Then you only need to override the template you need.

### Add settings

If you need to add settings or functionalities, create your own application bundle with the command line above and create your own block.

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
