"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Waitlist () {
 return (
    <div>
        <Button onClick={() => {
            alert("testing")
        }} className="bg-white text-black hover:bg-gray-200 h-12 px-8">
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
    </div>
 )
}