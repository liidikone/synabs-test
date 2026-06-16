import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Synabs — Evolving AI Agents', description: 'The first AI agents designed to adapt and improve over time.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return (<html lang="en"><body className="antialiased">{children}</body></html>); }
