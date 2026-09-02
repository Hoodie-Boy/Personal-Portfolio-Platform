import type {
  Profile,
  Project,
  SocialLink,
  Technology,
} from "@/types/api";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8000/api/v1";

interface PaginatedResponse<T> {
  results: T[];
}

function extractResults<T>(data: T[] | PaginatedResponse<T>): T[] {
  if (Array.isArray(data)) {
    return data;
  }

  return data.results;
}

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${API_URL}/projects/`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await response.json();

  return extractResults<Project>(data);
}

export async function getProject(slug: string): Promise<Project> {
  const response = await fetch(`${API_URL}/projects/${slug}/`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch project");
  }

  return response.json();
}

export async function getTechnologies(): Promise<Technology[]> {
  const response = await fetch(`${API_URL}/technologies/`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch technologies");
  }

  const data = await response.json();

  return extractResults<Technology>(data);
}

export async function getProfile(): Promise<Profile> {
  const response = await fetch(`${API_URL}/profile/`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  return response.json();
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  const response = await fetch(`${API_URL}/social-links/`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch social links");
  }

  const data = await response.json();

  return extractResults<SocialLink>(data);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const response = await fetch(
    `${API_URL}/projects/?featured=true`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch featured projects");
  }

  const data = await response.json();

  return extractResults<Project>(data);
}