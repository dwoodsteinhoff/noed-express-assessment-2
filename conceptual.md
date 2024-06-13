### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  A) a JSON Web Token

- What is the signature portion of the JWT?  What does it do?

A) It's cryptographic signature that verifies integrity of tokens information, such as where it came from and what is contained inside the token and that they have not been tampered with

- If a JWT is intercepted, can the attacker see what's inside the payload?

A)  yes, as long as they can decode it they can look at what's in the data's plain text

- How can you implement authentication with a JWT?  Describe how it works at a high level.

A) jwt.sign(payload,secret-key,jwt-options) this will create the jwt and return a JWT token. When a user logs in, the server authenticates the user and then, if successful, creates a JWT with the user's information and a token/signature to verify the user. The server then sends the JWT to the client and each request from the client will include that JWT where the server will validate the JWT's signature

- Compare and contrast unit, integration and end-to-end tests.

A) unit testing is testing each "unit" or testing the individual components or functions of an application. 

Integration testing is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle. It is used with the idea to build better software by developing and testing in smaller increments. Common tools include Travis CI, Jenkins, Circle CI. 

End-to-end tests test an applications flow from start to end simulating an entire real user scenario.

- What is a mock? What are some things you would mock?

A) it is primarily ued in unit testing. An object under test may have dependencies on other objects and to isolate the behaviour, you replace those objects with mocks that simulate their behaviour.

you can mock API calls

- What is continuous integration?

A)the practice of merging in small code changes frequently, rather than merging in a large change at the end of a Development CYCLE

- What is an environment variable and what are they used for?

A) they are a variable that is user-defined. it is made up a a name and value pair.

- What is TDD? What are some benefits and drawbacks?

A) it is where you write tests first before writing code. 

A benefit inlcudes It allowing you to think about inputs, how the app should work and what it should return.

A drawback is that it takes longer to write an applications code in the beginning.

- What is the value of using JSONSchema for validation?

A) it allows us to quickly validate data before saving stuff to Database

- What are some ways to decide which code to test?

A) Test common cases and test edge cases for your code. If you write the tests first, you will know what tests need to be written in order to get the application to work.

- What does `RETURNING` do in SQL? When would you use it?

A) It is used to retrieve values from a data modification statement like UPDATE,INSERT,  and you use it whenever you need the information from the modification so you do not have to write a SELECT statement to retrieve the infromation.

- What are some differences between Web Sockets and HTTP?

A) HTTP is unidirectional where only a request or response is taking place at a time. Web Sockest are bidirectional so many responses for one request can be shared. In HTTP the connection is terminated automatically after response is shared. A web socket connection continues until the client/server decides to end it.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

A) I preferred using Flask, It was more straightforward and simple to achieve what needed to be achieved. Where as in Express there is a lot of minutiea that if you are not meticulous about can uproot the whole application. I do feel like Express gives more accessbility than Flask allowing for more user interaction/manipulation. But, the simplicity of Flask was far easier to grasp and contain the learned concepts in a smaller amount of time. I feel like going through express I learned the material but did not grasp everything fully.