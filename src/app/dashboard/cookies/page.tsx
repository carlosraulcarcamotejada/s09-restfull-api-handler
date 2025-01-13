import { cookies } from "next/headers";
import { TabsBar } from "@/components/common/tab-bar/tab-bar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Cookies",
};

export default async function CookiesPage() {
  const cookieStore = await cookies();
  const selectedTab = cookieStore.get("selectedTab")?.value ?? "1";

  return (
    <div className="flex flex-col gap-y-8">
      <h3 className="text-2xl font-semibold leading-none tracking-tight">
        Tabs
      </h3>
      <TabsBar selectedTab={Number(selectedTab)} />
    </div>
  );
}
