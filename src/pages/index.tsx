import Head from "next/head";
import { type NextPage } from "next";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Home: NextPage = () => {
  const user = useUser();

  return (
    <>
      <Head>
        <title>Delivery App</title>
        <meta name="description" content="The perfect app for restaurants" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center">
        <div>
          { !user.isSignedIn  && <SignInButton  /> }
          { !!user.isSignedIn && <SignOutButton /> }
        </div>
      </main>
    </>
  );
};

export default Home;
