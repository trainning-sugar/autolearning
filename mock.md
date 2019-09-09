# Mock-testing (Prueba simulada)

[Mock testing - devopedia](https://devopedia.org/mock-testing)

Devopedia. 2019. "Mock Testing." Version 13, March 20. Accessed 2019-09-04. https://devopedia.org/mock-testing

Mock en español : burlarse de, mofarse de, imitar algo.

## Traducción

### Palabras Reservadas

![testing](img/testing-1.jpg)
![mock](img/mock-1.png)

## ¿Qué es es mock testing?

Mock testing, es un enfoque de test unitario que te permite realizar aserciones cómo el código por debajo del test está interactuando con otro sistema de módulos.

![mocking test](img/mock-1.jpg)

En Mock Testing (Comprobación imitando algo), las dependencias están remplazadas con objetos que simulan su comportamiento real.
El propósito del mocking (imitar algo) es de aislar y enfocarse en el código siendo comprobado y no en el comportamiento o el estado de las dependencias externas.
Mock testing is an approach to unit testing that lets you make assertions about how the code under test is interacting with other system modules. In mock testing, the dependencies are replaced with objects that simulate the behaviour of the real ones. The purpose of mocking is to isolate and focus on the code being tested and not on the behaviour or state of external dependencies.

Digamos, un servicio de notificación provoca que se envíe un email a través de un servicio. No queremos enviar correos cada vez que ejecutamos una comprobación de este servicio de notificación. Sin embargo, queremos verificar que el servicio de envío de correo es llamado. Tal servicio puede ser reemplazado con un objeto que imite esa caracteristica, o sea simulo que envío un correo al comprobar (testear) ese servicio de notificación.
Let's say, a notification service triggers an email service. We don't want to send emails each time we run a notification test. However, we want to verify that the email-sending service is called. Such a service can be replaced with a mock object.
