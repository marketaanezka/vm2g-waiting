import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gradient-custom text-gray-900 items-center justify-center min-h-screen p-8 gradient-custom font-sans">
      <main className="text-center max-w-lg">
        <h1 className="text-4xl text-gray-900 font-bold mb-12">
          Vojtova Metodika 2. generace
        </h1>
        <p className="text-lg text-gray-800 mb-8">Stránka se připravuje</p>
        <p className="text-lg text-gray-800 mb-8">
          Více detailů o metodice najdete na{" "}
          <Link className="underline" href={"https://rehabilitace.org"}>
            rehabilitace.org
          </Link>
        </p>
      </main>
      <footer className="absolute bottom-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Centrum včasné intenzivní
          rehabilitace
        </p>
      </footer>
    </div>
  );
}
