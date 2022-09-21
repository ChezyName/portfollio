# A Portfolio Template
Whilst working on different projects throughout your life, you might want/need a place to place information about yourself in a clean organized place that looks nice and most importantly, **FREE & OPEN SOURCE!** Here is the solution to your problemo, and I'll teach you how to use it!

# Download & Setup
First [download](https://github.com/ChezyName/portfollio) the source code. Then you will need to change the **.env** file, **THIS IS IMPORTIANT** because if you don't you won't be able to change your name or EmailJS properties.

## Basic Usage and Changing The ENV:
The basic usage of this template is changing the name, Github dev link & EmailJS config inside the **.env** file.
The **.env** file will look like this:

    # 1. Type your EMAIL JS INFO HERE ALONG WITH OTHER USEFULL DATA FOR THE SITE
    # 2. CHANGE THE NAME OF THE FILE FROM "_.env" to ".env",
    VITE_EMAILJSSERVICEKEY=
    VITE_EMAILJSPUBLICKEY=
    VITE_EMAILJSTEMPLATEID=
    VITE_NAME="FIRST LAST"
    VITE_GITHUBAPI=https://api.github.com/users/USERNAME/repos

You can copy this into your **.env** or change the name of your **_.env** to **.env**, Then you can change the different variables in your **env** file.

> If you have Node or NPM Installed you can run npm run dev inside the folder to see your website which is required to publish the website.

For the **env** variable `VITE_GITHUBAPI=` change `USERNAME` to your GitHub username.

For the **env** variable `VITE_NAME=` change `FIRST LAST` to your First and Last name or remove  `FIRST LAST` to any name that you want the webpage to be named and the typewriter effect on page one.

## Email.JS
First up, sign up for [Email.JS](https://www.emailjs.com/) on their website. Once you sign up and complete the Email verification, go to their [dashboard](https://dashboard.emailjs.com/admin).
### Service ID:
Once there you will see the Email Services screen. create a new service with your email service provider. I use Gmail so I clicked on Gmail and connected my account. Once you connect your service account and complete that, you should copy the **Service ID** and paste it in as a value for the **.env** variable named `VITE_EMAILJSSERVICEKEY=`.