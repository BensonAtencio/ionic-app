# ionic-app

## A simple form using ionic framework

### I only have a plain design but to make up for that I make sure that the forms won't accept empty inputs just like what real forms would do.

![Screenshot 2022-07-26 153047](https://user-images.githubusercontent.com/108327522/180949275-ac159949-13b3-4a1f-a96b-089854ca5ceb.jpg)
![Screenshot 2022-07-21 153318](https://user-images.githubusercontent.com/108327522/180156837-8ca018ba-bb74-4878-966e-fa12d3b9bc67.jpg)

Each empty field will have their own error message.

These are the samples of error message
![Screenshot 2022-07-21 151740](https://user-images.githubusercontent.com/108327522/180153631-f0b91535-7d6a-43a7-acf7-da04f4dca935.jpg)
![Screenshot 2022-07-21 153521](https://user-images.githubusercontent.com/108327522/180169827-fa05efe6-98f2-4e32-aea3-2522a56ce287.jpg)
![Screenshot 2022-07-21 163635](https://user-images.githubusercontent.com/108327522/180169846-fd3b44b8-ebaa-4b17-a476-c9e60c16d86b.jpg)



It is made possible by using ToastController.

This is just a snippet of the condition that I use
![Screenshot 2022-07-21 151432](https://user-images.githubusercontent.com/108327522/180152909-40411d32-5fd9-4e6d-8f2e-74f5e897e2c8.jpg)

If that condition is satisfied I routed the buttons in order to go to the homepage
![Screenshot 2022-07-21 152157](https://user-images.githubusercontent.com/108327522/180154210-ef299c5f-e938-4183-a2ab-66ed653fa034.jpg)

This is what my homepage looks like
![Screenshot 2022-07-28 180825](https://user-images.githubusercontent.com/108327522/181481968-ccdb2f4c-a124-4224-9e41-78d2b8e05394.jpg)

I also change the app-routing so that it will go to the login page directly after opening it to the localhost
![Screenshot 2022-07-21 152213](https://user-images.githubusercontent.com/108327522/180154706-e64192ba-e836-452c-b3fd-213c110100c4.jpg)

I added two new buttons one is for the popover and one is for the action sheet
![Screenshot 2022-07-26 171052](https://user-images.githubusercontent.com/108327522/180969840-44d06ab9-335f-48c7-b6fa-de12a968463c.jpg)

This is what the popover looks like
![Screenshot 2022-07-26 170301](https://user-images.githubusercontent.com/108327522/180969956-b74d5adc-e808-4842-9013-aba824d7a49b.jpg)

This is the action sheet
![Screenshot 2022-07-26 170141](https://user-images.githubusercontent.com/108327522/180970153-6632207e-cd24-4cd2-9c9d-cc55e2fe19bf.jpg)

This is a demo of the newly added elements
https://user-images.githubusercontent.com/108327522/180971767-3e29a66b-6756-4fbd-99a6-2f1557c2b538.mp4

I put firebase authentication for my login and register form
![Screenshot 2022-07-28 181209](https://user-images.githubusercontent.com/108327522/181482628-9cb10b56-2b54-4276-b57d-a04419a816b1.jpg)
![Screenshot 2022-07-28 181222](https://user-images.githubusercontent.com/108327522/181482645-a7e28a70-024c-4fa7-9ae4-897ebd6829af.jpg)
![Screenshot 2022-07-28 181240](https://user-images.githubusercontent.com/108327522/181482715-4298f23b-ae0b-4c5b-934d-f3e89ee6edf7.jpg)
![Screenshot 2022-07-28 181253](https://user-images.githubusercontent.com/108327522/181482771-bc487562-0ca4-4565-86aa-b361770ba87a.jpg)


I also added another button for the api that leads to a trivia page where the api data is shown
![Screenshot 2022-07-28 181730](https://user-images.githubusercontent.com/108327522/181482264-7befe123-1155-426d-a782-5eddc7e593b9.jpg)
![Screenshot 2022-07-28 180851](https://user-images.githubusercontent.com/108327522/181483115-fdfa948f-0a38-4694-8b28-193194348a5c.jpg)


These are the codes
![Screenshot 2022-07-28 180920](https://user-images.githubusercontent.com/108327522/181483006-e548b128-46fe-4bc4-9310-3c963ff97f31.jpg)
![Screenshot 2022-07-28 180942](https://user-images.githubusercontent.com/108327522/181483069-ef41bbdd-fad0-4d4a-8b87-7c9a35a6e8ca.jpg)
![Screenshot 2022-07-28 181000](https://user-images.githubusercontent.com/108327522/181483079-ee7c3a43-435f-44bc-a6fb-1a1c888ed61b.jpg)

This is the api that I use
https://opentdb.com/api_config.php


