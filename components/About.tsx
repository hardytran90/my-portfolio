import { profile } from "@/lib/data";
import Image from "next/image";
import { Caveat } from "next/font/google";

const handwriting = Caveat({
  subsets: ["latin"],
  weight: ["500"],
});

export default function About() {
    return (
        <section id="about" className="border-b border-line px-6 py-24">
            <div className="mx-auto max-w-3xl">
                <h2 className="font-label text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                    About Me
                </h2>
                <div className="mt-6  space-y-5 text-lg leading-relaxed text-ink/90">
                {profile.bio.map((paragraph,i) => (
                    <p key={i}>{paragraph}</p>
                ))}
                </div>
                <div className="mt-8 flex flex-col items-center text-center">
                    <Image 
                    src="/project-photo/avatar.png"
                    alt="Hardy Tran avatar"
                    width={160}
                    height={160}
                    priority
                    className="h-50 w-50 rounded-full object-cover"
                    />
                    <p className={`${handwriting.className} mt-6 max-w-xl text-3xl italic text-ink sm:text-4xl`}
                        >"Everyone start somewhere."
                    </p>
                </div>
            </div>
        </section>
    );
}