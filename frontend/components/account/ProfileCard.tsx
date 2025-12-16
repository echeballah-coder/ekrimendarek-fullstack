"use client"

import { useEffect, useState } from "react"
import { getSession, UserSession } from "@/lib/authSession"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

export function ProfileCard() {
    const [session, setSession] = useState<UserSession | null>(null)

    useEffect(() => {
        setSession(getSession())
    }, [])

    if (!session) return null

    return (
        <Card className="border-brand-border mb-8">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>Profil</CardTitle>
                    <Badge variant="secondary" className="bg-brand-accent/10 text-brand-accent border-brand-accent/20">
                        Mode démo
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm font-medium text-brand-textMuted mb-1">Nom complet</p>
                        <p className="text-base font-medium text-brand-text">{session.fullName}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-brand-textMuted mb-1">Email</p>
                        <p className="text-base text-brand-text">{session.email}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-brand-textMuted mb-1">Rôle</p>
                        <p className="text-base text-brand-text capitalize">{session.role}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-brand-textMuted mb-1">Membre depuis</p>
                        <p className="text-base text-brand-text">
                            {new Date(session.createdAt).toLocaleDateString("fr-FR", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
