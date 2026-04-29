'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { projects } from '@/lib/constants';
import { staggerContainer, fadeInScale } from '@/lib/motion';

export function ProjectsPreview() {
	// Only show the first 3 projects in the preview
	const previewProjects = projects.slice(0, 3);
	const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

	return (
		<>
			<section className="py-16 md:py-24 bg-muted/30">
				<div className="container px-4">
					<SectionHeader
						title="Featured Projects"
					/>

					<motion.div
						variants={staggerContainer()}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
					>
						{previewProjects.map((project, index) => (
							<motion.div
								key={index}
								variants={fadeInScale(index * 0.1)}
								className="flex"
							>
								<Card className="flex flex-col h-full card-gradient">
									<div className="relative h-48 w-full">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover rounded-t-lg"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</div>

									<CardContent className="flex-grow p-6">
										<h3 className="font-bold text-xl mb-2">{project.title}</h3>
										<p className="text-muted-foreground mb-4">
											{project.description}
										</p>

										<div className="flex flex-wrap gap-2">
											{project.tags.map((tag, tagIndex) => (
												<Badge key={tagIndex} variant="secondary">
													{tag}
												</Badge>
											))}
										</div>
									</CardContent>

									<CardFooter className="p-6 pt-0 gap-2 flex flex-wrap relative z-10">
										{project.video && (
											<Button
												size="sm"
												variant="outline"
												className="pointer-events-auto"
												onClick={(e) => {
													e.preventDefault();
													e.stopPropagation();
													setSelectedVideo(project.video);
												}}
											>
												<ExternalLink className="h-4 w-4 mr-2" />
												Watch Demo
											</Button>
										)}
										{project.repo && (
											<Button size="sm" variant="outline" asChild>
												<Link
													href={project.repo}
													target="_blank"
													rel="noreferrer"
												>
													<Github className="h-4 w-4 mr-2" />
													Repo
												</Link>
											</Button>
										)}
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</motion.div>

					<div className="flex justify-center mt-10">
						<Button asChild>
							<Link href="/projects">
								View All Projects <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* ================= MODAL ================= */}
			<AnimatePresence>
				{selectedVideo && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4"
						onClick={() => setSelectedVideo(null)}
					>
						<motion.div
							initial={{ scale: 0.95, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.95, opacity: 0 }}
							className="bg-zinc-950 border border-zinc-800 p-2 rounded-lg max-w-4xl w-full relative"
							onClick={(e) => e.stopPropagation()}
						>
							<button
								onClick={() => setSelectedVideo(null)}
								className="absolute -top-10 right-0 text-white flex items-center gap-1 hover:text-zinc-300 transition-colors"
							>
								<X className="h-5 w-5" /> Close
							</button>

							<div className="aspect-video w-full overflow-hidden rounded-md bg-black">
								<video controls autoPlay className="w-full h-full">
									<source src={selectedVideo} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}