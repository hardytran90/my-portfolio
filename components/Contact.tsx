import Image from "next/image";
import { socials } from "@/lib/data";
import { FaLinkedinIn, FaFacebookF, FaEnvelope, FaDiscord } from "react-icons/fa";

const links = [
    { href: `mailto:${socials.email}`, label: "Email", icon: FaEnvelope, bg: "bg-[#EA4335]",},
    { href: socials.github, label: "Github", logo: "/logos/github.svg",},
    { href: socials.linkedin, label: "Linkedin", icon: FaLinkedinIn, bg: "bg-[#0A66C2]",},
    { href: socials.facebook, label: "Facebook", icon: FaFacebookF, bg: "bg-[#3B5998]", },
    { href: socials.discord, label: "Discord", icon: FaDiscord, bg: "bg-[#5865F2]",},

];

export default function Contact() {
    return (
        <section id="contact" className="border-t border-line px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                Let's Talk
                </h2>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                {links.map((links) => {
                    const Icon = links.icon;
                    return (
                        <a
                        key={links.label}
                        href={links.href}
                        aria-label={links.label}
                        target={links.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={links.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        className={links.logo
                                ? "flex h-14 w-14 items-center justify-center transition-transform hover:-translate-y-1 hover:scale-105"
                                : `flex h-14 w-14 items-center justify-center rounded-full text-white transition-transform hover:-translate-y-1 hover:scale-105 ${links.bg}`
                            }
                        >
                            {links.logo ? (
                            <Image src={links.logo} alt={links.label} width={56} height={56} />
                            ) : (
                            Icon && <Icon size={22} />
                            )}
                        </a>
                    );
                })}
                </div>
            </div>
        </section>
    )
}