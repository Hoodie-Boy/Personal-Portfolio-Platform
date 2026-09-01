export interface Technology {
  id: number;
  name: string;
  category: string;
  icon: string;
}

export interface ProjectImage {
  id: number;
  image: string;
  caption: string;
  alt_text: string;
  order: number;
}

export interface ProjectVideo {
  id: number;
  title: string;
  video_type: "upload" | "youtube" | "vimeo";
  video_file: string | null;
  external_url: string | null;
  thumbnail: string | null;
  caption: string;
  order: number;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  description: string;

  project_type: string;
  status: string;

  start_date: string | null;
  end_date: string | null;

  featured: boolean;

  github_url: string;
  demo_url: string;

  thumbnail: string | null;

  technologies: Technology[];
  images: ProjectImage[];
  videos: ProjectVideo[];

  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: number;
  name: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  profile_image: string | null;
  resume: string | null;
  created_at: string;
  updated_at: string;
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
  order: number;
  visible: boolean;
}