---
layout: presta-cms-core
title: PrestaCMS Features
section_active: overview
navigation_active: features
---

## Multiple websites

PrestaCMS is made to handle multiple website with different languages.

Each website has its content structure which can be translated into every languages available for the website.

[Website administration demonstration][8]

## Custom themes with content administration

PrestaCMS comes with a theming system. For more information about themes, please have a look at the [theming guide][1]

Your project can have multiple themes, and you can plug each website on a different one.

You can administrate your content on each theme. Basically a theme content is a content available on every page of your site.
For example, a footer or header block.

Content is not shared between websites so you can have two different websites plug on the same theme but with different content.

[Theme administration demonstration][9]

## Page administration

Page administration allows you to customise every page of your sites.

Many features are available like :

- add/remove blocks
- edit content
- edit SEO data
- clear the cache
- add/remove a page

[Page administration demonstration][10]

## Multilingual

Translations are directly handled by PHPCR : each nodes can have multiple translations.

For other parts of your project, translations are simply handle like Symfony 2 does.
Please have a look at [Symfony2 translation][2] page for more informations.

## Strong block system

As PrestaCMS is based on [Sonata-Project][3], it takes advantage of its [strong block system][4].

Every new bundles can declare new blocks and they will be automatically handled by PrestaCMS.

More details about how to create blocks are available in the [developer guide][5].


## Cache system

Right now PreastCMS just handle fullpage cache.

As this is really an important point in every web application, this part will be developed to be able to render page with
different cache mode.


## Design to be extensible

As every project is different, PrestaCMS has been developed to be extended easily.

To customize your site you can :

- make custom themes
- make custom blocks
- extend existing blocks
- extend a lot of core : models, factories...
- take advantage of [Symfony2 Bundle Inheritance][6] system
- create new page type
...

More details about how to extend PrestaCMS are available in the [developer guide][7].



[1]: /presta-cms-core/theming-guide/index.html
[2]: http://symfony.com/doc/current/book/translation.html
[3]: http://sonata-project.org/bundles/
[4]: http://sonata-project.org/bundles/block/master/doc/index.html
[5]: /presta-cms-core/developer-guide/block.html
[6]: http://symfony.com/doc/current/cookbook/bundles/inheritance.html
[7]: /presta-cms-core/developer-guide/extending.html
[8]: http://sandbox.prestacms.fr/admin/presta/cmscore/website/list
[9]: http://sandbox.prestacms.fr/admin/cms/theme/edit/creative
[10]: http://sandbox.prestacms.fr/admin/cms/page/edit?locale=en&_locale=&website=%2Fwebsite%2Fsandbox&id=website%2Fsandbox%2Fmenu%2Fmain%2Fhome
