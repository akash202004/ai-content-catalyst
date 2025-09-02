import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Menu, X } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { getUserPlanDetails } from "@/controllers/subscriptionController";

interface HeaderProps {
  onMobileMenuToggle?: () => void;
  isMobileMenuOpen?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onMobileMenuToggle,
  isMobileMenuOpen,
}) => {
  const reDirect = useRouter();
  const { user } = useUser();
  const [currentPlan, setCurrentPlan] = React.useState("Free");

  React.useEffect(() => {
    const fetchPlan = async () => {
      if (user?.id) {
        try {
          const planDetails = await getUserPlanDetails(user.id);
          setCurrentPlan(planDetails.name);
        } catch {
          setCurrentPlan("Free");
        }
      }
    };
    fetchPlan();
  }, [user?.id]);

  const handleClick = () => {
    reDirect.push("/");
  };

  return (
    <div className="p-4 shadow-sm border-b border-black flex justify-between items-center bg-white">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={onMobileMenuToggle}
          className="md:hidden p-2 rounded-lg border border-black hover:bg-gray-100 transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        <Button
          onClick={handleClick}
          variant={"outline"}
          className="font-semibold text-primary text-md"
        >
          Landing Page
        </Button>
      </div>
      <div className="flex items-center gap-5">
        {/* Only show join message if not Premium or Ultimate */}
        {currentPlan === "Free" && (
          <h2 className="text-white bg-primary rounded-2xl border hidden lg:block border-black text-sm p-3">
            <Link href={"/dashboard/billing"}>
              Join Membership just for $5/Month
            </Link>
          </h2>
        )}
        <Link href={"/dashboard/profile"}>
          <UserButton
            userProfileMode="navigation"
            userProfileUrl="/dashboard/setting"
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonAvatarBox: "w-10 h-10 border border-black",
              },
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
