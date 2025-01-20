import { Metadata } from "next";
import { WidgetItem } from "@/components/shared/widget-item";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default async function DashboardPage() {
  return (
    <div>
      <WidgetItem />
    </div>
  );
}
