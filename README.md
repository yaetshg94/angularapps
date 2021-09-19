# HAPI FHIR Playground: Basic Test App

This project is a skeleton project for querying data from the [HAPI FHIR public test server](http://hapi.fhir.org/baseR4)

### Getting Started:

* [ ] Take a few minutes to familiarize yourself with the [FHIR Standard](http://hl7.org/fhir/) for health data exchange. In particular you might want to read the [Executive Summary](http://hl7.org/fhir/summary.html) and the [Developer Introduction](http://hl7.org/fhir/overview-dev.html)

* [ ] In addition, take a few minutes to familiarize yourself with [Angular](https://angular.io/docs). Understand the basics of component structures, HTTP calls, and other basics covered in the [Fundamentals](https://angular.io/guide/architecture) section.
  
* [ ] Create your own GitHub project and copy the contents of this repository into your own project (please don't fork this repository)

* [ ] Locate the component `AppComponent` and run it. You should see results pop up in the console of your web browser

* [ ] **Please, do not fork this repo.** Create your own private GitHub repository to do your work in.

### Basic Tasks:

* [ ] Add a table to AppComponent and populate it with results from the `getPatients()` function.

* [ ] Modify the `ApiService` class to include another call that fetches all `Patient` resources whose `birthdate` are between 1960 and 1965 (inclusive).

* [ ] Sort the table based on youngest birthdate to oldest.

* [ ] Time the request. Output the time on the footer of the page. Use a pipe for formatting the output.

* [ ] Add a search function to the page. Add two inputs to `AppComponent` - a textbox that takes in a name (first or last), and a datepicker.  Modify the `ApiService` to include a call that searches for a `Patient` based on the name passed in, and the date of birth passed in from the date picker. The results should be reflected in the table. Use the [SearchParameters section](https://www.hl7.org/fhir/patient.html#search) to help with building your query.

* [ ] Apply validation to the inputs - the name box cannot contain non-alphabetic characters, and the date field must be a valid date structure (YYYY/MM/DD). 

* [ ] Prevent the button search button from multi-clicks wihout using timeouts.

* [ ] Commit your work.

### Intermediate Tasks:

* [ ] In `QuestionnaireComponent`, generate a form using the `questionnaire.json` file in the `assests` folder. The form should have validation applied to each input.

* [ ] Using the results from the form, generate a [`QuestionnaireResponse`](https://www.hl7.org/fhir/questionnaireresponse.html). The `QuestionnaireResponse` should follow the structure outlined in the [Resource Content Section](https://www.hl7.org/fhir/questionnaireresponse.html#resource)

* [ ] Display your results at the bottom of the page.

* [ ] Update the `QuestionnaireComponent` to be mobile-friendly.

* [ ] Please include unit tests for your work.

* [ ] Commit your work.

### Results:

- [ ] The 'Questionnaire' component renders the form for the `questionnaire.json` file. Model Driven Form is used to build the form, manage the validations and make the form input elements.

- [ ] The results from the form generate a `QuestionnaireResponse`. The response has the structure outlined in the [Resource Content Section](https://www.hl7.org/fhir/questionnaireresponse.html#resource). To build the structure based on the schema of the questionnaire using dynamic json. The response can be seen in the bottom of the page as json using JSON pipe. I was not clear if the generated response needs to be posted to API. Hence, I displayed the reponse as JSON.

- [ ] The results from the form are displayed at the bottom of the page..

- [ ] The Questionnaire component is mobile-friendly. Simple responsive classes have been added to make the form mobile-friendly.

- [ ] The code is refactored well for the form components.

- [ ] Unit tests are added in spec.ts file.

### Improvements:

The following improvements are done :

- [ ] Seperation of basic tasks as Datatable component and questionnaire component.

- [ ] Datatable component displays Patient resource details in table 

- [ ] questionnaire.json can be used to auto-generate the form and we get the reponse on form submission .