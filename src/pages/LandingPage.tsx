import { Button } from "@/components/ui/button"
export default function LandingPage(){
    return (
        <>
        <div>
    <div className="flex flex-col items-center gap-4 p-10">
      {/* Default variant */}
      <Button>Default Button</Button>

      {/* Destructive variant */}
      <Button variant="destructive">Delete</Button>

      {/* Outline variant */}
      <Button variant="outline">Secondary Action</Button>

      {/* Sizes */}
      <Button size="sm">Small Button</Button>
      <Button size="lg">Large Button</Button>
    </div>
        </div>
        </>
    )
}