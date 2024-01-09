import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <div className="text-center">
        <p>Frastio Agustian</p> <p className="text-lg"> - Software Engineer -</p>
      </div>
      <div className="flex gap-4">
        <Link
          href={"mailto:work.frastioagustian@gmail.com"}
          className="text-blue-200"
        >
          Email
        </Link>
        <Link href={"https://github.com/frastio10"} className="text-blue-200">
          GitHub
        </Link>
        <Link
          href={"https://www.linkedin.com/in/frastio-agustian/"}
          className="text-blue-200"
        >
          LinkedIn
        </Link>
      </div>
    </main>
  );
}
