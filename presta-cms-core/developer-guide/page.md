---
layout: presta-cms-core
title: PrestaCMS Page type
subtitle: help standardize your content
section_active: developer-guide
navigation_active: page

---

## Overview

PrestaCMS has been made to be extensible.

As people may want to find other way to administrate their content, we set up a page type system.

Right now, core only handle CMS type. In version 1.1 we will add a "Secured CMS" type to handle role and secured site area.


## How it works

A page type class is a model which extends [PageTypeInterface][1].

[PageTypeInterface][1] defines several methods. Their goal is to code how your page type should render in front and admin.

### basic methods

-   *getId()* return type identifier
-   *getDefaultSettings()* same as the block one

### admin methods

Page administration is composed with tabs, so admin methods are used to declare new tabs and corresponding content:

-   *getEditTabs()* to declare new tabs
-   *getEditTabData()* to get corresponding tab data
-   *getEditTabTemplate()* allow us to handle each tab with a custom template

### front method

Front is simple, just need data to render:

-   *getData(Page $page)*

## Make a new page type

Making a new page type can be useful to enhanced default CMS type.

For example, let's say you want to add a new tab to add author information. This tab will display a form with author
name, description...


{% highlight php %}
<?php
namespace My\Bundle\Model\Page;

use Presta\CMSCoreBundle\Model\Page\PageTypeCMSPage;
use Presta\CMSCoreBundle\Model\Page\PageTypeInterface;

/**
 * Handle author information
 *
 * @author Nicolas Bastien <nbastien@prestaconcept.net>
 */
class PageTypeAuthorCMSPage extends PageTypeCMSPage implements PageTypeInterface
{
    /**
     * {@inheritdoc}
     */
    public function getId()
    {
        return 'my_bundle.page_type.author_cms_page';
    }

    /**
     * {@inheritdoc}
     */
    public function getDefaultSettings()
    {
    }

    /**
     * {@inheritdoc}
     */
    public function getEditTabs()
    {
        return array_merge(parent::getEditTabs(), array('author' => 'author'));
    }

    /**
     * {@inheritdoc}
     */
    public function getEditTabData($tab, Page $page)
    {
        if ($tab == 'author') {
            return array(
                'name'          => $page->getAuthorName(),
                'description'   => $page->getAuthorDescription()
            );
        }

        return $parent::getEditTabData($tab, $page);
    }

    /**
     * {@inheritdoc}
     */
    public function getEditTabTemplate($tab)
    {
        if ($tab == 'author') {
            //don't forget to create this template with corresponding form inside
            return 'MyBundle:Admin/Page/CMSPage:tab_author.html.twig';
        }

        return $parent::getEditTabTemplate($tab);
    }
}
{% endhighlight %}

Add your new service declaration with page type tag :

{% highlight xml %}
<service id="my_bundle.page_type.author_cms_page" class="My\Bundle\Model\Page\PageTypeAuthorCMSPage">
    <tag name="presta_cms.page_type" />
</service>
{% endhighlight %}

Now, you just need to use your author data in you template.

---
Now you know all about CMS pages handle by the CMF but sometime you need custom actions.

&rarr; Let's continue with [Custom controller][2].

[1]: https://github.com/prestaconcept/PrestaCMSCoreBundle/blob/master/Model/Page/PageTypeInterface.php
[2]: /presta-cms-core/developer-guide/custom-controller.html#content
