import { Mail, Search, UnlinkIcon as Unsubscribe, BarChart3, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Waitlist } from "@/components/waitlist"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mail className="h-6 w-6" />
              <span className="text-xl font-semibold">ctrlmail</span>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 leading-tight">
            Take Control of
            <br />
            Your <span className="italic">Inbox</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            A smart, minimal dashboard that connects to your email and lets you understand, control, and clean up your
            email life using plain language commands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="border-gray-800 text-white placeholder:text-gray-500 h-12"
            />
            <Waitlist/>
          </div>
        </div>
      </section>
    </div>
  )
}