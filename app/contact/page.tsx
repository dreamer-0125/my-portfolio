'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

import Link from 'next/link';

function TelegramIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className={className}
		>
			<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
		</svg>
	);
}

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function ContactPage() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Form submission logic would go here
		console.log('Form submitted:', formState);
		alert('Message sent successfully!');
		setFormState({ name: '', email: '', subject: '', message: '' });
	};

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-4xl mx-auto"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
						<p className="text-lg text-muted-foreground">
							Have a question or want to work together? Feel free to reach out!
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<motion.div variants={fadeIn('right', 0.3)}>
							<Card className="card-gradient h-full">
								<CardContent className="p-6">
									<h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
									<div className="space-y-4">
										<div className="flex items-center">
											<Phone className="h-5 w-5 text-primary mr-3" />
											<p className="text-muted-foreground">+1 234 567 890</p>
										</div>
										<Link
											href={siteConfig.links.telegram}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center hover:text-primary transition-colors"
										>
											<TelegramIcon className="h-5 w-5 text-primary mr-3 shrink-0" />
											<p className="text-muted-foreground">@catchdream0 (Telegram)</p>
										</Link>
										<div className="flex items-center">
											<Mail className="h-5 w-5 text-primary mr-3" />
											<p className="text-muted-foreground">jooooyous@gmail.com</p>
										</div>
										<div className="flex items-center">
											<MapPin className="h-5 w-5 text-primary mr-3" />
											<p className="text-muted-foreground">City, Country</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div variants={fadeIn('left', 0.3)}>
							<form onSubmit={handleSubmit} className="space-y-4">
								<div>
									<Input
										placeholder="Your Name"
										name="name"
										value={formState.name}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Input
										type="email"
										placeholder="Your Email"
										name="email"
										value={formState.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Input
										placeholder="Subject"
										name="subject"
										value={formState.subject}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Textarea
										placeholder="Your Message"
										name="message"
										value={formState.message}
										onChange={handleChange}
										required
										className="min-h-[150px]"
									/>
								</div>
								<Button type="submit" className="w-full">
									Send Message <Send className="ml-2 h-4 w-4" />
								</Button>
							</form>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}