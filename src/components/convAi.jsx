import React, { useEffect, useState } from "react";

const ConvAi = () => {
  const agentId = "RIP9urgASUFtXBa4lBoX";
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const scriptUrl = "https://elevenlabs.io/convai-widget/index.js";

    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.type = "text/javascript";

      script.onload = () => setScriptLoaded(true);
      script.onerror = (e) => console.error("Failed to load ElevenLabs script:", e);

      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  return (
    <div>
      {scriptLoaded ? (
        <elevenlabs-convai agent-id={agentId}></elevenlabs-convai>
      ) : (
        <p>Loading AI assistant...</p>
      )}
    </div>
  );
};

export default ConvAi;
