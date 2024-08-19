# Detailed Secura Project Handover Document

## Project Overview
Secura is a Next.js-based board governance application aiming to provide secure video conferencing, voting, document sharing, and private chat functionalities.

## Current Project State

### Key Files and Their Purposes
1. `src/pages/_app.tsx`: Application entry point with provider setup
2. `src/pages/index.tsx`: Home page component
3. `src/components/MeetingRoom.tsx`: Video conferencing component (partially implemented)
4. `src/components/Sidebar.tsx`: Navigation component

### Environment Setup
- Next.js 14.2.5
- React 18
- TypeScript
- next-auth for authentication
- @huddle01/react for video conferencing

## Detailed Implementation Guide

### 1. Video Conferencing (Huddle01 Integration)

Current Status: Basic implementation in `MeetingRoom.tsx`

To-Do:
a. Room Creation:
   - Implement a `createRoom` function using Huddle01 API
   - Add UI for room creation in `MeetingRoom.tsx`

b. Enhanced Controls:
   - Add state management for audio/video tracks
   - Implement toggle functions for mute/unmute and camera on/off
   ```typescript
   const [isAudioOn, setIsAudioOn] = useState(false);
   const [isVideoOn, setIsVideoOn] = useState(false);

   const toggleAudio = async () => {
     if (isAudioOn) {
       await stopProducingAudio();
     } else {
       await produceAudio();
     }
     setIsAudioOn(!isAudioOn);
   };

   // Implement similar for video
   ```

c. Screen Sharing:
   - Utilize Huddle01's screen sharing API
   - Add a button and handler for screen sharing

d. In-Meeting Chat:
   - Create a `ChatComponent.tsx`
   - Implement real-time messaging using Huddle01's data sending capabilities or a separate WebSocket solution

### 2. Voting System

Create a new `VotingSystem.tsx` component:

```typescript
import React, { useState } from 'react';

interface Poll {
  id: string;
  question: string;
  options: string[];
}

const VotingSystem: React.FC = () => {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [votes, setVotes] = useState<Record<string, number>>({});

  // Implement createPoll, vote, and displayResults functions

  return (
    <div>
      {/* Render polls, voting interface, and results */}
    </div>
  );
};
```

- Implement poll creation, voting mechanism, and results visualization
- Consider using a lightweight blockchain solution or a secure database for vote storage
- Ensure vote privacy and result integrity through cryptographic methods

### 3. Document Sharing

Create a new `DocumentSharing.tsx` component:

```typescript
import React, { useState } from 'react';
import { uploadToArweave } from '../utils/arweave';

const DocumentSharing: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = async () => {
    if (selectedFile) {
      const transactionId = await uploadToArweave(selectedFile);
      // Store transactionId in your database associated with the document
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
      <button onClick={handleFileUpload}>Upload Document</button>
      {/* Implement document list and viewer */}
    </div>
  );
};
```

- Implement client-side encryption before upload
- Create an ARWeave utility in `src/utils/arweave.ts` for handling uploads
- Develop a document viewer component
- Implement access control logic for documents

### 4. User Authentication Enhancement

Extend the current Next-Auth setup:

a. Create custom sign-up and login pages
b. Implement role-based access control:
   ```typescript
   // In _app.tsx
   import { SessionProvider, useSession } from 'next-auth/react';
   import { useRouter } from 'next/router';

   function Auth({ children }) {
     const { data: session, status } = useSession();
     const router = useRouter();
     const isUser = !!session?.user;
     React.useEffect(() => {
       if (status === 'loading') return; // Do nothing while loading
       if (!isUser) router.push('/login'); // If not authenticated, force log in
     }, [isUser, status]);

     if (isUser) {
       return children;
     }

     // Session is being fetched, or no user.
     // If no user, useEffect() will redirect.
     return <div>Loading...</div>;
   }

   function MyApp({ Component, pageProps }) {
     return (
       <SessionProvider session={pageProps.session}>
         {Component.auth ? (
           <Auth>
             <Component {...pageProps} />
           </Auth>
         ) : (
           <Component {...pageProps} />
         )}
       </SessionProvider>
     );
   }
   ```

c. Implement user profile management

### 5. Private Chat

Create a new `PrivateChat.tsx` component:

```typescript
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const PrivateChat: React.FC = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newSocket = io('http://localhost:3001'); // Replace with your socket server URL
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  // Implement message sending and receiving logic

  return (
    <div>
      {/* Render chat interface */}
    </div>
  );
};
```

- Implement end-to-end encryption for messages
- Set up a WebSocket server for real-time communication
- Ensure message persistence (consider using a database like MongoDB)

## Development Workflow

1. Set up the development environment:
   ```bash
   git clone [repository-url]
   cd secura
   npm install
   ```

2. Create a `.env.local` file with necessary environment variables:
   ```
   NEXT_PUBLIC_HUDDLE01_PROJECT_ID=your_huddle01_project_id
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Implement features in this order:
   - Complete Video Conferencing
   - Voting System
   - Document Sharing
   - Enhance User Authentication
   - Private Chat

5. Regularly commit changes and push to the repository

6. Conduct thorough testing for each feature

7. Perform a security audit, especially for document sharing and private chat features

8. Optimize performance and ensure responsive design

## Additional Technical Considerations

- State Management: Consider implementing Redux or React Context for global state management
- API Routes: Utilize Next.js API routes for backend functionality
- Error Handling: Implement a global error handling mechanism
- Logging: Set up a logging system for easier debugging and monitoring
- TypeScript: Ensure proper typing throughout the application
- Accessibility: Implement ARIA attributes and ensure keyboard navigation

## Deadline and Priorities

- MVP deadline: End of the week
- Prioritize core functionalities: Video Conferencing > Voting > Document Sharing > Private Chat
- Ensure a stable and secure baseline before adding additional features

This detailed guide should provide your developer with a clear roadmap for implementing the Secura MVP. It includes specific code snippets, technical considerations, and a structured approach to tackle each feature.
