This repo contains a simple angular 2 app which can search a data from json server and display result.
When you click on the movie the details of the movie shows up.
It uses basic angular 2 constructs

1: Clone repo
```
git clone <<url>>
```

2: Install packages
```
npm install
```

3.Start JSON Server  with the top250.json
```
json-server -p 4000 ./data/top250.json
```

4: Start server (includes auto refreshing) and gulp watcher
```
npm start
```
