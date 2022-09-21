# A Portfolio Template
Whilst working on different projects throughout your life, you might want/need a place to place information about yourself in a clean organized place that looks nice and most importantly, **FREE & OPEN SOURCE!** Here is the solution to your problemo, and I'll teach you how to use it!

# Download & Setup
First [download](https://github.com/ChezyName/portfollio) the source code. Then you will need to change the **.env** file, **THIS IS IMPORTANT** because if you don't you won't be able to change your name or EmailJS properties.

## Basic Usage and Changing The ENV:
The basic usage of this template is changing the name, Github dev link & EmailJS config inside the **.env** file.
The **.env** file will look like this:
> The ENV file is a Typescript file as the original .env file did not work with github pages. So **.env** is in reality `src/ENV.ts` and you will have to rename the `src/_ENV.ts` to just `src/ENV.ts` Beside that everything else is the same,

``` Typescript
    const langs:any = [
        "LANG A",
        "LANG B",
        "LANG C",
        "LANG D",
    ];

    export const env = {
        VITE_EMAILJSSERVICEKEY:"",
        VITE_EMAILJSPUBLICKEY:"",
        VITE_EMAILJSTEMPLATEID:"",
        VITE_NAME:"FIRST LAST",
        VITE_GITHUBAPI:"https://api.github.com/users/USERNAME/repos",
        VITE_GITHUBNAME:"USERNAME",
        VITE_LANGS: langs,
    }
```

## Basic Editing Of Name, Username & GithubAPI Link:

You can copy this into your **.env** or change the name of your **_.env** to **.env**, Then you can change the different variables in your **env** file.

> If you have Node or NPM Installed you can run npm run dev inside the folder to see your website which is required to publish the website.

For the **env** variable `VITE_GITHUBAPI=` change `USERNAME` to your GitHub username.

For the **env** variable `VITE_NAME=` change `FIRST LAST` to your First and Last name or remove  `FIRST LAST` to any name that you want the webpage to be named and the typewriter effect on page one.

## Username & Langs

For the Username just change the Username part to your github username, so From: `VITE_GITHUBNAME:"USERNAME"` to `VITE_GITHUBNAME:"MYREALUSERNAME"`

And for languages, you would want to add, change, or remove programming languages and frameworks aswell as engines on to it.
For example:
``` Typescript
    const langs:any = [
        "LANG A",
        "LANG B",
        "LANG C",
        "LANG D",
    ];
```
Can change to:
``` Typescript
    const langs:any = [
        "Unity",
        "Unreal Engine 4",
        "Javascript",
        "Typescript",
    ];
```
This can also be any size like a single language, or many languages/frameworks.

## Email.JS
First up, sign up for [Email.JS](https://www.emailjs.com/) on their website. Once you sign up and complete the Email verification, go to their [dashboard](https://dashboard.emailjs.com/admin).

### Service ID:
Once there you will see the Email Services screen. create a new service with your email service provider. I use Gmail so I clicked on Gmail and connected my account. Once you connect your service account and complete that, you should copy the **Service ID** and paste it in as a value for the **.env** variable named `VITE_EMAILJSSERVICEKEY=`.

### Public Key:
Go to the [account](https://dashboard.emailjs.com/admin/account) section of the [dashboard](https://dashboard.emailjs.com/admin),
Find your Public Key and paste it into the **.env** variable named `VITE_EMAILJSPUBLICKEY=`

### Email Template + Template ID
On the [dashboard](https://dashboard.emailjs.com/admin), there is a section named Email Templates. Here is where you can edit how your email looks like when its sent to you.
For the subject line copy and paste the following:

    Contact From {{user_name}}
   
Change the to Email & From contact to your email and name respectively.

Next, change the content to the following as well:

    Return Email: {{user_email}}

	You got a new message from {{user_name}}:

	{{msg}}

After you complete that, save the template and either copy or write down the TemplateID by going to the previous page or [clicking here](https://dashboard.emailjs.com/admin/templates). Then change the `VITE_EMAILJSTEMPLATEID` inside the **.env** file. `VITE_EMAILJSTEMPLATEID=`.

# Advanced Editing
Everything is writing in React, so once you download it and have NPM installed, type `npm run dev` inside the terminal to test the code. It will  give you a link to your locally ran website, which typically at [http://127.0.0.1:5173/](http://127.0.0.1:5173/),

> If npm run dev is not working you either have to download NODEJS and/or node package manager, (NPM) or install the dependencies for the website by running `npm i` or `npm install` which will install everything inside package.json.

If you know how to use React.JS then you'll be just fine, If not find a tutorial.
This app is also used in VITE so packaging your app a slightly different.

Inside the src folder there are components and pages. Compoenents are the things that work for everysingle page, IE: the nonexistent Navbar and the Scroll mechanic.

The pages folder inside the src folder are for each page.
AboutMe,Contact,Home, and the Github Frameworks pages are all locaed inside src/pages.


# Building & Packaging
As long as .github folder is safe and located inside your repo, whenever you run `npm run build` and make a commit and push to github, it will automaticly commit the dist folder to a new branch named **gh-pages**,

On https://github.com/username/repo/settings, On the left pannel click on the pages button and select **Deploy from a page**, select the branch on root and click Save. In a little bit your github page should be active on http://username.github.io/repo

> If your Github repo is not named portfollio you will get an error, Inside vite.config.ts change the base from `"/portfollio/"` to whatever your repo is named
``` Typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfollio/',
  plugins: [react()]
})

```

# Updates & Fixes
Some minor updates and fixes I'll be working on are the following:

- Iphone / Mobile Support,
- Delay on scroll for Trackpad Support,
- Github Frameworks Page: Better loading,

Thats Basicly It, Enjoy this Free & Open to use Site.