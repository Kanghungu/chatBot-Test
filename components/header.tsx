export function Header() {
    return (
        <header>
            <div>

            </div>
            <div>
                <a>
                    <span className="hidden ml-2 md:flex">GitHub</span>
                </a>
                <a>
                    <span className="hidden sm:block">Deploy to Vercel</span>
                    <span className="sm:hidden">Deploy</span>
                </a>
            </div>
        </header>
    );
}