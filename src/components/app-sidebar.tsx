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
import { useTranslations } from "next-intl"

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
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const t = useTranslations("nav")

  const navMain = [
    { title: t("dashboard"), url: "#", icon: <LayoutDashboardIcon /> },
    { title: t("schedule"), url: "#", icon: <CalendarIcon /> },
    { title: t("leaderboard"), url: "#", icon: <TrophyIcon /> },
    { title: t("statistics"), url: "#", icon: <ChartBarIcon /> },
  ]

  const navSecondary = [
    { title: t("teams"), url: "#", icon: <UsersIcon /> },
    { title: t("disciplines"), url: "#", icon: <ListIcon /> },
    { title: t("referees"), url: "#", icon: <ShieldIcon /> },
    { title: t("settings"), url: "#", icon: <Settings2Icon /> },
  ]

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
