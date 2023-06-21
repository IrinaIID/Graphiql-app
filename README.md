<h1 align="center">GraphQl editor</h1>

In collaboration with: [sanich123](https://github.com/sanich123) , [predmaxim](https://github.com/predmaxim)

1. How to launch:
   
You need to install yarn to launch the project `npm i yarn -g`

copy and past into your code-editor command-line: `git clone git@github.com:sanich123/graphiql-app.git project&&cd project&&git checkout develop&&yarn&&yarn dev`

*or you can use deployed version:* [Deployed](https://graphiql-kappa.vercel.app/graphiql)

2. Screenshots: 
![image](https://github.com/sanich123/graphiql-app/assets/70276651/99eb4755-4207-489b-b6a2-021968c85dfe)
![image](https://github.com/sanich123/graphiql-app/assets/70276651/32995e98-b9fb-4132-bcdf-d044a5181928)
![image](https://github.com/sanich123/graphiql-app/assets/70276651/d21b32d8-313d-4da3-95b5-c24843041749)
![image](https://github.com/sanich123/graphiql-app/assets/70276651/59fb23a2-f17b-4c72-b7eb-6d3e40f152e3)
![image](https://github.com/sanich123/graphiql-app/assets/70276651/6261a868-6d69-4c9b-9a1c-5b8f3015be47)

3. Done 05.2023

### Tech stack:
**Front-end:** 
Next.js, Redux, Typescript

### Implemented:
+ Авторизация через firebase. Подключены google, github и возможность зарегистрироваться с адресом электронной почты.
+ Адаптивный дизайн. 3 разрешения - десктоп, планшет и мобильное устройство.
+ Загрузка схемы с открытых graphql серверов (тестировалось на https://www.apollographql.com/blog/community/backend/8-free-to-use-graphql-apis-for-your-projects-and-demos/)
+ Проверка возможности загрузки схемы с сервера
+ Два языка (русский и английский), две темы оформления



