"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon, ListIcon, ChartBarIcon, UsersIcon, Settings2Icon, CalendarIcon, TrophyIcon, ShieldIcon, GalleryVerticalEndIcon, AudioWaveformIcon, CommandIcon } from "lucide-react"
import { TeamSwitcher } from "./team-switcher"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEndIcon,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveformIcon,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: CommandIcon,
        plan: "Free",
      },
    ],
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
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
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
