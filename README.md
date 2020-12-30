# Seting-up-AWE-database

Helping a friend to test the api from [jobboard](https://www.jobboard.io/) and setup his database. 

**Note:** Feel free to see the example and play around with the files

## Prerequsition

-[Node.js](https://nodejs.org/en/download/)
-Created and setup the mongoDB database

## Usage

1. Clone this repo

    ```bash
   git clone https://github.com/Salweyar/Seting-up-AWE-database.git
   ```
   
2. Install dependencies

   ```bash
   cd projectName
   npm install
   ```

3. create .env file in root of the project and add

      ```bash
      URI = get the mongodb uri from your account to connect
      X_API_KEY =  add key for grant permission so you can fetch data from api. (Goes in header)
      ``` 
  
4. Open the terminal and RUN: 

    ```bash
    node index.js
    ```
