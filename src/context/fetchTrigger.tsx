import { createContext, useState } from "react";

export const FetchTriggerContext = createContext({});

const FetchTriggerProvider = ({ children }: { children: React.ReactNode }) => {
  const [fetchTrigger, setFetchTrigger] = useState(false);

  return (
    <FetchTriggerContext.Provider value={{ fetchTrigger, setFetchTrigger }}>
      {children}
    </FetchTriggerContext.Provider>
  );
};
export default FetchTriggerProvider;
