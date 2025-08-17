## steps to build the DevTinder project where Developers can connect to each other 

## DAY ==>01
--Create a React + Vite Application 
--Install Tailwind CSS/ config that framework to application 
--Install Daisy UI
--Add Navbar component 
--Install React-Router-dom


BODY
  ->Navbar
  ->Route="/"  ==>Feed
  ->Route="/Login"  ==>Login Page
  ->Route="/Profile"  ==>Profile Page
  ->Route="/Connection"  ==>Connection Page


--Create BrowseRouter ->Routes->Route(children)
--Create an outlet in Body Component
--Create footer section from daisy ui


## DAY==>02
-->install axios{backend}
-->CORS=> set up in backend  and add middleware   credentials: true
-->whenever making an api call from frontend then always pass axios=>{withCredential :true} to get back the token from cookies 
--> install redux and create store
-->configure the store==>provider to root application==>create a slice==>add reducer to store that you created at step no 1
-->add redux dev tool extension
-->verify the login ==>on click login  state of login must be store in redux store
-->as login happens ==>navbar re-render with hidden profile 


## DAY==>03
-->by default(token is not present ) render(direct) to login page if user is not logged in
-->build logout features
-->get the feed  page and keep it in store {creating a new slice named as feedSlice}
-->built a card of feed data
-->edit profile picture and show toast
-->


## DAY==>04
-->create a connestion request page {THOSE WHO ARE INTERESTED AND THOSE WHO REJECTED}
-->BUILD A FRIEND PAGE WHERE ALL DEVELOPER ARE MUTUAL CONNECTION 
-->BUILD ACCEPTED AND REJECTED BUTOON AND ITS FUNCTIONALITIY