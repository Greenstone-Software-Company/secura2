import { Providers, ProviderState, MsalProvider } from '@microsoft/mgt-react';
import { Agenda } from '@microsoft/mgt-react';

Providers.globalProvider = new MsalProvider({
  clientId: 'YOUR_MICROSOFT_CLIENT_ID',
});

const MicrosoftCalendarIntegration = () => {
  return (
    <div>
      <button onClick={() => Providers.globalProvider.login()}>Connect Microsoft Calendar</button>
      <Agenda groupByDay={true} />
    </div>
  );
};
