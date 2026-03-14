import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="/Kinderleicht-1000x1000.png"
            alt="kinderleicht.ai"
            width={120}
            height={30}
            className="h-6 w-auto"
          />

          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
              Datenschutz
            </Link>
          </div>

          <p className="text-sm text-gray-400">© 2025 kinderleicht.ai</p>
        </div>
      </div>
    </footer>
  );
}
