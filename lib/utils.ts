import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Globe,
  X,
  FileTextIcon,
  VideoIcon,
  MusicIcon,
  CodeIcon,
  MessageCircleIcon
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  // Format: "Jan 1, 2023"
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Extract domain from URL and return appropriate icon
export function getBookmarkSourceInfo(url: string) {
  try {
    const domain = new URL(url).hostname.replace('www.', '');

    // Map domains to sources
    const sourceMap: Record<string, { name: string, icon: any, color: string }> = {
      'youtube.com': { name: 'YouTube', icon: Globe, color: 'bg-red-700' },
      'youtu.be': { name: 'YouTube', icon: Globe, color: 'bg-red-700' },
      'github.com': { name: 'GitHub', icon: Globe, color: 'bg-gray-900' },
      'twitter.com': { name: 'Twitter', icon: X, color: 'bg-black' },
      'x.com': { name: 'X', icon: X, color: 'bg-black' },
      'linkedin.com': { name: 'LinkedIn', icon: Globe, color: 'bg-blue-800' },
      'medium.com': { name: 'Medium', icon: Globe, color: 'bg-green-800' },
      'dev.to': { name: 'DEV', icon: CodeIcon, color: 'bg-black' },
      'docs.google.com': { name: 'Google Docs', icon: FileTextIcon, color: 'bg-blue-700' },
      'vimeo.com': { name: 'Vimeo', icon: VideoIcon, color: 'bg-blue-800' },
      'spotify.com': { name: 'Spotify', icon: MusicIcon, color: 'bg-green-800' },
      'stackoverflow.com': { name: 'Stack Overflow', icon: MessageCircleIcon, color: 'bg-orange-600' },
    };

    // Check for domain matches
    for (const [key, value] of Object.entries(sourceMap)) {
      if (domain.includes(key)) {
        return value;
      }
    }

    // Default to a darker gray for the Globe icon
    return { name: 'Website', icon: Globe, color: 'bg-gray-700' };
  } catch (error) {
    return { name: 'Website', icon: Globe, color: 'bg-gray-700' };
  }
} 