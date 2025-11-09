export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t-4 border-accent mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h5 className="font-bold text-lg mb-4">About CNN</h5>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-4">Sections</h5>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  US
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  World
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Business
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-4">Connect</h5>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-4">Legal</h5>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Cookie Settings
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} CNN World News. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
