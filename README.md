# api-testing-with-db

## First Attempt:
Tried to build an API using MongoDB Database for the <b>very first time</b> but the attempt wasn't fully successful. All I could build after much brainstorming was an Empty API.

It showed STATUS CODE: 200 ie OK, on the GET request. (but I wasn't able to post anything in the API, I need to figure out why.)
<img width="960" alt="image" src="https://user-images.githubusercontent.com/77205923/217913732-3f50e3df-cc76-4f6b-be08-92761b20d642.png">
Attaching the screenshot of the API Test result done with the help of vs code extension - [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

## Second Attempt at API Testing:

I decided to test [my local API](https://github.com/SanskritiGupta05/anime_api) which i Build for the Task-4 of Keploy Fellowship (Although, it does not have a database connected to it)

### `200 OK response` on the request to show the list of all animes from API?
<img width="723" alt="image" src="https://user-images.githubusercontent.com/77205923/217915763-cb423347-b87e-4f0c-a0e2-ea17f698fe48.png">

### `200 OK response` on request to show anime info with id=1? 
<img width="722" alt="image" src="https://user-images.githubusercontent.com/77205923/217916611-256ea260-8e83-4a0a-907c-415283de8343.png">
<img width="826" alt="image" src="https://user-images.githubusercontent.com/77205923/217916713-d5d993bc-d9bc-45bf-9764-815058f7d5a7.png">

### `200 OK response` on request to show anime info with id=10? `FAILS` because out of limit (>6)
<img width="885" alt="image" src="https://user-images.githubusercontent.com/77205923/217917052-845b49e3-e2c7-4385-a613-5379869fc150.png">

### `200 OK` response `PASS` and response must have a body `PASS`
<img width="928" alt="image" src="https://user-images.githubusercontent.com/77205923/217917222-15d669f5-66ce-4242-99cd-ce5313f4e5b8.png">

### `200 OK` response `FAILS` and response must have a body `FAILS`
<img width="912" alt="image" src="https://user-images.githubusercontent.com/77205923/217917575-e120d474-e380-4b5a-ba41-615213add8c3.png">

### `200 OK` response `FAILS` and response must have a body `PASS`
<img width="913" alt="image" src="https://user-images.githubusercontent.com/77205923/217928823-ec95a8cf-0549-465d-9162-d34e0c279f7a.png">

### `200 OK` response `FAILS` and response must have a body `PASS` and response time < 200ms `PASS`
<img width="919" alt="image" src="https://user-images.githubusercontent.com/77205923/217929110-71f99cd2-3f3e-42c9-b3d4-7b251a18a694.png">

### `200 OK` response `PASS` and response must have a body `PASS` and response time < 200ms `PASS`
<img width="922" alt="image" src="https://user-images.githubusercontent.com/77205923/217929354-d81ab958-84a8-4f05-90b7-cdce786341c6.png">

### `200 OK` response `FAIL` and response must have a body `FAIL` and response time < 200ms `PASS`
<img width="923" alt="image" src="https://user-images.githubusercontent.com/77205923/217929475-71b5ab13-02e1-451b-a858-413e2a17705c.png">
