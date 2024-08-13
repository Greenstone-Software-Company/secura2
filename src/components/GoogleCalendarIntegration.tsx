import { useGoogleLogin } from '@react-oauth/google';
import { gapi } from 'gapi-script';

interface CalendarEvent {
  id: string;
  summary: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
}

interface CalendarResponse {
  items: CalendarEvent[];
}

const GoogleCalendarIntegration = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      gapi.client.setApiKey('AIzaSyDRibDKlvClyl0aR4_N6WlrORuT-XkUk08');
      gapi.client.load('calendar', 'v3', () => {
        const request = gapi.client.calendar.events.list({
          calendarId: 'primary',
          timeMin: (new Date()).toISOString(),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: 'startTime',
        });

        request.execute((response: CalendarResponse) => {
          const events = response.items;
          console.log(events);
        });
      });
    },
    onError: (error) => console.error('Login Failed:', error),
  });

  return (
    <button onClick={() => login()}>Connect Google Calendar</button>
  );
};

export default GoogleCalendarIntegration;
