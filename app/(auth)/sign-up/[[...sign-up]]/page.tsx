import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
        <Link
        href="/"
        className="absolute top-4 left-4 bg-gray-900 hover:bg-gray-800 text-white font-medium px-4 py-1 rounded-md shadow-sm transition-all"
      >
        ⬅ Back
      </Link>
      <SignUp />
    </div>
  );
}
