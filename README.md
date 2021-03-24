
# AD320-TeamAdams 

## Team Members:
* Alas I Ali
* Courtney Hoppus
* Chris Navoczynski
* Dylan Wilkinson

## Application Purpose:
To design a mock Web App for the resale of products.  

### Functionality: Users and Sellers 
(Current visual components as of 3/24/2021)

#### Design:
* The primary choice of styles used was _material-ui_.  
* There are some css files included for extra styling.
* The App currently meets color constrasting requirements.

#### Main (Home) Page:  
* The main page is the start of the app.  
* It consists of the Logo and Nav Bar which will be constant on every page you are taken to.  
* The Logo, when clicked, will return you to the Home Page. 
* Currently (3/24/2021) the mock item cards represented on the page will be where recently added products.  When you click on one it would take you to an Item Detail page. 

#### The Nav Bar:
* |Logo| This will revert a user back to the Home Page
             
* |Categories| A drop down menu with preselected options to narrow down searches Currently nonfunctional (3/24/2021)

* |Sell| A seller (once logged in) Would be able to add a new item to sell
(See below for more details)

* |LogIn| Existing users and sellers would log-in here
Currently nonexistent (3/24/2021)

* |SignUp| New users and sellers would signup to browse items to buy or sell
Currently nonexistent (3/24/2021)

#### The Sell Option:
* When clicking on the Sell button you are taken to a form page to create (POST)
a new item.  (Ideally we would want a seller to have to log into this page)
* The form provides the fields needed to match the Item Schema with the ability to add attachemnts then submit.  (Currently nonfunctional 3/24/2021)

#### Item Page:
* The Item Page is to display a larger image of the item chosen as well as the price, location of the seller, and the description of the item.  
* If a buyer would like to purchase this item they would click on the _Contact Seller_ button
* Similar Items based on Category and Location would be displayed on the bottom.
(Currently Mock cards and nonfunctional 3/24/2021)

#### Contact Seller:  
* The Contact Seller button leads to another form where you would be able to send
messages to the seller of that particular product. 

### Functionality: Profiles: Admin, Sellers, and Buyers 
* Auth0 login access (Currently non-functional 3/24/2021) is required to receive messages from buyers.
* Auth0 login access (Current non-functional 3/24/2021) is required to send messages to buyers
* Auth0 login access (Currently non-functional 3/24/2021) for Sellers to see their product (_GET_) once created.
* Sellers can update (_PUT_) products as sold (Currently only done through Postman 3/24/2021)
* Admins can add, delete and edit items from the Admin View (Currently non-funtional 3/24/2021)
* Admins can view items (Currently non-functional 3/24/2021)
* Admins can view seller and user details (Currently non-funtional 3/24/2021)
* Admins can message users and sellers.  (Auth0 Login is required which is non-functional)
* Admins can edit and lock user and seller profiles (Currently non-functional 3/24/2021)

#### Additional Credit
* Instructor **Jason Panzer** for weekly sample code updates, lectures, and additioal resources to utilize as a basefor functionality purposes.
