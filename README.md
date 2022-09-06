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
 
 - Once logged in, a list of all previous trips will be shown. You will have options to look at a previous trip details, delete a trip, add a new trip, or log out. 
![Screen Shot 2022-09-06 at 11 07 49 AM](https://user-images.githubusercontent.com/59453943/188670676-ccfcc495-1cb1-48e2-a052-1b6e28cfaef0.png)

 - To add passengers to your trip, click on the details link then click add passengers. You will land on the add Passengers Information page as shown below:
![Screen Shot 2022-09-06 at 11 10 54 AM](https://user-images.githubusercontent.com/59453943/188671419-8a96331a-325c-48f8-a019-5f506dc87243.png)

 - To edit a previous trip, click on the details link then click the edit link. You will land on the edit page as shown below: 
 ![Screen Shot 2022-09-06 at 11 14 28 AM](https://user-images.githubusercontent.com/59453943/188672070-1d9ae1ac-9837-4226-8e36-f6f225ff346c.png)


## Approach Taken
- **Wireframe:** Link to wireframe is [here](https://whimsical.com/taxi-DnChYQDwWddTvt2TPjDdCL)
- **Pseudocode:** Link to pseudocode is [here](https://docs.google.com/document/d/1aQXExX0wlRJpEgANQmKDKum1VdPUWtDY0qm_taSgD6U/edit?usp=sharing)

## Hurdles
 - This project was very tough and challenging as it was my first time building a Node.js app. The first hurdle I faced was understanding how the routing worked. To help with this I studied the resources that were given to me in my General Assembly SEI course. I had to take those resources and get in some practice reps to help understand how the routing works. My instructors also provided clarification when I needed further explanations.
 
 - Another hurdle that I faced in completing this project was the amount of time given to complete the project. At the start of the project I was still struggling to understand how the files within a Node.js app worked. I decided to go back and further analyze course material that had been given to us in preparation for this project. This was very helpful but also cut into the time needed to code my app. Luckily, I was able to complete the project in time.
 
## Future Features
 - Restrict who can delete rides. Only the rider who made the request should be able to delete
 - Calculate the duration of the trip and distance of the trip
 - Include math logic to calculate price of trip based on distance and duration 
 - Make responsive and visually pleasing on all devices

