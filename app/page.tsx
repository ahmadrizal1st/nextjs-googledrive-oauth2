import crypto from "crypto";
import Link from "next/link";
import oauth2Client from "@/app/lib/google-oauth";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const SCOPE = [
    "https://www.googleapis.com/auth/drive.metadata.readonly",
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/documents",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/drive.appdata",
    "https://www.googleapis.com/auth/drive.photos.readonly",
  ];

  const state = crypto.randomBytes(16).toString("hex");
  const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPE,
    state,
  });

  return (
    <div className="justify-center w-full flex text-center pt-10 flex-col items-center">
      <h1>Home</h1>
      <Link href={authorizationUrl}>
        <Button>Login with Google</Button>
      </Link>
    </div>
  );
}
