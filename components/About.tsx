import { profile } from "@/lib/data";

export default function About() {
    return (
        <section id="about" className="mx-auto max-w-3xl px-6 py-24">
            <h2 className="font-label text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                About Me
            </h2>
            <div className="mt-6  space-y-5 text-lg leading-relaxed text-ink/90">
            {profile.bio.map((paragraph,i) => (
                <p key={i}>{paragraph}</p>
            ))}
            </div>
        </section>
    );
}