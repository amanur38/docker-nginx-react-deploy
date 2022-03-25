# React App deploy with Docker

> **_The main goal is that the React App build and deploy with docker. When the app's other router hard reload to return a 404 page. The 404 not found page is solved by nginx inside of the image._**

## Available Scripts

In the project directory, you can run:

### `npm install`

To installing all dependencies that is required to run it.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Build Docker Image`

I assume that you have installed docker on your machine. If not please check the [docker]() installation documents.

```
docker build -t "react-nginx" .
```

The **react-nginx** would be the docker image name. You can write any name what do you want it's name.

### `Build Docker Image`

To run the docker image.

```
docker run -it -p 80:80 -d react-nginx
```

---

> Note: 80 port may be used already in your PC.

---

> [Publish or expose documentation](https://docs.docker.com/engine/reference/commandline/run/#publish-or-expose-port--p---expose)

> Now, try to access at http://localhost

If you want to run it on a port **example: 3000**

```
docker run -it -p 3000:80 -d react-nginx
```

> Then, try to access at http://localhost:3000
