# Torch Night
Link: https://fanciful-taiyaki-e49a01.netlify.app/

## Description
Torchnight is a dungeon crawling turnbased roguelite ran in the browser. Users will be able to create characters that they can then run through a dungeon where they will attempt to extract whatever loot they can. Dungeons are built with modular square tiles that the player can explore one by one. Each tile could contain enemies, traps, treasure, etc... The goal is for the player to extract as much as they can without falling. Once the player makes it out, they can choose to purchase items from the shop where they can use on their next excursion. Players can manage their characters and items to prepare before making their next excursion.

## Technologies Used
* Python
* Flask
* PotgreSQL
* React
* Tailwind

## User Stories
* As a user, I can create an account
* As a user, I can log in to my account
* As a user, I can log out of my account
* As a user, I can create characters
* As a user, I can purchase items from the shop and assign them into specific characters
* As a user, I can choose to enter a dungeon with a specified character
* As a user, I can choose what direction to go in the dungeon
* As a user, I can interact with tiles such as enemies, treasure, traps and escape routes
* As a user, I can consume items for different effects in the dungeon


## Wireframes
![home](https://media.git.generalassemb.ly/user/46962/files/07c71180-4b47-45b5-8ebf-68acbd8b88a3)
![characters_all](https://media.git.generalassemb.ly/user/46962/files/1b9c6c9a-9bfd-4408-b7eb-8d17e571abaa)
![character](https://media.git.generalassemb.ly/user/46962/files/9e74bc55-8f02-4fdd-848c-6e4483a69e8d)
![shop](https://media.git.generalassemb.ly/user/46962/files/897529a6-b50d-44db-86a5-97826ee5fffb)
![item](https://media.git.generalassemb.ly/user/46962/files/6ed993e3-35ec-4e44-909b-e7d1d7e9e508)
![game](https://media.git.generalassemb.ly/user/46962/files/97865435-fdd4-4bcd-a413-08c09b488359)

## Routes

users
* GET / - see all users
* GET /userID - see specified user information 
* POST /register - registers a user if they click to sign up
* POST /login - logs in a user
* POST /logout - logs the user out

characters
* GET / - returns back all of the characters that belong to that user
* POST / - creates a character
* GET /characterID - finds the specified character
* PUT /characterID - updates the character
* DELETE /characterID - deletes the character

## Routes
* Finish Game Portion
- Mobile Responsiveness
- Canvas for dungion tiles/map
- Character classes with different attributes
- Skills to use in and outside of combat based on character classes
- Dungeon obstacles such as water, holes, spikes etc
- Dungeon interactions such as doors, switches, secret passages
- More attributes
- level up skill/perk tree
- Purchase equipment such as armor, boots, gloves etc that have different properties
- Pick up items/equipment from dungeons
- Descend to different layers of dungeon instead of escaping where there is higher risk but higher rewards
- Upgrade items and equipment
- Combat History
- Animations
- Sounds
