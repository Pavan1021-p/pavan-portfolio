# Deployment Instructions: Pavan Jethva Portfolio

This Next.js application is designed to be easily deployed on [Vercel](https://vercel.com/) with a built-in PostgreSQL database using [@vercel/postgres](https://vercel.com/docs/storage/vercel-postgres) or any external PostgreSQL provider.

## Prerequisites
1. A GitHub account
2. A Vercel account linked to your GitHub
3. Git installed locally

## Step 1: Push Code to GitHub
First, commit your code and push it to a new GitHub repository:

```bash
git init
git add .
git commit -m "Initial commit of portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/pavan-portfolio.git
git push -u origin main
```

## Step 2: Deploy to Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New Project**.
3. Select the `pavan-portfolio` repository you just created.
4. Keep the framework preset to **Next.js**.
5. Do not click Deploy just yet—we need to set up the database.

## Step 3: Setup PostgreSQL on Vercel
1. Go to the **Storage** tab in your Vercel Dashboard.
2. Click **Create** and select **Postgres**.
3. Follow the sequence to provision your database.
4. Once the database is created, navigate to its settings and select **Connect Project**.
5. Connect it to the `pavan-portfolio` project you are setting up. Vercel will automatically inject the `DATABASE_URL` environment variable.

## Step 4: Initialize the Database Schema (Important)
Before the contact form can work, you need to create the table.
1. In your Vercel Postgres dashboard, go to the **Query** tab.
2. Run the exact SQL schema command provided in `src/lib/schema.sql`:

```sql
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## Step 5: Final Deploy
1. Return to your Project overview in Vercel.
2. If it hasn't deployed already, or if the environment variables needed syncing, trigger a redeploy.
3. Your application is now live! Test out the "Contact" form to verify that data flows correctly into your PostgreSQL database.
