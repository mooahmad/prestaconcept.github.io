---
layout: presta-cms-core-developer-guide
navigation_active: getting-started.html

---

# Getting started with PrestaCMS


## Understanding key concepts

### Website

PrestaCMS is made to handle multiple website so the first step is to create a website which will be the entry point
for all its content structure.

PrestaCMS use configuration to load websites.

Each websites can have different languages and different environment (staging), each one bind to a given url.
That means that you have to configure the locale, environment and website foreach urls.

### Page

Each page of your site handle by PrestaCMS correspond to a Page model.

Page model can have different types, PrestaCMS core basic type is called 'cms_type'. This divided the page into "Zone"
and each zone can store a collection of blocks.

Page use templates to define their zone and block structure.

PrestaCMS core defines basic blocks : Simple, Sitemap, PageChildren and Breadcrumb.

The block system is based on [sonata-block][1], you can define new block types to customise your site. You can have a look
at [PrestaCMSMediaBundle][2] to have examples of block using media entities.

PrestaCMS page type system make it easy to customize. You can create new types of page and declare new tabs for administrate it.

### Menu

Menu system is based on the [CMFMenuBundle][3]. Every menu have several menu nodes which are linked to pages.
You can use several menus for a website, for example : main navigation, footer navigation...

### Routing

Routing system is based on the [CMF Routing][4] also used by other great projects like [EzPublish5 and Drupal 8][5]

A page must by linked to a route to be reachable.
A page will have a route for each of its language version.

For example :

-   [http://sandbox.prestacms.com/about][6]
-   [http://sandbox.prestacms.fr/a-propos][7]

are two urls. Each one corresponding to a route.

Each route are linked to the about page which is rendered in english or french depending on website configuration.

So if you follow, in that case we have :

-   one website : /website/sandbox
-   one page : /website/sandbox/page/about
-   but two routes

### Theme

Theme system took some inspiration in Drupal one.

Theme have two goals :

- the first one is obviously form design purpose.
It allows you to centralize designer and web integrator codes and to provide multiple design for your sites.

- the second one is to centralize content which is present on all your site.
For example a footer or header block.

Themes have a dedicated administration.

You can find more information about themes in the [Theming guide][8].


### Fixtures

As you can see PrestaCMS use several models to render a website.

Most of the time professionals websites have defined structure and type of page.
That's why we never start from an empty website and begin with greating fixtures to build the page structure, the menus,
the routing and page template structure (ie: zone and blocks).

As this is u need to understand how PrestaCMS works before building your data, we suggest you to follow next section
of this guide before [coding your fixtures][9].

Let's continue with the [block system][10].


[1]: https://github.com/prestaconcept/PrestaCMSMediaBundle
[2]: http://sonata-project.org/bundles/block/master/doc/index.html
[3]: http://symfony.com/doc/current/cmf/bundles/menu.html
[4]: http://symfony.com/doc/current/cmf/book/routing.html
[5]: http://blog.liip.ch/archive/2013/01/09/symfony-cmf-what-is-left-todo.html
[6]: http://sandbox.prestacms.com/about
[7]: http://sandbox.prestacms.fr/a-propos
[8]: /presta-cms-core/theming-guide/index.html
[9]: /presta-cms-core/developer-guide/fixtures.html#content
[10]: /presta-cms-core/developer-guide/block.html#content