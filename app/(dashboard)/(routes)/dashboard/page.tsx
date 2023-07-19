import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <>
      <Button variant={"destructive"}>Click me on Dashboard</Button>
      <UserButton afterSignOutUrl="/" />
    </>
  )
}
