import React, { useEffect } from "react";

const ConvAi= () => {
  const agentId = 'RIP9urgASUFtXBa4lBoX';

  useEffect(() => {
    try {
      if (!document.querySelector("script[src='https://elevenlabs.io/convai-widget/index.js']")) {
        const script = document.createElement("script");
        script.src = "https://elevenlabs.io/convai-widget/index.js";
        script.async = true;
        script.type = "text/javascript";
        script.onerror = (e) => console.error("Failed to load ElevenLabs script:", e);
        document.body.appendChild(script);
      }
    } catch (error) {
      console.error("Error loading ElevenLabs script:", error);
    }
  }, []);

  return (
    <div>
      <elevenlabs-convai agent-id={agentId}></elevenlabs-convai>
    </div>
  );
};

export default ConvAi;
