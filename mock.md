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

## Discución

### ¿Dónde es útil la comprobación imitando algo?

Imitar algo es generalmente útil durante comprobaciones unitarias para que las dependencias externas ya no sean una restricción para la unidad o ese bloque de código que está a prueba.
Muchas veces estas dependencias pueden estar en desarrollo. Sin la comprobación imitando a estas dependencias, si un caso de prueba falla, sería bastante complicado saber si la falla se debe a nuestra prueba de código o se debe a depencias.
Mocking ,por lo tanto, acelera el desarrollo y la comprobación(test) al aislar las fallas.
Mocking is generally useful during unit testing so that external dependencies are no longer a constraint to the unit under test. Often those dependencies may themselves be under development. Without mocking, if a test case fails, it will be hard to know if the failure is due to our code unit or due to dependencies. Mocking therefore speeds up development and testing by isolating failures.

Otra razón para imitar el comportamiento de dependencias en los test is para evitar llamadas de red lentas o llamadas de APIS a terceros. Mocking(imitar algo) también habilita demostraciones y evaluaciones de productos.
Todas las unidades de un proyecto pueden progresar en paralelo sin esperar que todas estas unidades estén listas. Así, la comprobación (testing) pueden comenzar primero.
Other reasons to mock dependencies is to avoid slow network calls or call third-party APIs. Mocking also enables product demos and evaluations. All units of a project can progress in parallel without waiting for everyone to be ready. Thus, testing can start early.


Código que tiene efectos secundarios (colaterales) debe llamarse solo en producción. Los ejemplos incluyen cargar una tarjeta de crédito o enviar una notificación. Imitar el comportamiento de dependencias o burlarse (mocking) es útil para validar esas llamadas sin los efectos secundarios.
Code that have side effects should be called only in production. Examples include charging a credit card or sending a notification. Mocking is useful to validate such calls without the side effects.

Mocking avoids duplicating test code across similar tests. The task of verifying method or API calls from our module can be delegated to the mock.
Mocking avoids duplicating test code across similar tests. The task of verifying method or API calls from our module can be delegated to the mock.

### ¿ Nos puedes dar algunos ejemplos de mock testing?

![mock](img/mock-3.JPG)

Digamos, una clase de pedido, completa pedidos, llamando a una clase de almacén. El último sabe el inventario actual.
Si estamos probando la unidad de clase de pedido, burlaremos la clase de inventario. No nos preocupamos en probar la clase de almacén ahora mismo. Pero ya que es una dependencia de orden nos burlamos de él.
Nuestro objeto de burla puede ser llamado WarehouseMock;
Let's say, an Order class fulfils orders by calling a Warehouse class. The latter knows the current inventory. If we are unit testing Order class, we mock the Warehouse. We don't care about testing Warehouse right now. But since it's a dependency for Order, we mock it. Our mock object can be called WarehouseMock.

Un objeto de burla (Mock Object) proporciona una supuesta implementación de la misma interfaz como el objeto real.
Those calling it are unaware that it's a mock (Quienes lo llaman no saben que es un simulacro). Por lo tanto, para la clase pedido, WarehouseMock tiene el mismo aspecto que inventario. Esto es justo lo que necesitamos para comprobar de manera unitaria la clase pedido (testear).
A mock object provides a pseudo implementation of the same interface as the real object. Those calling it are unaware that it's a mock. Thus, to the Order class, WarehouseMock looks the same as Warehouse. This is just what we need to unit test Order class.

Otro ejemplo es sobre la aplicación que llama a un API externa para obtener información de películas. En lugar de realizar llamadas reales, estas pueden ser simuladas o burladas para que cuando la petición a la api se realice, el objeto simulado (mock object) simplemente lea y responda con datos de prueba de un sistema de archivos local.
Another example is about an application calling an external API to get information about movies. Instead of making real calls, this can be mocked so that when API calls are made, the mock object will simply read and respond with test data from a local file system.

### ¿El mocking requiere que los developers modifiquen su código base?

Si tu código utiliza objetos estáticos o singletons es más dificil hacer mocking. En tales casos es mejor hacer un refactor de código.
Por otro lado, de manera general, mocking no requiere que modifiques tu código base. De hecho, la inyección de dependencias es la manera usual de cómo esos objetos deberían ser creados. Las dependencias se vuelven visibles en el constructor y otros métodos. Éstas dependencias pueden, por lo tanto, ser fácilmente reemplazadas durante el proceso de testing con objetos simulados. Esto se puede configurar en código o mediante un archivo de configuración.
If your code uses static objects or singletons, then it's difficult to do mocking. In such cases, it's better to refactor code. Otherwise, in general, mocking doesn't require you to modify the codebase. In fact, dependency injection is the usual way in which objects should be created. Dependencies become visible in the constructors and other methods. These dependencies can therefore be easily replaced during testing with mock objects.  This can be configured either in code or via a configuration file.