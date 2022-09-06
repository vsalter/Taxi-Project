# Project-2: Taxi 

## Project Information
This project was apart of my Software Engineering Immersive course at General Assembly. The objective was to create a Node/Express/MongoDB app that met the following requirements:

 1. Have at least 2 data entities (data resources) in addition to the User Model.
 2. Use OAuth authentication.
 3. Implement basic authorization that restricts access to features that need a logged in user in order to work (typically CUD data operations) by   "protecting" those routes from anonymous users using the isLoggedIn middleware from the OAuth lesson.
 4. Have full-CRUD data operations somewhere within the app's features. 
 5. Be styled such that the app looks and feels similar to apps we use on a daily basis
 6. Be deployed online using Heroku.

### App Description

The taxi app allows you to book a trip with the State of Georgia. To book a trip you must sign with a Google account utilizing OAuth. You can choose to start a trip in the city of Atlanta, Marietta, Decatur, Macon, or Riverdale. After booking a trip the user can see the trip and any other previously booked trips. Users can also edit, delete, and add passengers to your trip. 

### Technologies Used

 - **HTML** 
 - **CSS** 
 - **JavaScript** 
 - **Node.js** 
 - **MongoDB** 
 - **Mongoose** 
 - **Express** 
 
## Functionality
 - Link to app is [here](https://taxi-app-project2.herokuapp.com/)
 - The app prompts you to login with your Google account upon arriving at the index.
![Screen Shot 2022-09-02 at 6 10 13 PM](https://user-images.githubusercontent.com/59453943/188669912-1cf9b54a-eaf4-4ed8-bb65-637d82ecf0c6.png)


## Approach Taken
- **Wireframe:** Link to wireframe is [here](https://whimsical.com/taxi-DnChYQDwWddTvt2TPjDdCL)
- **Pseudocode:** Link to pseudocode is [here](https://docs.google.com/document/d/1aQXExX0wlRJpEgANQmKDKum1VdPUWtDY0qm_taSgD6U/edit?usp=sharing)

## Hurdles
 - This entire project was a hurdle.
 
 
 - 
 
## Future Features
 - Restrict who can delete rides. Only the rider who made the request should be able to delete
 - Calculate the duration of the trip and distance of the trip
 - Include math logic to calculate price of trip based on distance and duration 
 - Make responsive and visually pleasing on all devices

