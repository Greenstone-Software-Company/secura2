import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Importing required components and types
const Providers = dynamic(() => import('@microsoft/mgt-element').then(mod => mod.Providers), { ssr: false });
const Msal2Provider = dynamic(() => import('@microsoft/mgt-msal2-provider').then(mod => mod.Msal2Provider), { ssr: false });
const Agenda = dynamic(() => import('@microsoft/mgt-react').then(mod => mod.Agenda), { ssr: false });
const ProviderState = dynamic(() => import('@microsoft/mgt-element').then(mod => mod.ProviderState), { ssr: false });

const MicrosoftCalendarIntegration = () => {
  const [provider, setProvider] = useState<Msal2Provider | null>(null);

  useEffect(() => {
    const initializeProvider = async () => {
      const Msal2Provider = (await import('@microsoft/mgt-msal2-provider')).Msal2Provider;
      const Providers = (await import('@microsoft/mgt-element')).Providers;
      const ProviderState = (await import('@microsoft/mgt-element')).ProviderState;

      const msalProvider = new Msal2Provider({
        clientId: '9a3c5393-1848-4488-ac69-d6bb281a5046',
        authority: 'https://login.microsoftonline.com/202a1015-bb23-4919-b4f7-4ab969f73805',
        redirectUri: window.location.origin,
      });

      Providers.globalProvider = msalProvider;
      setProvider(msalProvider);

      if (msalProvider.state !== ProviderState.SignedIn) {
        msalProvider.login().catch(error => {
          console.error('Login failed:', error);
        });
      }
    };

    initializeProvider();
  }, []);

  const handleLogin = () => {
    if (provider) {
      provider.login().catch(error => {
        console.error('Login failed:', error);
      });
    } else {
      console.error('Provider is undefined');
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>
        Connect Microsoft Calendar
      </button>
      <Agenda groupByDay={true} />
    </div>
  );
};

export default MicrosoftCalendarIntegration;
