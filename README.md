# My personal developer portfolio

Welcome to my personal developer portfolio. If you are a fellow developer feel free to explore my portfolio and get inspiration for yours!

## Features

- 🎮 **Gaming/Personality theme**: Iconic blue stat windows with glowing effects
- 🏠 **Home**: My Career stats, skills, and achievements
- 📖 **About**: My Personal background and experience
- 🚀 **Projects**: My finished projects are showcased here 
- 📬 **Contact**: A contact form to get in touch with me
- 🔐 **Admin Portal**: Secure authentication and project management where I can add/edit/remove projects

## Tech Stack

Frontend

- Framework: Next.js 14 (App Router)
- Language: JavaScript (ES6+)
- UI Library: React 18
- Styling: CSS-in-JS (Inline Styles with CSS Variables)
- Fonts: Google Fonts (Orbitron, Rajdhani)

Backend

- Database: Supabase (PostgreSQL)
- Authentication: Supabase Auth
- API: Supabase REST API
- Security: Row Level Security (RLS) Policies

Development Tools

- Package Manager: npm
- Linting: ESLint (next/core-web-vitals)
- Version Control: Git
- Code Editor: VS Code

Deployment & Hosting

- Platform: Vercel
- CI/CD: Automatic deployment via Git integration
- Domain: Vercel subdomain (or custom domain)

Performance & SEO

- Image Optimization: Next.js Image Component
- SEO: Meta tags, sitemap.xml, robots.txt, Schema.org structured data
- Performance Monitoring: Lighthouse

## How to run locally 

### Prerequisites

- **Node.js** v18.0.0 or higher
- **npm** v9.0.0 or higher
- **Supabase Account** (free at [supabase.com](https://supabase.com))

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio
```

2. **Install dependencies**
```bash
   npm install
```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Set up Supabase Database**
   
   In your Supabase SQL Editor, run:
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

   -- Create messages table
   CREATE TABLE messages (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     message TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
   );

   -- Enable Row Level Security
   ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
   ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

   -- Projects policies
   CREATE POLICY "Allow public read access" ON projects
     FOR SELECT USING (true);

   CREATE POLICY "Allow authenticated insert" ON projects
     FOR INSERT WITH CHECK (auth.role() = 'authenticated');

   CREATE POLICY "Allow authenticated update" ON projects
     FOR UPDATE USING (auth.role() = 'authenticated');

   CREATE POLICY "Allow authenticated delete" ON projects
     FOR DELETE USING (auth.role() = 'authenticated');

   -- Messages policies
   CREATE POLICY "Allow public insert" ON messages
     FOR INSERT WITH CHECK (true);

   CREATE POLICY "Allow authenticated read" ON messages
     FOR SELECT USING (auth.role() = 'authenticated');
```

5. **Create an admin user**
   
   In Supabase: Authentication → Users → Add User
   - Enter your email and password
   - Use these credentials to access `/admin/login`

6. **Run the development server**
```bash
   npm run dev
```

7. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production
```bash
npm run build
npm start
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint


## How to Add Projects
1. Log in to `/admin/login`
2. Fill out the project form
3. Projects appear automatically on `/projects`


## License

This is my personal portfolio. Feel free to get inspiration, but please don't copy it directly. Build your own unique portfolio.
