import { Metadata } from "next";
import { cookies } from "next/headers";
import { TitlePage } from "@/helpers/common/title-page";
import { TabsBar } from "@/components/shared/tab-bar/tab-bar";

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
