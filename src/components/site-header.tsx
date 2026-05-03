"use client"

import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import { SidebarTrigger } from "@/components/ui/sidebar"

const segmentToKey: Record<string, string> = {
  dashboard: "dashboard",
  schedule: "schedule",
  leaderboard: "leaderboard",
  statistics: "statistics",
  teams: "teams",
  disciplines: "disciplines",
  referees: "referees",
  settings: "settings",
}

export function SiteHeader() {
  const pathname = usePathname()
  const t = useTranslations("nav")

  const segment = pathname.split("/").pop()
  const key = segment ? segmentToKey[segment] : undefined
  const title = key ? t(key) : null

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        {title && <h1 className="text-base font-medium">{title}</h1>}
        </div>
      </header>
  )
}
