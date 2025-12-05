"use client"

import * as React from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"

export function SearchBar() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Recherche lancée")
    }

    return (
        <Card className="p-4 bg-brand-surface border-brand-border shadow-lg max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
                <div className="w-full md:flex-1">
                    <Input
                        label="Lieu de prise en charge"
                        placeholder="Ex: Alger, Oran..."
                        id="location"
                    />
                </div>
                <div className="w-full md:w-48">
                    <Input
                        type="date"
                        label="Début"
                        id="startDate"
                    />
                </div>
                <div className="w-full md:w-48">
                    <Input
                        type="date"
                        label="Fin"
                        id="endDate"
                    />
                </div>
                <div className="w-full md:w-auto">
                    <Button type="submit" variant="primary" className="w-full md:w-auto">
                        Rechercher
                    </Button>
                </div>
            </form>
        </Card>
    )
}
