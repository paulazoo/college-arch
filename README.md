# College Arch Frontend

## TODO:
For mentees, you are accepted, rank importance of location vs interests vs background vs dream colleges (also need backend column)

## General

[collegearch.org](https://www.collegearch.org) - non-profit devoted to helping FGLI students achieve their academic potential.

Website frontend for College ARCH, written in React JS by Paula Zhu.

## Set Up

You will need a .env file to store API and WS urls, and Google Client credentials

The first time you run this locally, you will need to run `npm i` to install dependencies

Then `npm start` to start the server on http://localhost:3000/

### Currently (230501) works with
- node: v16.15.1
  - on mac, `nvm install 16.15.1`
- npm: 8.11.0
  - on mac, nvm gets this too
- react: 16.13.1
- react-dom: 16.13.1
- react-native: 0.63.0
- redux: 4.0.1
- _outdated_: don't include package-lock.json when deploying through heroku

## Public Pages

### Landing

_ROUTE: https://www.collegearch.org/_

- Landing page
- You can sign up for the newsletter email list at the bottom

### EventPage

_ROUTE: https://www.collegearch.org/events/:event_id_

- Page for the specific public event as specified by their unique event id, `:event_id`

### About

_ROUTE: https://www.collegearch.org/about-us_

- About us page, includes three tabs
  - Mission and Purpose
  - Our Story
  - Meet the Team

### FellowshipProgram

_ROUTE: https://www.collegearch.org/fellowship-program_

- Information about the fellowship program

### Apply

_ROUTE: https://www.collegearch.org/apply_

- Page for starting an application for either mentee or mentor

### MenteesPage

_ROUTE: https://www.collegearch.org/mentees_

- Page for submitting a mentee application (NOT IMPLEMENTED)

### MentorsPage

_ROUTE: https://www.collegearch.org/mentors_

- Page for submitting a mentor application (NOT IMPLEMENTED)

### Terms

_ROUTE: https://www.collegearch.org/terms_

- Terms and privacy policy

### LoginPage

_ROUTE: https://www.collegearch.org/login_

- Login page
- Login with google
- If your email is not already accepted as a mentee or mentor you can not login



## Private Pages

### Dashboard

_ROUTE: https://www.collegearch.org/dashboard_

- Dashboard page
- Redirects here immediately after logging in
- Shows who your respective mentees or mentors are if you've already been matched
  - includes button to either your or your mentees' respective google classrooms
- Also shows events:
  - your upcoming events (public and private)
  - your past events (public and private)

### Profile

_ROUTE: https://www.collegearch.org/profile_

- See and edit your personal account profile details
- If you are a mentor, school and graduation year fields will also show up

### Master

_ROUTE: https://www.collegearch.org/master_

- The secret master controller page of the application
  - Only accessible to the following accounts:
      - paulazhu@college.harvard.edu
      - reachpaulazhu@gmail.com
      - team.collegearch@gmail.com
      - tech.collegearch@gmail.com
      - program.collegearch@gmail.com
      - recruitment.collegearch@gmail.com
      - llin1@college.harvard.edu
      - lindalin2812@gmail.com
      - snalani731@gmail.com
      - lleanza01@gmail.com
      - rina.nagashima@gmail.com
  - Otherwise will give `YOU ARE UNAUTHORIZED`
- Add accepted emails for both mentees and mentors
- Match together mentees with mentors
  - Mentees will only have one matched mentor at a time
- Search and view all mentees and mentors
  - Searching for one mentor or mentee will also show up their respective mentees/mentors
  - Click their profile picture to see all their account information
- See all emails signed up for the newsletter email list
- Create an event
