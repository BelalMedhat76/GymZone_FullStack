# Gym Website - Full Stack Application

This is a fully responsive and animated Gym website built using **Next.js 15 (JavaScript)** for the frontend and **Python Django** for the backend. The application allows users to explore various fitness programs, register for memberships, and engage with the platform seamlessly.

## Features

### Frontend (Next.js 15 + Tailwind CSS)
- Modern UI with animations
- Fully responsive design for all devices
- Interactive program listings
- Smooth page transitions using Framer Motion

### Backend (Django + Django REST Framework)
- CRUD operations for fitness programs
- Secure database storage using PostgreSQL
- Admin panel for managing programs & users

## Tech Stack

### Frontend:
- **Next.js 15** (App Router)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **React Hook Form** (Form handling)
- **Axios** (API requests)

### Backend:
- **Django** (Backend framework)
- **Django REST Framework** (API)
- **PostgreSQL** (Database)

## Installation

### Prerequisites
- Node.js & npm
- Python & pip
- PostgreSQL (or SQLite for development)

### Setup

#### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/gym-website.git
cd gym-website
```

#### 2. Setup Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser  # Create an admin user
python manage.py runserver
```

#### 3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```
