# Isohack Webapp

## Contribution

[![Build Status](https://travis-ci.org/isohack/hackathon-webapp.svg?branch=master)](https://travis-ci.org/isohack/hackathon-webapp)

In case if you want to contribute in this project then please follow these steps:

1. Make sure that you are comfortable in coding and want to contribute something. There is no need to by shy and new comers are most welcome in this project, and we will surely guide you.

2. Reach out to `shashank.sharma98@gmail.com` so that we can add you to the Isohack organization.
Note: We are focusing on ATC students only

3. If you find any issue which you think you want to solve it, then comment `I want to work on this issue` and after that only you will working on that partiuclar issue. In case if you find any issue which is already taken then avoid working on it. It is the best practice to give easy issues to new comers so that they can grow.

4. In case if you have any suggestion, then open up one issue and tell us what you are thinking about, make sure it is reasonable.

5. Once you take an issue, start working on it and once it is completed, make one Pull Request and try to give us the demo of your work (If it is UI based) so that we can see whether it is working or not.

## Getting Started with Backend

Before going ahead make sure you clone the repository and change directory to that cloned repository:

`git clone https://github.com/isohack/hackathon-webapp`

`cd hackathon-webapp`

### 1. Virtual Environments

While working with python projects it is important to keep your project environment seperate from your local one. With environment we are talking about the dependencies for any particular project. We keep it seperate so that there is no conflicts, have clean project and use those packages which are required. So we start with empty environment and then we install everything from there.

Assuming you have Linux OS we will do that by:

`python -m venv myvenv`

Explanation:

`python -m <virtual environment> <file-name>`

Obviously this is not the only method, there are other ways to do this so try searching for it and use that is comfortable for you.

Now this command will install Virtual environment in that present directory (hackathon-webapp). Now assuming that you have myvenv folder so we need to activate it. Activation is used to activate that partiuclar environment for present session. So to do that:

`source myvenv/bin/activate`

Note: Your virtualenv file must be `myvenv`.

Now as soon as you will type this, you will see that virutal env is activated by showing: `(myvenv)` at left hand side of your command.

Now this needs to be done when you clone this repository, so that you can have all those dependencies seperate which are required by this project and have minimum error while building it.
Try typing `pip freeze` and this will show all the dependencies which are installed on that particular virtual environment.

Note: pip is python package manager, it is used to install packages

### 2. Installing Dependencies

Ok so we have virtual environment set up, now your next step is to set up all the packages and install it. Normally at starting we do most of the things by hand and typing installation commands but when working in project we avoid these things and we simplify things by creating one file called `requirements.txt` which tells us that what are the packages we are using in current project and with one line of command we can install it. So to do that:

`pip install -r requirements.txt`

So it will install all the requirements recursively line by line and it will be much better than typing each command line by line.

### 3. Database configuration

Database configuration is important because in Django when we create models, we need to migrate them. Which means that whatever rules you have specified in models.py file you need to convert that code into database and create those fields at that time. So creating such tables and database is called migration. So whenever you create/change models in Django you need to migrate them so that changes will get affected in database.

By default Django uses mySQL but right now we will use postgreSQL. Generally there is an advantage using this because in case in future if we will rely of JSON type of request and response then we need to save JSON in database and in this case postgreSQL is much better.

Now to set up:

Installation may vary for Ubuntu/Windows so take help of the internet.

Install Postgresql in your local machine and then later you will be able to access it by 'psql' in command line.
In case of error try to search it and find answer.

After using `psql` in command line, it should look something like this:

```
psql (9.5.11)
Type "help" for help.

postgres=#
```

Now here we will type and create our first user with password.

`CREATE ROLE random WITH LOGIN PASSWORD 'password';`

Explanation:

`CREATE ROLE <USER> WITH LOGIN PASSWORD <PASSWORD>`

Now create one database which will be use by Django to store data

`create database isohack;`

Explanation:

`CREATE DATABASE <DATABASE_NAME>`

Now we will provide all the privileges for the user so that django can use it and create tables in that database.

`GRANT ALL PRIVILEGES ON DATABASE isohack TO random;`

Explanation:

`GRANT ALL PRIVILEGES ON DATABASE <DATABASE_NAME> TO <USER>`

Now after typing this you will create one postgres url which will be used by django to access/modify/delete/create table from database. Because at the end we need to tell Django where to look up for database. Even URL is really a great way to interact because let us say you need to set up one database online, so you can host one database from another provider and specigy URL over here. By this you will be working on local machine but the database will be hosted online on another server and what you just changed is one URL.

DATABASE_URL: `postgresql://random:password@localhost/isohack`

Explanation: `postgresql://<user>:<password>@localhost/<database_name>`

*IMPORTANT*: After creating database the tables which will be created by Django will not be modified by you until and unless you know what you are doing.

### 4. Setting up environment secrets

Working in public repository obviously you will not be sharing your secrets. With secrets I am talking about password, secret key or database url. So to avoid that we create one file called `.env`. This file is usually hidden but can be accessed locally. But usually we don't upload these information in repository and we encourage you to configure it by your own. So currently there are 2 main things you need to add in `.env` file.

First create `.env` file and then type:

`SECRET_KEY=<YourSecretKey>`

To avoid any conflicts you can ask secret key from admin or use your own. And second is:

`DATABASE_URL=postgresql://random:password@localhost/isohack`

If you followed the same procedure as mentioned in Database configuration section then the URL will be same just like this, else if you have choosen different username then edit those fields. Now you have everything set up.

Update: There is another environment variable which needs to be there called `APP_STATUS`, for local testing
it will be `APP_STATUS=testing`

There is one more configuration which is `PRODUCTION=False`, but if you will not type anything or ignore it then also it will work fine.

Note: When working in git version control system, we have one file called `.gitignore`, this tells us that what files we need to ignore when pushing the changes. So currently we add `.env` in gitignore file so that this particular file will never be uploaded in repository and by this you will avoid publishing your secrets. 


### 5. Migration

Now we have database set up, so let's migrate few things. As I mentioned earlier when we migrate something then we change/create database, by default there are models available and used by Django even if you create it from scratch for example: Authentication, Sessions etc. So to migrate those type:

`python manage.py makemigrations`

`python manage.py migrate`

These 2 steps are important and make sure you do it correctly. In case if you find error and you are confused what to do next or how to solve it, then seek help with our team.
Once you migrate you should see everything saying `OK`.

Final step, Run the application:

Now you have virtual environemnt, dependencies, database so let's run it. To do that type:

`python manage.py runserver`


And it should give no error. Once that is happen just go to

`http://127.0.0.1:8000/`

And you will see one welcome page.

### Testing

For Testing all you need to do is:

`python manage.py test`

*Note*: Make sure that before testing, your user should have the permission to create db and in order to do that execute command in psql shell:

`ALTER USER dsc CREATEDB;`

Here `dsc` is custom user which I created

## Getting Started with Frontend

To work in frontend at first you need to install all the packages from root directory by doing:

`npm install`

Once installed then you can run development server by doing:

`npm start`

And if you want to test in production then:

`npm run build`
`python manage.py runserver`

Then Visit the given url from terminal

That's it.
In case if urgent help, you can mail us personally at: `atc.isohack@gmail.com`
