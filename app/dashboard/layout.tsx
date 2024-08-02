import NavBar from "@/ui/dashboard/navbar";
import SideNav from "@/ui/dashboard/sidenav";

export default function DashboardLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    return (
      <>
        <div className="relative flex min-h-screen">
          <SideNav />
          <main className="  flex-grow p-6">
          <span className="absolute w-5/6 h-[0.5px] bg-[#354E95]/[.2] top-20" />
            <NavBar />
            {children}
          </main>
        </div>
      </>
    )

}