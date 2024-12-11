<img width="1668" alt="image" src="https://github.com/user-attachments/assets/4d2c3063-13e1-4c67-94b2-6138f8b33a98">


A full-stack application where users can create their unique first generation pokemon team. Currently only Gen 1 is available but due to modularity of the application it is very easy to add other generations.

### Build using 
- Django                    Backend
- Django REST Framework     API-endpoints
- React Vite                Frontend
- Redux                     State management

## Features 
- Django backend has custom function which populates local PostgreSQL database
- Custom API endpoints with validation
- Automatic User Profile Class
- User authentication & authorization
- - Complete Login/Registration flows 
- You can log into an account that you've created 
- Make a pokemon team!

## Future features 
- Add user Profile Page (custom pictures?)
- Add evolution chain to pokemon detail pages
- Context manager for caching
- Save pokemon team to your user profile


## Installation guide 
to run this application having postgresql installed locally is mandetory. To understand how to download postgresql please use the following [link](https://www.postgresql.org/)

currently the postgresql username is `postgres` and the password is `wachtwoord` but this can easily be changed in  the following file `/poketeam/poketeam_backend/poketeam_backend/settings.py`

First of all clone the directory. You can easily clone it by using the following command in terminal:
`git clone https://github.com/kaikuzai/poketeam.git` 

make a virtual environment and add all of the requirements
After the directory has been cloned we must create and activate and create our virtual environment the backend must initialized run the following commands:
```bash 
cd poketeam                                     navigate to directory
cd poketeam_backend                             navigate to backend
python -m venv venv                             create virtual environment
pip install -r requirements.txt                 install dependencies
```
Please make sure to deactivate your local python runtime and switch over to the virtual environment
```bash
python manage.py makemigrations                 plan the migrations
python manage.py migrate                        make the migrations 
```
Now it's time to populate the database run the custom command with `python manage.py pkmn_add` and watch how all the pokemon are added to your database. 
After that add the types with the command `python manage.py pkmn_add_type`

Now that the database has been filled and the backend has been initialized you can run the server with the command 
```bash 
python manage.py runserver
```

Open a new terminal and navigate back to the root folder user the following command: 
```bash 
cd ..
cd poketeam_frontend
```

Then provision the front-end application with the following commands: 
```bash
npm i
npm run dev
```
You should now be able to see on which port your application is running. Simply add the address to your chrome browser and play around in the pokemon application. 


#### Account creation
To create an account make sure you're on `127.0.0.1` and NOT `localhost` after that navigate to either `/register` or `/login`
- 


