# 👴 Alfred

Alfred is a dashboard application using React for the frontend and Java + PSQL for the backend.

![alfred-gif-1](./alfred-assets/alfred.gif)

---

Alfred is a monolithic dashboard application with full CRUD capabilities and RESTful API.

With Alfred, you will have all the tools and information needed to manage your business properly and with ease.

---

### Technologies
- React
- React Router
- Java
- Spring
- Docker
- PSQL
---

### How to run the program.
- Git clone this repository or download it.
- In terminal, cd into /alfred-backend and type 'docker-compose up'
- Open another terminal, cd into /alfred-frontend and type 'yarn start'
- When everything finishes loading, visit http://localhost:3000 to see Alfred in action.
- When done, press CTRL + C to shut down docker and for satefy measures, type 'docker-compose down'

### Proposal

##### A clear problem statement from the client
"Help! There are way too many sticky notes on my desk. I need a dashboard application that will contain my upcoming tasks as well as many other important information of my business."

##### What business problem are you trying to solve with technology?
Workflow issues as well as general confusion in a hectic environment.

##### Clearly present technical requirements of solving the business problem
- As a user, I would like to have a list of the recent activity.
- As a user, I would like to be able to search through all activities.
- As a user, I would like to [view, create, update, delete] my [tasks, memos, orders, support].
- As a user, I would like to have graphs to help visualize the backend data.

##### Why monolith?
Alfred is designed for small, up and coming businesses so the need of microservices would be an overkill. Implementing microservices would actually end up slowing performance unless your business is extremely successful.