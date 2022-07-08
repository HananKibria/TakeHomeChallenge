# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
### Planning and Creating Entity relation diagram

#### Implementation Detail
Understanding the many to many relationships between the tables Facilites,agents and shifts. Create a entity relationship diagram for to better understand the database structure.

#### Acceptance Criteria
The entity relationship diagram should be normalized.The ER features like generalization, higher and lower level entiy sets, attibute inheritance and aggreation should be present. The scalablity of the database should be taken into account.All the functionalities should be covered.

#### Time/effort estimates
4 hours

### Implementing the Database changes

#### Implementation Details 
Create a postgresql Table mapping internal key ids with the custom key ids by diffenerent facilites. Use objection.js orm for its handling. use node.js as the backend.Data validation shoud be done for checking the accuracy and quality of data.

#### Acceptance Criteria
The foreign key relationship with the Agents Table and the facilites table should be done correctly. As Information in database is constantly being updated, deleted, queried, or moved by multiple people or processes, so it should be ensured that data is valid at all times.

#### Time/effort estimates
4 hours


### Writing code for backend with testing

#### Implementation Details
The post route for mapping custom id should be written using express framework. The data function which takes the custom id given by the login faclity to the given agent and stores it in database. Changes should be made in the genrate report function to use that custom id instead of database internal id. A patch route should be made for updating the custom id. A get method to get the content of the custom id table on the basis of agent interal id should also be written

#### Acceptance criteria
The function should hamdle the cases where the database connection breaks or some other error occurs. A middleware function to do error handling must be written. the route gives an approiate reponse back to the the frontend.Unit tests in jest should be written for testing the route

#### Time/Effort estimates
6 hours

### Writing code for frontend and testing

#### Implementation details
A form is to be presented to the facilty when it clicks on a button or tab. The form gives two options, cstom ifd and agent name.
The form data is stored in two states and a function should be used to call the backend route whenever the submit button is clicked.

#### Acceptance criteria
The interface should be user friendly and easy to use. The form should correctly call the backend api and insert the custom id.
It should be able to show the cusotm id of the agent when requested.I t should send the id of the row of the table whent the custom id table is to update. Unit tests should also be written.

#### Time/Effort estimates
6 hours