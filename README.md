# Natural Language Processing

Natural Language Processing leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

### the API

Aylien is a text analys API, that is free to use up to 1000 requests per day or 333 intensive requests.

The API has a lot of different endpoints, a full list is available [here](https://docs.aylien.com/textapi/endpoints/#api-endpoints). 

### the SDK

While working on the project I used an SDK (Software Development Kit), a program that brings together various tools to help work with a specific technology. SDKs are available for all the major languages and platforms, for instance the Aylien SDK brings together a bunch of tools and functions that will make it possible to interface with their API from the server and is available for Node, Python, PHP, Go, Ruby and many others. 

For thr poroject, I used the Node one, the page is available [here](https://docs.aylien.com/textapi/sdks/#sdks). (1000 free requests per day).

### Learning outcomes

This project provides practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

### Project Requirements:

The project must:

- [x] Be set up with Webpack, Express, Node, and Sass, and Service Workers
- [x] Have separate dev and prod configurations for Webpack
- [x] Have the developer environment set up with the Webpack dev server
- [x] Have a minimum of one form field
- [x] Make one request to the Aylien API
- [x] Use Sass for styling
- [x] Minify js and styles in the production environment
- [x] Response from the API must be added to the view for a user to see 
- [x] Be able to show content offline


### Resources

Text and image are from https://www.nlpacademy.co.uk/what_is_nlp/