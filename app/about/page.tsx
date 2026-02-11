'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import aboutme from '../../components/ui/about.png';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>
						<p className="text-lg text-muted-foreground">
							Driven Full Stack engineer with 5 years of experience architecting and deploying end-to-end solutions that seamlessly integrate ML models into production-ready web applications. My calm, organized nature and results-driven mindset allow me to approach challenges with clarity, logic and purpose. Having partnered closely with both startups and enterprise teams, I thrive in fast-moving environments where adaptability and collaboration matter most. I focus on building scalable, high-impact solutions that don&apos;t just work efficiently, but genuinely support growth and long-term success. My goal is to create products that feel intuitive, purposeful and human-centered.
						</p>
						<Button className="mt-6" asChild>
							<a href="/cv.pdf" download>
								Download CV <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[500px]">
						<Image
							src={aboutme}
							alt="Professional photo"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									5 years of professional experience across startups and enterprise teams, specializing in full-stack development, cloud infrastructure, and ML model integration.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
									Expert in Python, JavaScript/TypeScript, Java, Golang, cloud platforms (AWS, Azure), microservices, data pipelines, and ML integration.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}