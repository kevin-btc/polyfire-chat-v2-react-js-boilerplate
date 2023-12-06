import React from "react";
import { usePolyfire } from "polyfire-js/hooks";
import { ChatUI } from "@polyfire-ai/chat-ui";

import UnauthenticatedView from "./components/UnauthenticatedView";

const App: React.FC = () => {
  const {
    auth: { login, status },
  } = usePolyfire();

  const AuthGuard = () => {
    if (status === "unauthenticated") {
      return <UnauthenticatedView login={login} />;
    } else if (status === "authenticated") {
      return (
        <ChatUI
          // chatName: The name of the chat or a custom React element to display the chat title.
          // Can be a simple string or a JSX element for advanced customization.
          chatName={"My ChatBot"}

          // LogoRender: Optional. A custom React component or JSX element to render the logo.
          // Displayed at the top of the Chat UI.
          // LogoRender={<YourCustomLogoComponent />}

          // SettingRender: Optional. A custom React component or JSX element for displaying additional settings or options.
          // Typically used to add configuration or customization features.
          // SettingRender={<YourCustomSettingsComponent />}

          // hasLogoutButton: Optional. If true, a logout button will be displayed.
          // Useful for allowing users to log out of the application from the chat interface.
          // hasLogoutButton={true}

          // hasNewChatButton: Optional. If true, a button to start a new chat will be displayed.
          // Useful for allowing users to start new conversations.
          // hasNewChatButton={true}
        />
      );
    } else {
      return (
        <div className="flex h-screen items-center justify-center text-stone-200">
          Loading...
        </div>
      );
    }
  };

  return <div className="bg-stone-800">{AuthGuard()}</div>;
};

export default App;
