import Link from 'next/link';
import { Linkedin, Github, Twitter, Facebook, Instagram, Phone, Mail, MessageSquare } from 'lucide-react';

import { siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ icon: <Mail className="h-5 w-5" />, href: siteConfig.links.email, label: 'Email' },
		{ icon: <Linkedin className="h-5 w-5" />, href: siteConfig.links.linkedin, label: 'LinkedIn' },
		{ icon: <Github className="h-5 w-5" />, href: siteConfig.links.github, label: 'GitHub' },
	];

	return (
		<footer className="bg-card py-12 border-t">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="md:col-span-1">
						<div className="mt-6 flex flex-wrap gap-3">
							{socialLinks.map((link, index) => (
								<Button key={index} size="icon" variant="outline" asChild>
									<a
									href={link.href.startsWith('mailto:') ? link.href : link.href}
									target={link.href.startsWith('mailto:') ? undefined : "_blank"}
									rel={link.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
									aria-label={link.label}
									>
									{link.icon}
									</a>
								</Button>
							))}
						</div>
					</div>
				</div>

				<Separator className="my-8" />
			</div>
		</footer>
	);
}