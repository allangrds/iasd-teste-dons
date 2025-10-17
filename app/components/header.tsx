import Image from "next/image"
import Link from "next/link"

export function Header() {
    return (
        <header className="px-4 pt-8 pb-4 md:px-8 md:pt-12 md:pb-6">
            <div className="mx-auto flex max-w-6xl items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="https://najornada.com.br" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <Image
                            src="/na-jornada-light-logo.svg"
                            alt="Na Jornada Logo"
                            width={400}
                            height={120}
                            className="h-11 w-auto sm:h-14 md:h-17"
                            priority={false}
                        />
                    </Link>
                </div>
            </div>
        </header>
    )
}
