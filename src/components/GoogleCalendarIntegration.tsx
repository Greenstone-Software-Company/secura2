import { useGoogleLogin } from '@react-oauth/google';
import { gapi } from 'gapi-script';

const GoogleCalendarIntegration = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      gapi.client.setApiKey('YOUR_GOOGLE_API_KEY');
      gapi.client.load('calendar', 'v3', () => {
        const request = gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime',
        });
        request.execute((response) => {
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
