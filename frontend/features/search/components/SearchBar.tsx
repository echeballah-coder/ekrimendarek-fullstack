"use client"

import * as React from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"

export function SearchBar() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Recherche lancée")
    }

    return (
        <div className="card p-4 sm:p-6 shadow-lg w-full">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                    <Input
                        label="Lieu"
                        placeholder="Ex: Alger, Oran..."
                        id="location"
                        className="input"
                    />
                </div>
                <div className="w-full sm:w-40">
                    <Input
                        type="date"
                        label="Début"
                        id="startDate"
                        className="input"
                    />
                </div>
                <div className="w-full sm:w-40">
                    <Input
                        type="date"
                        label="Fin"
                        id="endDate"
                        className="input"
                    />
                </div>
                <div className="w-full sm:w-auto flex items-end">
                    <Button type="submit" variant="primary" className="w-full sm:w-auto whitespace-nowrap">
                        Rechercher
                    </Button>
                </div>
            </form>
        </div>
    )
}
