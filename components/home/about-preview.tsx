'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
	return (
		<section className="py-16 md:py-24">
			<div className="container px-4 text-center">

				<p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4 leading-relaxed">
					I’m currently a junior at the University of Southern California, studying Computer Engineering and Computer Science. 
					I’m passionate about embedded systems and building end-to-end devices that are clean, reliable, and user-friendly.  
					Always looking for new ways to bridge hardware, software, and beyond!
				</p>
			</div>
		</section>
	);
}
