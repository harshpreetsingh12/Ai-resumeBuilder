import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import DarkModeSwitch from "./DarkModeSwitch";

import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();

  return (
    <div className="fixed top-0 w-full  backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between lg:px-12">
        <Link href="/">
          <Image
            src={"/android-chrome-192x192.png"}
            alt="welth logo"
            height={60}
            width={200}
            className="h-12 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
           <DarkModeSwitch/>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
