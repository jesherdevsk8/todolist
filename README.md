## A simple todo list to practice dockerfile

- Run without docker-compose

> docker build --tag todolist .

> docker volume create todo-db

> docker run -d -p 3000:3000 -v todo-db:/etc/todos/ -v $(pwd):/app --name todolist node:18-alpine sh -c "cd /app && yarn install && yarn run dev"
