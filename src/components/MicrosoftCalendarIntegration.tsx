import { Providers, ProviderState } from '@microsoft/mgt-element';
import { Msal2Provider } from '@microsoft/mgt-msal2-provider';
import { Agenda } from '@microsoft/mgt-react';

Providers.globalProvider = new Msal2Provider({
  clientId: '9a3c5393-1848-4488-ac69-d6bb281a5046',
  authority: 'https://login.microsoftonline.com/202a1015-bb23-4919-b4f7-4ab969f73805',
  redirectUri: window.location.origin,
});

const MicrosoftCalendarIntegration = () => {
  const provider = Providers.globalProvider;

  if (provider && provider.state !== ProviderState.SignedIn) {
    // Adding an additional type assertion for TypeScript
    (provider as Msal2Provider).login().catch(error => {
      console.error('Login failed:', error);
    });
  } else if (provider) {
    // Logic when the user is already signed in
  } else {
    console.error('Provider is undefined');
  }

  return (
    <div>
      <button onClick={() => {
        if (provider) {
          (provider as Msal2Provider).login().catch(error => {
            console.error('Login failed:', error);
          });
        } else {
          console.error('Provider is undefined');
        }
      }}>
        Connect Microsoft Calendar
      </button>
      <Agenda groupByDay={true} />
    </div>
  );
};

export default MicrosoftCalendarIntegration;
