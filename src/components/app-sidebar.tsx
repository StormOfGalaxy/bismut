"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon, ListIcon, ChartBarIcon, UsersIcon, Settings2Icon, CalendarIcon, TrophyIcon, ShieldIcon } from "lucide-react"
import Link from "next/link"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: (
        <LayoutDashboardIcon
        />
      ),
    },
    {
      title: "Schedule",
      url: "#",
      icon: (
        <CalendarIcon
        />
      ),
    },
    {
      title: "Leaderboard",
      url: "#",
      icon: (
        <TrophyIcon
        />
      ),
    },
    {
      title: "Statistics",
      url: "#",
      icon: (
        <ChartBarIcon
        />
      ),
    }
  ],
  navSecondary: [
    {
      title: "Teams",
      url: "#",
      icon: (
        <UsersIcon
        />
      ),
    },
    {
      title: "Disciplines",
      url: "#",
      icon: (
        <ListIcon
        />
      ),
    },
    {
      title: "Referees",
      url: "#",
      icon: (
        <ShieldIcon
        />
      ),
    },
    {
      title: "Settings",
      url: "#",
      icon: (
        <Settings2Icon
        />
      ),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link href="#">
                <TrophyIcon className="size-5!" />
                <span className="text-base font-semibold">Bismut</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
