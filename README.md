# Dropbox-clone

This Next.js 14 project serves as a basic replica of Dropbox. It demonstrates the implementation of file upload, renaming, and deletion functionalities. The project was crafted by adhering to  NEXT.JS 14! (React, Clerk, Shadcn, Firebase, Drag/Drop, CRUD, TS)."

File data and details are stored in Firebase, while Clerk handles the authentication process. To utilize both services, it is necessary to create accounts for Firebase and Clerk.

Environment configuration
Start by generating a .env.local file within the project's root directory. Subsequently, navigate to your Clerk account and add a new application. In the left-hand menu, of the newly created app, access the API Keys section under Developers. Locate and note down the NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY. Paste these keys into the .env.local file.

Getting Started
First, run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Inter, a custom Google Font.

Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
The simplest method to deploy your Next.js application is through the Vercel Platform, developed by the creators of Next.js.

Check out our Next.js deployment documentation for more details.

To view the deployed app, click here.

Libraries
react-dropzone

npm install --save react-dropzone
clerk

npm install @clerk/nextjs
shadcn/ui

npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add table
npm install @tanstack/react-table
npx shadcn-ui@latest add skeleton
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add input
next-themes

npm install next-themes
firebase

npm install firebase
react-firebase-hooks

npm i react-firebase-hooks
pretty-bytes

npm i pretty-bytes
react-file-icon

npm i react-file-icon
npm i --save-dev @types/react-file-icon
zustand - State management library

npm install zustand 
react-hot-toast

npm install react-hot-toast
