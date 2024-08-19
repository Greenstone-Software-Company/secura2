# Secura - Board Governance Application

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/your-username/Secura.git
   cd Secura
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following content:
   ```
   NEXT_PUBLIC_HUDDLE01_PROJECT_ID=your_huddle01_project_id
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/pages`: Next.js pages
- `/src/components`: React components
- `/src/styles`: CSS modules and global styles
- `/public`: Static assets

## Key Features to Implement

- Video Conferencing (using Huddle01)
- Voting System
- Document Sharing
- Enhanced User Authentication
- Private Chat

For detailed implementation guidelines, refer to the `PROJECT_HANDOVER.md` file.

## Technologies Used

- Next.js 14.2.5
- React 18
- TypeScript
- next-auth
- @huddle01/react

## Contribution Guidelines

Please follow the existing code style and commit message conventions. Create feature branches and submit pull requests for review.