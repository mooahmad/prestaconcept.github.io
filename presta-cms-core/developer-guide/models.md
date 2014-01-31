---
layout: presta-cms-core
navigation_active: models.html

---


# Advanced block - Working with models


## Overview

In the [previous section][1] you learnt how to make simple blocks.

Now for a professional website you will quickly need to go a step further and add other kind of thing like :

-   media
-   description of a product entity
-   picture of a user in a comment block
-   ...

So you need a way to link your block to your custom models.


## ORM Models

To make your life easier we add a useful base class [BaseModelBlockService][2] to add useful methods to handle models.

All you need to do is to extends this base class and to override *getModelFields()* method.

Let's say we want to add a link to a media, stored with Sonata Media. Our block *getModelFields()* method will
look like this :

{% highlight php %}
<?php
class MyBlockService extends BaseModelBlockService
{
    /**
     * {@inheritdoc}
     */
    protected function getModelFields()
    {
        return array(
            'media' => 'sonata.media.admin.media'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function getDefaultSettings()
    {
        return array(
            'media'  => null
        );
    }
}
{% endhighlight %}

Now you can use it in your template like this :

{% highlight html %}
{% raw %}

{% extends 'PrestaCMSCoreBundle:Block:base_block.html.twig' %}

{% block block %}
    {% if (settings.media) %}
        <div class="cms-block-media-container">
            {% media settings.media, small %}
        </div>
    {% endif %}
{% endblock %}

{% endraw %}
{% endhighlight %}


## Content Models

To link your blocks to content store in PHPCR will be as easy as the previous one.

We just have another method to use : *getContentModelFields()*

Let's say you want to add a link to a page stored in PrestaCMS. Your block will look like this :

{% highlight php %}
<?php

class MyBlockService extends BaseModelBlockService
{
    /**
     * {@inheritdoc}
     */
    protected function getContentModelFields()
    {
        return array('link_destination' => 'presta_cms.admin.page');
    }

    /**
     * {@inheritdoc}
     */
    public function getDefaultSettings()
    {
        return array(
            'link_destination'  => null
        );
    }
}
{% endhighlight %}

Now you can use it in your template like this :

{% highlight html %}
{ % if (settings.link_destination|length) % }
    <div class="cms-block-link-container">
        <a href="{ % if (block.isAdminMode) % }#{ % else % }{{ path(settings.link_destination) }}{ % endif % }">
            My link to a page
        </a>
    </div>
{ % endif % }
{% endhighlight %}

This example also show you how to use the *block.isAdminMode* method.

As block will be rendered in the administration website, we don't want have multiple link to the front on page edition.

Usually this lost administrator easily so we just remove the real links in admin mode.


## Declaration of a model block

Model blocks declaration only differs on the parent attribute.
Parent should be set to "presta_cms.block.model.base" which set the admin pool.

{% highlight xml %}
<container xmlns="http://symfony.com/schema/dic/services"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://symfony.com/schema/dic/services http://symfony.com/schema/dic/services/services-1.0.xsd">

    <parameters>
        <parameter key="presta_cms.block.list.class">Presta\CMSMediaBundle\Block\ListBlockService</parameter>
    </parameters>

    <services>
        <service id="presta_cms.block.list" class="%presta_cms.block.list.class%" parent="presta_cms.block.parent.base">
            <tag name="sonata.block"/>
            <tag name="presta_cms.block"/>
        </service>
    </services>
</container>
{% endhighlight %}

---
Congratulation, now you're mastering block system.

&rarr; Let's go deeper and [discovering Pages][3].

[1]: /presta-cms-core/developer-guide/block.html#content
[2]: https://github.com/prestaconcept/PrestaCMSCoreBundle/blob/master/Block/BaseModelBlockService.php
[3]: /presta-cms-core/developer-guide/block.html#content
[3]: /presta-cms-core/developer-guide/page.html#content
