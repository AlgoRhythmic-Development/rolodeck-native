<h1 align="center">RoloDeck 🗃</h1>

## Description

A MERN stack application that creates and collects business cards with QR Codes. When a user visit the application for the first time, they are prompted to sign-up and create an account. Once the user has signed up or logged in, they can then create business cards with their company name, tagline, personal name, job title, company website url, phone number, and email address. Once the business card has been created, it will automatically be generated with a QR Code and be displayed on the "My Cards" page. The user can also search for other user's business cards by searching their name or scannng the users QR Code on the "Collection" page. User is able to delete and edit their personal business cards and remove cards that they have collected. The application also features a light and dark mode in which the user can choose which mode to display on their screen.

**[Deployed Application](https://rolodeck.herokuapp.com/)**

![Screen Shot 2020-10-14 at 8 52 22 PM](https://user-images.githubusercontent.com/62969025/96071682-e2854980-0e5f-11eb-853b-9bb1948aa53f.png)

![Screen Shot 2020-10-14 at 8 52 45 PM](https://user-images.githubusercontent.com/62969025/96071688-e3b67680-0e5f-11eb-8bce-72afb46c2678.png)

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Available Scripts](#available-scripts)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run eject`](#npm-run-eject)
- [Testing](#testing)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## User Story

```
AS a business professional wanting to increase my business network
I WANT an application that allows me to create and collect business cards virtually with QR Codes
SO THAT I can quickly search and share business cards with other business professionals I have networked with
```

## Acceptance Criteria

```
GIVEN an application that creates and collects business cards
WHEN I visit the app for the first time
THEN I am prompted to either sign-up or login to an account
WHEN I am login or sign-up
THEN I am redirected to the "My Cards" page where I can view my personally created business cards 
WHEN I visit the "Create" page
THEN I am able to create a business by inputing my company name, company tagline, full name, job title, company website url, phone number, and email address
WHEN I go to to submit the creation of the business card and the full name, job title, phone number, and email address are not entered correctly
THEN I am presented with an error message to input the correct data into the field
WHEN I create a business card successfully
THEN I am prompted with a success modal where I can either close the modal or view my personal busincess cards
WHEN I visit my cards
THEN I presented with a list of my personally created business cards where I can view it as a list or carousal
WHEN I click on a business card I have created on the "My Cards" page
THEN I am presented with the business card in modal view with the ability to click on the card to flip it over and see the QR Code, edit button, and delete button
WHEN I click the edit button on the backside of the card in the single card view on the "My Cards" page
THEN I taken to a page to edit the form fields of that card
WHEN I submit the form to edit the business card
THEN I presented with a modal that allows me to close the modal or I will be automatically redirected to the "My Cards" page in three seconds
WHEN I click the delete button on the backside of the card in the single card view
THEN I taken back to the card list view on the "My Cards" page where the card that was deleted is now removed from the card list
WHEN I visit the "Collection" page
THEN I am able to see my collected cards if any and have the ability to search for a business card by the users full name or scan a QR Code of the users business card
WHEN I click on a business card I have collected on the "Collection" page
THEN I am presented with the busincess card in modal view with the ability to click on the card to flip it over and see the QR Code and Remove from Collection button
WHEN I click on the Remove from Collection button on the backside of a collected card in the single card view 
THEN I presented with a new list of collected cards where the card that was just removed is no longer listed
WHEN I click the logout button while logged in
THEN I am taken back to the "Home" page where I can either login or sign-up with a different account again
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Testing
No current testing

## License:
Unlicense

## Contributing
https://www.contributor-covenant.org/

## Questions
AlgoRhythmic Development Team:
- [Taylor Remigi's Github](https://github.com/TRemigi)
- [Jacob Corum's Github](https://github.com/jcorum11)
- [Parker Robison's Github](https://github.com/parkerrobison)
- [John Nielsen's Github](https://github.com/JohnNielsen1221)
- [Kailey Morter's Github](https://github.com/kaileymorter)

If you have questions about this project, please reach to our team lead at: tayremigi@gmail.com
