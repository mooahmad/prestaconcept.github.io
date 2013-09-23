---
layout: presta-cms-core-developer-guide
navigation_active: block.html

---

#Block System

## Overview

PrestaCms content in managed trought blocks. Every pages and theme are divided in zones which contains blocks of different types.

Block system in based on [CMFBlockBundle][1] which extends [SonataBlockBundle][2].

Before going further, we suggest you read the [SonataBlockBundle][2] documentation which explain a lot of useful step.


## Block types

PrestaCMSCore handle basic block types :

-   Simple : A simple block contains a title, a text, a link to another CMS page.

![Simple block](/assets/presta-cms-core/blocks/block-simple.jpg)

-   Sitemap : Sitemap block render a navigation under a defined root page. It can be used for a footer or sidebar navigation.

![Sitemap block](/assets/presta-cms-core/blocks/block-sitemap.jpg)

-   Container : A container allow you to format page rendering.
Multiple format are available : 50/50, 1/3 - 2/3.... Containers can contain any kind of other blocks.

![Container block](/assets/presta-cms-core/blocks/block-container.jpg)

-   Page children : this blocks display a list of page children with a title and a description. It is usually used for
step pages

![Page children block](/assets/presta-cms-core/blocks/block-page-children.jpg)


Other bundle can easily add more block types to your application, for example you can have a look at [PrestaCMSMediaBundle][5]
which adds different blocks to render medias.


## Block base service

If you have read the [SonataBlockBundle][2] documentation you should now that two main elements of a block are a template
and a service class responsible of rendering the block.

Common block features have been centralized in [BaseBlockService][3] so every new block service should extend it.

[BaseBlockService][3] commons features are :


-   provide the **translator**
-   automatically load the **template**
-   **preview** : block which used javascript or complex css features to render should provide a preview image to display it
in the administration screen. For example a carousel.
-   **settingsRoute** : block which displays application entities (for example blog posts) should provide a settingsRoute which
is the sonata admin code of the entities listing.
A link to the corresponding admin listing will be displayed in the page administration.


## Build your first block

### The service

### The template

### Configuration


Let's continue with [block advanced features][5].

[1]: http://symfony.com/doc/master/cmf/bundles/block/index.html
[2]: http://sonata-project.org/bundles/block/master/doc/index.html
[3]: https://github.com/prestaconcept/PrestaCMSCoreBundle/blob/master/Block/BaseBlockService.php
[4]: /presta-cms-core/developer-guide/models.html#content
[5]: /presta-cms-media
