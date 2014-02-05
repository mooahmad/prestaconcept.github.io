---
layout: presta-cms-core
title: How to install PrestaCMS
subtitle: everything should be fine
section_active: developer-guide
navigation_active: installation

---

## First step

PrestaCMSCore is a Symfony2 bundle so before using it, you need to set-up a Symfony2 project.
A well made [documentation is available on Symfony.com][1].

As content storage is based on SymfonyCMF you have to [choose and set-up a storage layer][2].
As SymfonyCMF we suggest [PHPCR][3] and [PHPCR-ODM][4] as the ideal basis.


## Install PrestaCMS

For a working example you can have a look at [PrestaCMS Sandbox][5] which is the demo project of PrestaCMS.

### Get the code

Download PrestaCMSCore and its dependencies and put into the vendor directory of your project.

The easiest way is to use composer :

    php composer.phar require presta/cms-core-bundle --no-update
    php composer.phar update presta/cms-core-bundle


### Easy extend it in your application

    php app/console sonata:easy-extends:generate SonataAdminBundle --dest=src
    php app/console sonata:easy-extends:generate PrestaCMSCoreBundle --dest=src

### Add routing

Update your /app/config/routing.yml file.

If Sonata admin is not configured :

{% highlight yaml %}
#Sonata Admin
admin:
    resource: '@SonataAdminBundle/Resources/config/routing/sonata_admin.xml'
    prefix: /admin

_sonata_admin:
    resource: .
    type: sonata_admin
    prefix: /admin
{% endhighlight %}

PrestaCMS part :

{% highlight yaml %}
PrestaCMSCoreBundle:
    resource: "@PrestaCMSCoreBundle/Resources/config/routing.yml"
    prefix:   /admin

tree:
    resource: "@SonataDoctrinePHPCRAdminBundle/Resources/config/routing/tree.xml"
{% endhighlight %}

### Add configuration

As a good practice, we suggest to make a dedicated configuration file for each new bundle (instead of copy/paste it
in the main config.yml)

So create a new file /app/config/bundles/presta_cms_core.yml

Here is the code from the sandbox, just adapt it to fit your needs :

{% highlight yaml %}
imports:
    - { resource: '@PrestaCMSThemeBasicBundle/Resources/config/theme/creative.yml' }

parameters:
    presta_cms.page.factory.class: Application\Presta\CMSCoreBundle\Factory\PageFactory

sonata_admin:
  dashboard:
      blocks:
          - { position: right, type: presta_cms.block.dashboard.cms }

presta_cms_core:
    default_website: /website/sandbox
    default_locale: en
    websites:
        prestacms-sandbox:
            path: /website/sandbox
            hosts:
                dev:
                    en:
                        locale: en
                        host: dev-prestacms-sandbox.com
                    fr:
                        locale: fr
                        host: dev-prestacms-sandbox.fr
                prod:
                    en:
                        locale: en
                        host: sandbox.prestacms.com
                    fr:
                        locale: fr
                        host:  sandbox.prestacms.fr
{% endhighlight %}

And import PrestaCMS configuration in /app/config/config.yml like this :

{% highlight yaml %}
imports:
    - { resource: '@PrestaCMSCoreBundle/Resources/config/config.yml' }
    - { resource: bundles/presta_cms_core.yml }
{% endhighlight %}

Don't forget to configure other dependencies like sonata-admin, sonata-media...

### Update your Kernel

Next, be sure to enable these bundles in your /app/AppKernel.php file:

{% highlight php %}
<?php
class AppKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = array(
            ...
            //Sonata
            new Sonata\BlockBundle\SonataBlockBundle(),
            new Sonata\jQueryBundle\SonatajQueryBundle(),
            new Sonata\AdminBundle\SonataAdminBundle(),
            new Sonata\EasyExtendsBundle\SonataEasyExtendsBundle(),
            new Knp\Bundle\MenuBundle\KnpMenuBundle(),
            new Sonata\SeoBundle\SonataSeoBundle(),
            new Sonata\MediaBundle\SonataMediaBundle(),
            new Sonata\DoctrineORMAdminBundle\SonataDoctrineORMAdminBundle(),
            new Sonata\DoctrinePHPCRAdminBundle\SonataDoctrinePHPCRAdminBundle(),
            new FOS\JsRoutingBundle\FOSJsRoutingBundle(),

            // Doctrine PHPCR
            new Doctrine\Bundle\PHPCRBundle\DoctrinePHPCRBundle(),

            // CMF bundles
            new Symfony\Cmf\Bundle\RoutingBundle\CmfRoutingBundle(),
            new Symfony\Cmf\Bundle\CoreBundle\CmfCoreBundle(),
            new Symfony\Cmf\Bundle\MenuBundle\CmfMenuBundle(),
            new Symfony\Cmf\Bundle\ContentBundle\CmfContentBundle(),
            new Symfony\Cmf\Bundle\TreeBrowserBundle\CmfTreeBrowserBundle(),
            new Symfony\Cmf\Bundle\BlockBundle\CmfBlockBundle(),

            //PrestaCMS
            new Presta\CMSCoreBundle\PrestaCMSCoreBundle(),
            new Presta\CMSMediaBundle\PrestaCMSMediaBundle(),
            new Presta\CMSThemeBasicBundle\PrestaCMSThemeBasicBundle(),

            //Utils
            new Doctrine\Bundle\FixturesBundle\DoctrineFixturesBundle()

            //Application bundles
            new Application\Sonata\AdminBundle\ApplicationSonataAdminBundle(),
            new Application\Presta\CMSCoreBundle\ApplicationPrestaCMSCoreBundle()
        );
    }
}
{% endhighlight %}

Now, install the assets from the bundles:

    php app/console assets:install web

It’s a good practice to also delete your cache when installing new bundles:

    php app/console cache:clear


### Let's code

&rarr; Now installation step is over, let's continue with [getting started section][6]


[1]: http://symfony.com/doc/master/book/installation.html
[2]: http://symfony.com/doc/master/cmf/cookbook/database/choosing_storage_layer.html
[3]: http://phpcr.github.io/
[4]: http://www.doctrine-project.org/projects/phpcr-odm.html
[5]: https://github.com/prestaconcept/prestacms-sandbox
[6]: /presta-cms-core/developer-guide/getting-started.html#content