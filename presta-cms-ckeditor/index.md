---
layout: sidebar
title: PrestaCMSCKEditorBundle
subtitle: CKEditor integration in PrestaCMS with SonataMedia and internal page links
navigation_mode: anchor
navigation:
    - { id: "overview", link: "overview", title: "Overview" }
    - { id: "installation", link: "installation", title: "Installation" }
    - { id: "usage", link: "usage", title: "Usage" }
    - { id: "how_to_get_help_and_support", link: "how_to_get_help_and_support", title: "Help and support" }
navigation_active: overview
---

[![Build Status](https://secure.travis-ci.org/prestaconcept/PrestaCMSCKEditorBundle.png?branch=master)](http://travis-ci.org/prestaconcept/PrestaCMSCKEditorBundle)
[![Scrutinizer Quality Score](https://scrutinizer-ci.com/g/prestaconcept/PrestaCMSCKEditorBundle/badges/quality-score.png?s=49843af186b540a300705d9f77afa43507253297)](https://scrutinizer-ci.com/g/prestaconcept/PrestaCMSCKEditorBundle/)
[![Latest Stable Version](https://poser.pugx.org/presta/cms-ckeditor-bundle/v/stable.png)](https://packagist.org/packages/presta/cms-ckeditor-bundle)
[![Total Downloads](https://poser.pugx.org/presta/cms-ckeditor-bundle/downloads.png)](https://packagist.org/packages/presta/cms-ckeditor-bundle)

[![SensioLabsInsight](https://insight.sensiolabs.com/projects/354dd545-c7b9-4823-bcb9-46cb4ccfea0d/big.png)](https://insight.sensiolabs.com/projects/354dd545-c7b9-4823-bcb9-46cb4ccfea0d)
[![knpbundles.com](http://knpbundles.com/prestaconcept/PrestaCMSCKEditorBundle/badge)](http://knpbundles.com/prestaconcept/PrestaCMSCKEditorBundle)

## Overview

The goal of this bundle is to integrate [CKEditor][1] in PrestaCMS with SonataMedia and internal page links.

## Requirements

PrestaCMSCKEditorBundle require :
-   [PrestaComposerPublicBundle][8] ([documentation](../presta-composer-public/)) to provide [CKEditor][1] integration.
-   [CoopTilleulsCKEditorSonataMediaBundle][2] ([documentation][2]) that override default media integration.


## Installation

### Get the code

The easiest way is to use composer :

    php composer.phar require presta/cms-ckeditor-bundle --no-update
    php composer.phar update presta/cms-ckeditor-bundle

### Update your Kernel

{% highlight php %}
<?php
class AppKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = array(
            ...,
            new Presta\CMSCKEditorBundle\PrestaCMSCKEditorBundle()
        );
    }
}
{% endhighlight %}

## Usage

Now, PrestaCMS block edit looks like :

<div class="screenshot" markdown="1">
![PrestaCMSCKEditorBundle preview](/assets/presta-cms-ckeditor/preview.png)
</div>

Left red highlighted button provides internal links to PrestaCMS pages.

Right one is media integration, overrided by [CoopTilleulsCKEditorSonataMediaBundle][2] to add [SonataMediaBundle](https://github.com/sonata-project/SonataMediaBundle) integration.


## Extending

If you need special CKeditor configuration, just [override bundle template](http://symfony.com/doc/current/book/templating.html#overriding-bundle-templates)
`Presta\CMSCKEditorBundle\Resources\views\include\layout.html.twig`

## Example

[PrestaCMSCKEditorBundle][3] use [PrestaComposerPublicBundle][8] to integrate CKEditor in PrestaCMS with SonataMedia and page links.

For a ready to use demonstration of those bundle you should check the [prestacms-sandbox available on github][5].

Sandbox is also deployed for a live demonstration :

-   [Frontend site][6]
-   [Administration Site][7]

## How to get help and support

If you need help on one of our bundle, please register to our [google group][4] and ask you question.
You can open issues on github too.


[1]: https://github.com/ckeditor/ckeditor-releases
[2]: https://github.com/coopTilleuls/CoopTilleulsCKEditorSonataMediaBundle
[3]: https://github.com/prestaconcept/PrestaCMSCKEditorBundle
[4]: https://groups.google.com/forum/?hl=fr&fromgroups#!forum/prestacms-devs
[5]: https://github.com/prestaconcept/prestacms-sandbox
[6]: http://sandbox.prestacms.com/
[7]: http://sandbox.prestacms.com/admin
[8]: https://github.com/prestaconcept/PrestaComposerPublicBundle
