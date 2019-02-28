DESCRIPTION
DSAS

CASE 1 (Emotional state recognition, azure cognitive services):

CUSTOMER

Customer is a online general practitioner. The Customer has several innovative services that they offer to customers ranging from online diagnosis of medical ailments to online behavioral therapy. The Customers solutions are used by many customers in the Nordics.

CHALLENGE
The Customer decided to implement a new feature int heir online diagnosing applications. The goal of the project is to recognize the mood of the patient. The data collected is then processed to identify if there are improvements needed in the diagnosis process. They would also like to use this in the future to identify if the ailment is maybe psychological in nature so that they can refer those customers to psychologist. As stated at the moment they would like to start with using the data collected to enhance their customer experience and personalize service.

REQUIERMENTS
•	The web application will work both on mobile units and desktop.
•	The web application will be hosted in cloud.
•	The web application will use native camera. 

SOLUTION
The team will create a POC (Proof of concept) that will demonstrate Emotion recognition using Azure cognitive services. The POC will use the proposed base technology stack below:
•	React
•	Redux
•	Nodejs
•	Material design
The Technology stack above is a base technology stack which the team will build upon further. The POC will be a simple SPA (Single page application) that will contain a single button which when clicked on will open the native camera/webcam of the unit and take a picture of the person. The picture will then be sent to Azure cognitive services to analyze it for the emotional state of the person in the picture. And finally, the application will display the result of the analysis in a fun up-beat way.

CASE 2 (Facial recognition, azure cognitive services):

CUSTOMER
Customer is a big Company in retail. The Customer has several innovative services that they offer to customers ranging from online shopping related calculators and planners to augmented reality apps and applications. The Customers solutions are used by many customers all over the world and by many users.

CHALLENGE
The Customer decided to implement a solution for personalization and gathering customer metrics in one of its online planners. The goal of the project is to recognize faces of the users using one of their online planners and by doing this facilitate easier login for the users. If the user wants they could then use facial recognition to log-in to their account and thus not need to enter username/password. Faces would be recognized based on recorded data which would also allow to enhance their customer experience and personalize service.

REQUIERMENTS
•	The web application will work both on mobile units and desktop.
•	The web application will be hosted in cloud.
•	The web application will use native camera. 

SOLUTION
The team will create a POC (Proof of concept) that will demonstrate facial recognition using Azure cognitive services. The POC will use the proposed base technology stack below:
•	React
•	Redux
•	Nodejs
•	Material design
The Technology stack above is a base technology stack which the team will build upon further. The POC will be a simple SPA (Single page application) that will contain 2 buttons, first button for registering users, the image that is captured then is saved in an NOSQL DB, free online DB providers like mongo dB are also acceptable. The second button will also take a picture of the user but afterwards it will compare the image taken and try to identify which of the registered users it is.


Good to have URLS:
Cognitive services >> https://azure.microsoft.com/sv-se/services/cognitive-services/
Test face API >> https://azure.microsoft.com/sv-se/try/cognitive-services/?api=face-api

Bare minimum software to install:
*Nodejs
*Editor for example VS Code
