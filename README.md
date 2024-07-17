This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install all the packages:

```bash
npm i
```

Open docker

Run the following command to create the container

```bash
docker run --name <name> \
        -e POSTGRES_DB=wasteless \
        -e POSTGRES_USER=postgres \
        -e POSTGRES_PASSWORD=<yourpassword> \
        -p 5432:5432 \
        -d postgres
``` 

```bash
docker run --name <name> -e POSTGRES_PASSWORD=<yourpassword> -d postgres
```

Make sure the container is running

make sure your .env file has:
````bash
DATABASE_URL=postgresql://postgres:<yourpassword>@localhost:5432/wasteless?schema=public

```

Open prisma studio 
```bash
npx prisma studio
```


Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.





