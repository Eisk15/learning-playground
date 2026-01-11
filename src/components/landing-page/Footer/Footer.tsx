

export default function Footer() {
    return (
        <footer className="min-h-[80px] py-6 border-t ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            
            <div>
            <h1 className="text-2xl font-semibold mb-2">Contacts</h1>
            <p className="text-muted-foreground hover:text-foreground ">Email: haha@learnprogramming.com</p>
            <p className="text-muted-foreground hover:text-foreground ">Phone: +12345</p>
            </div>

            <div>
            <h3 className="text-2xl font-semibold mb-2">About</h3>
            <p className="text-muted-foreground hover:text-foreground ">I'm learning frontend my boi.</p>
            </div>

            <div>
            <h3 className="text-2xl font-semibold mb-2">Links</h3>
            <a href="#" className="block text-muted-foreground hover:text-foreground ">
                Link1
            </a>
            <a href="#" className="block text-muted-foreground hover:text-foreground ">
                Link2
            </a>
            </div>

        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground">
            © 2024 LearnProgramming. All rights reserved.
        </div>
        </footer>

    )

}