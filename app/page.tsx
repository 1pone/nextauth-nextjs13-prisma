import Image from "next/image";
import React from "react";
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/buttons.component";
import { auth, authOptions } from "@/lib/auth";
import { User } from "@/components/user.component";

export default async function Home() {
  const session = await auth();

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />

        <h1>Server Session</h1>
        <p style={{ maxWidth: "500px", wordBreak: "break-word" }}>
          {JSON.stringify(session)}
        </p>

        <User />
      </div>
    </main>
  );
}
