import { DashboardStats } from "@/widgets/dashboard-stats/ui";
import { Header } from "@/widgets/header/ui";
import { Sidebar } from "@/widgets/sidebar/ui";
export const DashboardPage = () => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex flex-col flex-1 overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-auto p-6">
        <DashboardStats />
      </main>
    </div>
  </div>
);
