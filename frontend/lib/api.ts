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

function extractResults<T>(
  data: T[] | PaginatedResponse<T>
): T[] {
  if (Array.isArray(data)) {
    return data;
  }

  return data.results;
}

async function apiFetch<T>(
  endpoint: string
): Promise<T> {
  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status}`
    );
  }

  return response.json();
}

export async function getProjects(): Promise<Project[]> {
  const data = await apiFetch<
    Project[] | PaginatedResponse<Project>
  >("/projects/");

  return extractResults<Project>(data);
}

export async function getProject(
  slug: string
): Promise<Project> {
  return apiFetch<Project>(
    `/projects/${slug}/`
  );
}

export async function getTechnologies(): Promise<Technology[]> {
  const data = await apiFetch<
    Technology[] | PaginatedResponse<Technology>
  >("/technologies/");

  return extractResults<Technology>(data);
}

export async function getProfile(): Promise<Profile> {
  return apiFetch<Profile>("/profile/");
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  const data = await apiFetch<
    SocialLink[] | PaginatedResponse<SocialLink>
  >("/social-links/");

  return extractResults<SocialLink>(data);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const data = await apiFetch<
    Project[] | PaginatedResponse<Project>
  >("/projects/?featured=true");

  return extractResults<Project>(data);
}