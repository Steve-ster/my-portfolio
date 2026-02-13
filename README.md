# Solo Leveling Portfolio

A stunning portfolio website with Solo Leveling themed UI featuring stat windows, animations, and an admin portal.

## Features

- 🎮 **Solo Leveling Theme**: Iconic blue stat windows with glowing effects
- 🏠 **Home**: Player stats, skills, and achievements
- 📖 **About**: Personal background and experience
- 🚀 **Projects**: Dynamic project showcase with filtering
- 📬 **Contact**: Contact form and social links
- 🔐 **Admin Portal**: Secure authentication and project management

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Supabase Configuration

#### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Copy your project URL and anon key

#### Set Environment Variables
Update `.env.local` with your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

#### Create the Projects Table
Run this SQL in your Supabase SQL Editor:

```sql
-- Create projects table
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  technologies TEXT[] NOT NULL,
  github_url TEXT,
  live_url TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON projects
  FOR SELECT USING (true);

-- Allow authenticated users to insert
CREATE POLICY "Allow authenticated insert" ON projects
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users to update
CREATE POLICY "Allow authenticated update" ON projects
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Allow authenticated users to delete
CREATE POLICY "Allow authenticated delete" ON projects
  FOR DELETE USING (auth.role() = 'authenticated');
```

#### Create an Admin User
1. Go to Authentication > Users in Supabase
2. Click "Add User" > "Create new user"
3. Enter email and password
4. Use these credentials to log into `/admin/login`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── about/
│   │   └── page.js          # About page
│   ├── admin/
│   │   ├── login/
│   │   │   └── page.js      # Admin login
│   │   └── page.js          # Admin dashboard
│   ├── contact/
│   │   └── page.js          # Contact page
│   ├── projects/
│   │   └── page.js          # Projects page
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   └── page.js              # Home page
├── components/
│   ├── Achievement.js       # Achievement card component
│   ├── Navbar.js            # Navigation component
│   ├── PlayerInfo.js        # Player info component
│   ├── ProjectCard.js       # Project card component
│   ├── SkillBar.js          # Skill progress bar
│   ├── StatItem.js          # Stat display component
│   └── StatWindow.js        # Stat window container
├── lib/
│   └── supabase.js          # Supabase client
├── .env.local               # Environment variables
├── next.config.js           # Next.js config
└── package.json             # Dependencies
```

## Customization

### Update Personal Info
Edit `app/page.js` to update:
- Your name, title, and level
- Stats and achievements
- Skills and levels

### Update About Page
Edit `app/about/page.js` to add your:
- Background story
- Education
- Work experience

### Update Contact Info
Edit `app/contact/page.js` to add your:
- Email
- LinkedIn
- GitHub
- Twitter

### Add Projects
1. Log in to `/admin/login`
2. Fill out the project form
3. Projects appear automatically on `/projects`

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Make sure to add your environment variables in Vercel's dashboard.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: CSS-in-JS (inline styles)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Fonts**: Orbitron, Rajdhani (Google Fonts)

## License

MIT
