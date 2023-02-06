import Link from "next/link"

export default function Home() {
    return (
        <main>
            <div className="flex bg-white-2 h-screen w-screen items-center justify-center">
                <Link href="/trade">
                    <div className="flex w-72 justify-center bg-white-1 text-black p-4 rounded-md cursor-pointer">
                        <span className="font-semibold mr-1">Do transaction with </span>
                        <img src="/img/krepto_logo.png" className=" w-1/3"/>
                    </div>
                </Link>
            </div>
        </main>
    )
}