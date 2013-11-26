---
layout: presta-cms-core-developer-guide
navigation_active: block.html

---

#Block System

## Overview

PrestaCms content is managed through blocks. Every pages and theme are divided in zones which contains blocks of different types.

Block system is based on [CMFBlockBundle][1] which extends [SonataBlockBundle][2].

Before going further, we suggest you read the [SonataBlockBundle][2] documentation which explain a lot of useful things.


## Configuration

By default, you can add every type of block you want in a page without any specific configuration.

### Exclude a block from choice list

However, for some reason, if you want to restrict the choice of adding blocks in your page, this is possible like follows:

{% highlight yaml %}
presta_cms_core:
    ...
    blocks:
        - excluded:
            - presta_cms.block.ajax
{% endhighlight %}

### Force some blocks to display in choice list

Maybe, on the contrary, if you want to force the display of **only** one (or several) block to add in the page, you can do it in this way:

{% highlight yaml %}
presta_cms_core:
    ...
    blocks:
        - accepted:
            - presta_cms.block.ajax
            - presta_cms.block.sitemap
{% endhighlight %}


## Block types

PrestaCMSCore handle basic block types :

-   Simple : A simple block contains a title, a text and a link to another CMS page.

<p class="center" markdown="1">
    ![Simple block](/assets/presta-cms-core/blocks/block-simple.jpg)
</p>

-   Sitemap : Sitemap block render a navigation under a defined root page. It can be used for a footer or sidebar navigation.

<p class="center" markdown="1">
    ![Sitemap block](/assets/presta-cms-core/blocks/block-sitemap.jpg)
</p>

-   Container : A container allow you to format page rendering.
Multiple format are available : 50/50, 1/3 - 2/3, ... Containers can contain any kind of other blocks.

<p class="center" markdown="1">
    ![Container block](/assets/presta-cms-core/blocks/block-container.jpg)
</p>

-   Page children : this block display a list of page children with a title and a description. It is usually used for
landing pages.

<p class="center" markdown="1">
    ![Page children block](/assets/presta-cms-core/blocks/block-page-children.jpg)
</p>

-   Ajax: Display some ajax content.
This allows to cache a full page and only refresh the block with ajax.
You have to include the *Resources/public/js/prestacmscore.js* file in your theme layout to use it.
An example is available here : [sandbox - Left sidebar layout][6].

Other bundle can easily add more block types to your application, for example you can have a look at [PrestaCMSMediaBundle][5]
which adds special blocks to render medias.


## Block base service

If you have read the [SonataBlockBundle][2] documentation you know that the two main elements of a block are template
and service class (responsible of rendering the block).

Common block features have been centralized in [BaseBlockService][3] so every new block service should extend it.

[BaseBlockService][3] commons features are :


-   provide the **translator**
-   automatically load the **template**
-   **preview** : block which used javascript or complex css features to render should provide a preview image to display it
in the administration screen (for example carousel).
-   **settingsRoute** : block which displays application entities (for example blog posts) should provide a settingsRoute which
is the sonata admin code of the entities listing.
A link to the corresponding admin list will be displayed in the page administration.


## Build your first block

Let's create a new block for listing blog post. Blog post have a custom administration done with sonata.

Our bundle will have an editable title and an option to set the number of post to display.

We supposed that your bundle is in src/Presta/Blog and Blog Post CRUD is already done.

### The service

Create a service class which extends the base one.

As our block is linked to Blog Post, we will set the settingRoute to link it, we will also add a preview.

As we need to make query to Post repository, we will use *getAdditionalViewParameters* method to give additional
parameters to the view.

We need to configure the edit form to add an entry for the number of posts to display and as we need a default number
we will set it in the *getDefaultSettings()*

So here is how the code looks like :

File : *src/Presta/Blog/Block/Post/ListBlockService.php*

{% highlight php %}
<?php
namespace Presta\Blog\Block\Post;

use Sonata\BlockBundle\Model\BlockInterface;
use Presta\CMSCoreBundle\Block\BaseBlockService;
use Doctrine\ORM\EntityRepository;

/**
 * @author Nicolas Bastien <nbastien@prestaconcept.net>
 */
class ListBlockService extends BaseBlockService
{
    /**
     * @var string
     */
    protected $preview = 'bundles/prestablog/theme/sandbox/admin/img/block/blog_post_list.jpg';

    /**
     * @var string
     */
    protected $settingsRoute = 'admin_presta_blog_post_list';

    /**
     * @var string
     */
    protected $template = 'PrestaBlogBundle:Block\Blog\Post:block_list.html.twig';

    /**
     * @var EntityRepository
     */
    protected $repository;

    /**
     * @param $container
     */
    public function setContainer($container)
    {
        $this->repository = $container->get('doctrine')->getRepository('PrestaBlogBundle:Blog\Post');
    }

    /**
     * {@inheritdoc}
     */
    protected function getAdditionalViewParameters(BlockInterface $block)
    {
        $settings = array_merge(
            $this->getDefaultSettings(),
            $block->getSettings()
        );

        $settings['posts'] = $this->repository->getActiveList($settings['nb_posts']);

        return $settings;
    }

    /**
     * {@inheritdoc}
     */
    public function getFormSettings(FormMapper $formMapper, BlockInterface $block)
    {
        return array(
            array('nb_posts', 'integer', array('required' => false, 'label' => $this->trans('form.label_nb_posts')))
        );
    }

    /**
     * {@inheritdoc}
     */
    public function getDefaultSettings()
    {
        return array(
            'nb_posts' => 0
        );
    }
}
{% endhighlight %}

### The template

Second part is to build the corresponding template.

As we set the $template variable in the block service, we have to add *PrestaBlogBundle:Block\Blog\Post:block_list.html.twig* file.

Every template should extends the default one which adds default structure and ids.

{% highlight html %}
{% raw %}
{% extends 'PrestaCMSCoreBundle:Block:base_block.html.twig' %}

{% block block %}
    <h2>{{ settings.title }}</h2>
    <ul id="post-list">
        {% for post in posts %}
            <li>
                <h3>{{ post.tile }}</h3>
                <p>{{ post.description }}</p>
            </li>
        {% endfor %}
    </ul>
{% endblock %}
{% endraw %}
{% endhighlight %}


### Configuration

Now our block is nearly over, we just need to register the new service and to add a special tag for PrestaCMS.

File : /src/Presta/BlogBundle/Resources/config/services.yml

{% highlight yaml %}
services:
    ...
    #Blocks
    presta_blog.block.post.list:
        class: Presta\BlogBundle\Block\Post\ListBlockService
        parent: presta_cms.block.base
        tags:
            - {name: sonata.block}
            - {name: presta_cms.block}
        calls:
            - [ setContainer, [@service_container]]
{% endhighlight %}

Tag *presta_cms.block* allow BlockManager to retrieve it and to use it in the available block list.

And some translation for the admin interface : *PrestaCMSCoreBundle.en.yml*

{% highlight yaml %}
    block.title.presta_blog.block.post.list: Latest posts
    block.description.presta_blog.block.post.list: This blocks displays lasted blog posts
{% endhighlight %}

---
&rarr; Let's continue with [block advanced features][4].

[1]: http://symfony.com/doc/master/cmf/bundles/block/index.html
[2]: http://sonata-project.org/bundles/block/master/doc/index.html
[3]: https://github.com/prestaconcept/PrestaCMSCoreBundle/blob/master/Block/BaseBlockService.php
[4]: /presta-cms-core/developer-guide/models.html#content
[5]: /presta-cms-media
[6]: http://sandbox.prestacms.com/demo/left-sidebar
