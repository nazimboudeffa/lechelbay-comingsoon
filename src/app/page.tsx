import Image from "next/image";
import Link from "next/link";
import hero from "../../public/nick-de-partee-5DLBoEX99Cs-unsplash.jpg";
import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";
import snapchat from "../../public/snapchat.png";
import tiktok from "../../public/tiktok.png";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src={hero}
        alt="hero"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute bg-center bg-cover h-500px flex items-center justify-center bg-gray-800 rounded-lg p-10">
        <div className="text-white text-center">
          <h1 className="text-4xl">Site en construction</h1>
          <p className="text-lg mt-4">
            Suivez-nous sur les réseaux sociaux
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link
              href="https://www.facebook.com/p/Le-Chelbay-Concept-Store-100086985212546"
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
              href="https://www.instagram.com/conceptstoreroanne"
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
              href="https://www.tiktok.com/@conceptstore.le.chelbay"
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
              href="#"
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
      </div>
    </main>
  );
}
