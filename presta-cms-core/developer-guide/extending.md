---
layout: presta-cms-core
title: Extending PrestaCMS
subtitle: because we need something different
section_active: developer-guide
navigation_active: extending

---

## Overview

This section list every possible way to easily extend and customize your PrestaCMS application.

As we use Symfony 2 you should have a look at the documentation :

-   [How to Override any Part of a Bundle][1]
-   [How to use Bundle Inheritance to Override parts of a Bundle][2]

## Make custom block type

Make custom block types is the first thing to do to fit your needs.

Every step to create a new block type are detailed in the [block model section][3].

If you want to go a step further with block, you should check the [working with models section][4].

## Override default classes

In PrestaCMS, services and models classes are declared with parameters.

That means that if you need to override a special class, you just have to override the corresponding parameter in
your application.

With this way you can easily extends :

-   factory
-   models
-   page types
-   block types

For example, one common thing to do is to extends page factory. This is the best way to add default blocks to your pages.

To do this, just override the factory class name in your configuration :

In *app/config/bundles/presta_cms_core.yml* or any bundle configuration or service declaration :

{% highlight yaml %}
parameters:
    presta_cms.page.factory.class: Application\Presta\CMSCoreBundle\Factory\PageFactory
{% endhighlight %}

Now you can create your own factory. Have a look at [the sandbox one][5] for a working example.

If you need something else, please ask it or make a pull request.

## EventListener

{% raw  %}
    [ WIP ]
{% endraw %}


## Make a theme

Building a custom theme is a huge topic.

&rarr; We made a special [theming guide][6] for this.

## Override templates

Overriding templates can be a easy way to customize block rendering.

As we use Symfony 2 you should have a look at the documentation :

-   [How to Override any Part of a Bundle][1]
-   [How to use Bundle Inheritance to Override parts of a Bundle][2]

## Make page types

If all of this is not enough [page types][7] should be what you need.

---
This is the end of developer guide documentation.

Now if you want to go deeper, you should have a look at the documentation of projects we used.

&rarr; To help your research we made a [Useful documentation page][8].

[1]: http://symfony.com/doc/current/cookbook/bundles/override.html
[2]: http://symfony.com/doc/current/cookbook/bundles/inheritance.html
[3]: /presta-cms-core/developer-guide/block.html#content
[4]: /presta-cms-core/developer-guide/models.html#content
[5]: https://github.com/prestaconcept/prestacms-sandbox/blob/master/src/Application/Presta/CMSCoreBundle/Factory/PageFactory.php
[6]: /presta-cms-core/theming-guide/index.html
[7]: /presta-cms-core/developer-guide/page.html#content
[8]: /presta-cms-core/developer-guide/docs.html#content


