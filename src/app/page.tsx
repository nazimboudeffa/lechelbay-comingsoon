import Image from "next/image";
import Link from "next/link";
import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";
import snapchat from "../../public/snapchat.png";
import tiktok from "../../public/tiktok.png";

export default function Home() {
  return (
    <main>
      <div className="bg-center bg-cover h-screen flex items-center justify-center bg-gray-800">
        <div className="text-white text-center">
          <h1 className="text-4xl">Site en construction</h1>
          <p className="text-lg mt-4">
            Suivez-nous sur les réseaux sociaux
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={facebook}
                alt="Facebook"
                width={48}
                height={48}
              />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={instagram}
                alt="Instagram"
                width={48}
                height={48}
              />
            </Link>
            <Link
              href="https://www.tiktok.com"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={tiktok}
                alt="Twitter"
                width={48}
                height={48}
              />
            </Link>
            <Link
              href="https://www.snapchat.com"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={snapchat}
                alt="Snapchat"
                width={48}
                height={48}
              />
            </Link>
          </div>
          <p className="text-sm mt-4">
            Voir l&apos;état d&apos;avancement du site sur <span className="underline"><Link href="https://lechelbay.odoo.com">https://lechelbay.odoo.com</Link></span>
          </p>
        </div>
      </div>
    </main>
  );
}
