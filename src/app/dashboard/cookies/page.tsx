import { Metadata } from "next";
import { cookies } from "next/headers";
import { TabsBar } from "@/components/common/tab-bar/tab-bar";
import { TitlePage } from "@/helpers/common/title-page";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Cookies",
};

export default async function CookiesPage() {
  const cookieStore = await cookies();
  const selectedTab = cookieStore.get("selectedTab")?.value ?? "1";

  return (
    <div className="flex flex-col gap-y-8">
      <TitlePage title="Tabs" />
      <TabsBar selectedTab={Number(selectedTab)} />
    </div>
  );
}
