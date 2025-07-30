"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export function Waitlist() {
    const [mail, setMail] = useState("");

    const joinList = async() => {
        const res = await fetch(`http://localhost:3000/api/waitlist`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({mail})
        })

        const data = await res.json();
        if(res.status == 200) {
            alert("thank you for joining ctrlmail, you'll be notified via mail regarding early access")
        } else if(res.status == 401){
            alert("invalid mail");
        } else if(res.status == 201) {
            alert("already joined the waitlist")
        } else {
            alert("server error, please try later")
        }
    }

    return (
        <>
        <div>
            <Input
              placeholder="Enter your email"
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="h-12 px-4 border rounded w-full max-w-sm"
            />
        </div>
        <div>
            <Button onClick={joinList} className="bg-white text-black hover:bg-gray-200 h-12 px-8">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
        </>
    )
}