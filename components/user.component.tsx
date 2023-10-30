"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1>Client Session</h1>
      <p style={{ maxWidth: "500px", wordBreak: "break-word" }}>
        {JSON.stringify(session)}
      </p>
    </>
  );
};
