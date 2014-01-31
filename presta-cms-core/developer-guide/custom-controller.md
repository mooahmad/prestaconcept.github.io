---
layout: presta-cms-core
navigation_active: custom-controller.html

---

# Custom controllers

## Overview

Complex projects can require to create custom controllers.
This can be useful for a private action for example.

## Create a custom controller

Like in a standard Symfony2 application you will have to create a controller, an action and a route.

To ease all the PrestaCMS initialisation, your controller should extend *Presta\CMSCoreBundle\Controller\AbstractController*
and render the response with the *renderResponse* method.

Your action template should extend your theme layout, this is done by using the base_template variable like this :

{% highlight html %}
{% raw %}
    {% extends base_template %}
{% endraw %}
{% endhighlight %}

## Example

If you want to have a working example using custom controller, you should have a look at [PrestaCMSUserBundle][1] which
use it for the user account part.

---
At the end of this section you already now a lot of way to customize your project with PrestaCMS.

&rarr; But there is even more, let's continue with [Extending PrestaCMS][2].

[1]: https://github.com/prestaconcept/PrestaCMSUserBundle
[2]: /presta-cms-core/developer-guide/extending.html#content
