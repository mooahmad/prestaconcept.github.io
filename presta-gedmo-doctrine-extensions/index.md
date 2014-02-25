---
layout: sidebar
title: PrestaSonataGedmoDoctrineExtensionsBundle
subtitle: Translate your entities with Sonata and Gedmo
navigation_mode: anchor
navigation:
    - { link: "overview", title: "Overview" }
    - { link: "installation", title: "Installation" }
    - { link: "working_example", title: "Working example" }

---

[![Build Status](https://secure.travis-ci.org/prestaconcept/PrestaSonataGedmoDoctrineExtensionsBundle.png?branch=master)](http://travis-ci.org/prestaconcept/PrestaSonataGedmoDoctrineExtensionsBundle)
[![Scrutinizer Quality Score](https://scrutinizer-ci.com/g/prestaconcept/PrestaSonataGedmoDoctrineExtensionsBundle/badges/quality-score.png?s=682cd4431fb27a42865e28376e276b51d66e48cc)](https://scrutinizer-ci.com/g/prestaconcept/PrestaSonataGedmoDoctrineExtensionsBundle/)
[![Latest Stable Version](https://poser.pugx.org/presta/sonata-gedmo-doctrine-extensions-bundle/v/stable.png)](https://packagist.org/packages/presta/sonata-gedmo-doctrine-extensions-bundle)
[![Total Downloads](https://poser.pugx.org/presta/sonata-gedmo-doctrine-extensions-bundle/downloads.png)](https://packagist.org/packages/presta/sonata-gedmo-doctrine-extensions-bundle)

[![SensioLabsInsight](https://insight.sensiolabs.com/projects/8136ca7e-8bfc-415e-b82d-f7cfe49b2b47/big.png)](https://insight.sensiolabs.com/projects/8136ca7e-8bfc-415e-b82d-f7cfe49b2b47)
[![knpbundles.com](http://knpbundles.com/prestaconcept/PrestaSonataGedmoDoctrineExtensionsBundle/badge)](http://knpbundles.com/prestaconcept/PrestaSonataGedmoDoctrineExtensionsBundle)


## Overview

This bundle integrates [Gedmo Doctrine Extensions][1] for Sonata Admin.

It allows you to define multiple locales for your entities and provides a locale switcher in every forms.

<div class="screenshot" markdown="1">
![PrestaSonataGedmoDoctrineExtensionsBundle-Translation](/assets/presta-gedmo-doctrine-extensions/presta-gedmo-doctrine-extensions-translation.jpg)
</div>


## Installation

This bundles works with [PrestaSonataAdminExtendedBundle][7] so you should refer to its installation.

You should have a look at [symfony-prestacms project][8] for a ready to use installation of this bundles.

## Getting started

First have a look at [Gedmo translatable documentation][10]

To show you how PrestaSonataGedmoDoctrineExtensionsBundle works we will take [PrestaCMSFAQBundle][9] as an example.


### Make an entity translatable

If you want to make an entity translatable you have to :

- extends AbstractTranslatable
- implement TranslatableInterface
- declare its TranslationEntity in Annotation
- declare some of its fileds Translatable

FAQCategory code looks like this :

{% highlight php %}
<?php
namespace Presta\CMSFAQBundle\Entity;

use Presta\SonataGedmoDoctrineExtensionsBundle\Entity\AbstractTranslatable;
use Gedmo\Mapping\Annotation as Gedmo;
use Presta\SonataGedmoDoctrineExtensionsBundle\Entity\TranslatableInterface;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @author Nicolas Bastien <nbastien@prestaconcept.net>
 *
 * @ORM\Table(name="presta_cms_faq_category")
 * @ORM\Entity(repositoryClass="Presta\CMSFAQBundle\Entity\FAQCategory\Repository")
 * @Gedmo\TranslationEntity(class="Presta\CMSFAQBundle\Entity\FAQCategory\Translation")
 */
class FAQCategory extends AbstractTranslatable implements TranslatableInterface
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string $title
     *
     * @Gedmo\Translatable
     * @ORM\Column(name="title", type="string", length=255, nullable=true)
     */
    protected $title;

    /**
     * @var boolean $enabled
     *
     * @ORM\Column(name="enabled", type="boolean", nullable=false)
     */
    protected $enabled = false;

    /**
     * @var integer $position
     *
     * @ORM\Column(name="position", type="integer", length=2, nullable=true)
     */
    protected $position;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(
     *     targetEntity="Presta\CMSFAQBundle\Entity\FAQCategory\Translation",
     *     mappedBy="object",
     *     cascade={"persist", "remove"}
     * )
     */
    protected $translations;

    /* ... */
}

{% endhighlight %}

### Associate a translation entity

Then create its translation class like this :

{% highlight php %}
<?php

namespace Presta\CMSFAQBundle\Entity\FAQCategory;

use Doctrine\ORM\Mapping as ORM;
use Presta\SonataGedmoDoctrineExtensionsBundle\Entity\AbstractTranslation;

/**
 * @ORM\Entity
 * @ORM\Table(name="presta_cms_faq_category_translation",
 *     uniqueConstraints={@ORM\UniqueConstraint(name="lookup_unique_faq_category_translation_idx", columns={
 *         "locale", "object_id", "field"
 *     })}
 * )
 *
 * @author Nicolas Bastien <nbastien@prestaconcept.net>
 */
class Translation extends AbstractTranslation
{
    /**
     * @ORM\ManyToOne(targetEntity="Presta\CMSFAQBundle\Entity\FAQCategory", inversedBy="translations")
     * @ORM\JoinColumn(name="object_id", referencedColumnName="id", onDelete="CASCADE")
     */
    protected $object;
}

{% endhighlight %}

### Configuration

The last thing is to configure the locales to display in your locale switcher.

This bundle uses two parameters :

- locales : array of available locales for translation; i.e., your frontend locales
- default_locale : which locale to set by default ?

So your configuration can look like this :

{% highlight yaml %}

parameters:
    default_locale:  en
    locales: [fr, en, it, nl, es]

{% endhighlight %}

Enjoy !


[1]: https://github.com/l3pp4rd/DoctrineExtensions
[7]: https://github.com/prestaconcept/PrestaSonataAdminExtendedBundle
[8]: https://github.com/prestaconcept/symfony-prestacms
[9]: https://github.com/prestaconcept/PrestaCMSFAQBundle/blob/master/README.md
[10]: https://github.com/l3pp4rd/DoctrineExtensions/blob/master/doc/translatable.md
