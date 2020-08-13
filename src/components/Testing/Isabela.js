/*
Directory Organization:
For a React app, all the relevant code stuff is in the src folder
Then, for our app, we have the following folders:

assets- stores all our images and graphics and other assets, also organized into relevant subfolders
components- each subfolder in here is responsible for a group of related website components
  e.g. the ProfilePic folder holds both ProfileCard.js and ProfilePic.js
    both ProfileCard.js and ProfilePic.js are profile picture related components
store- actions, middleware, and reducers for Redux store. Also browser history, constants, and original store creation.


So what's a component?
Looking at our website visually, each visual "piece" of the website is usually its own component
For example, the website footer is in Footer folder in Footer.js,
the section that takes in email newsletters is in EmailNewsletter folder in EmailNewsletter.js, etc.

Each file contains one component

In React there are two types of components- class components and functional components

If you know object oriented programming, then class components are just classes
These components have different properties that you can call like this:
this.exampleProperty
You can pass in properties and render out html

Functional components are functions
They take in javascript input and return html

They are basically the same thing in terms of actual use, except they have slightly different syntax
But I prefer functional components, so this application uses functional components :P


Anyway, so this Isabela component is in the Testing folder
*/

/* First thing to do is to import React */
import React from 'react';
/* Also this application uses Material UI 
(pre made html pieces that already look nice and styled
  also helps with organizing and spacing and centering everything etc.
  kind of like bootstrap if you've ever heard of or used that), 
so now we import any necessary Material UI pieces */
import { Button, Typography, TextField } from '@material-ui/core';

/* Then here are the redux related imports
Redux is like a way for us to have a global data storage that is accessible from any component
I will teach you how Redux works later */
// Redux
/* here we are importing the connect function that 
we will use at the end to connect this component to the global redux store */
import { connect } from 'react-redux';

/* Theme and styling related imports */
// Theme
/* the makeStyles function allows us to write css classes in javascript to use later in the component */
import { makeStyles } from '@material-ui/core/styles';

/* here we use makeStyles and use the Material UI global application theme to make styling classes 
this function that holds our styling classes 
we name this function "useStyles" */
const useStyles = makeStyles((theme) => ({
  exampleClass: {
    color: 'red',
    backgroundColor: 'blue',
  },
}));

/* this is the start of our actual functional component
in this case this component is named Isabela
we name components using PascalCase
we also input in some property arguments with:
Isabela(props)
"props" stands for properties
*/
function Isabela(props) {
  /* This 1st part of the component is where we write the logic and javascript of the component */

  /* first we get the css styling classes (as the constant "classes") 
  from the useStyles function that we made above */

  const classes = useStyles();

  /* for React components, we use the React hook "useState" 
  this is because we can't actually just set variables like textfieldValue = 'hoaiuhf' that will not work
  instead React uses states so we must use the setTextfieldValue function to assign a new value to textfieldValue */
  const [textfieldValue, setTextfieldValue] = useState('initial value');
  /* the syntax for useState is like this:
  const [the variable itself, the function for changing the variable] = useState(the initial value of the variable)
  */

  /* this is es6 syntax for writing a javascript function
  this function is going to be run whenever the button is clicked
  the input arguments of the function are in the parentheses */
  const handleButtonClick = (inputArguments) => {
    /* console.log function will print things out into the console of the website
    you probably already know this but
    the console of the website can be accessed by Ctrl+Shift+I when on the website tab */
    console.log('print me to the console');
  };

  /* this is another javascript function
  this function I want to run every time the textfield (below) is typed in
  I want to update "textfieldValue" to whatever the user is typing
  */
  const handleTextfieldValueChange = (event) => {
    /* here I am setting the textfield value (using the setTextfieldValue function)
     to whatever the user typed into the textfield (event.target.value) */
    setTextfieldValue(event.target.value);
  };

  /* This 2nd part of the component is where we write the html 
  that actually gets returned and shows up on the website */
  return (
    <>
      {/* Material UI's Typography displays text 
    (and automatically uses our theme's font and spacing and everything) */}
      <Typography>Some text blah blah blah</Typography>
      {/* Material UI's box
    we can use a custom css styling class by setting
    className={classes.exampleClass}
    exampleClass is a class we made in the beginning using makeStyles */}
      <Box className={classes.exampleClass}>This is a box</Box>
      {/* Here we have a Material UI button
    it is our theme's primary color
    when the button is clicked, it will run the handleButtonClick javascript function */}
      <Button color='primary' variant='contained' onClick={handleButtonClick}>
        Button Text
      </Button>
      {/* Here we have a Material UI textfield 
      its value is the variable textfieldValue
      when you try to change the textfield value by typing in it
      it will run the javascript handleTextfieldValueChange function
      */}
      <TextField
        variant='outlined'
        value={textfieldValue}
        onChange={handleTextfieldValueChange}
      />
    </>
  );
}

/* the rest of the code is for connecting the component to the global Redux state
i will teach you about Redux later */
const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(maptStateToProps, mapDispatchToProps)(Isabela);
