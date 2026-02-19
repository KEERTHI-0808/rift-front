import { createContext, useState } from "react";

export const AgentContext = createContext();

export function AgentProvider({ children }) {
  const [repoUrl, setRepoUrl] = useState("");
  const [status, setStatus] = useState("");
  const [branch, setBranch] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <AgentContext.Provider
      value={{
        repoUrl,
        setRepoUrl,
        status,
        setStatus,
        branch,
        setBranch,
        loading,
        setLoading,
      }}
    >
      {children}
    </AgentContext.Provider>
  );
}
