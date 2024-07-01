// Example: pages/meeting.tsx
import { useHuddle01 } from '@huddle01/sdk';
const Meeting = () => {
  const { joinRoom, leaveRoom } = useHuddle01();
  return (
    <div>
      <button onClick={() => joinRoom('room-id')}>Join Meeting</button>
      <button onClick={leaveRoom}>Leave Meeting</button>
    </div>
  );
};
export default Meeting;
