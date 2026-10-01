export function getApiErrorMessage(
  error: any,
  fallback = "Something went wrong"
) {
  return (
    error?.response?.data?.message ??
    error?.response?.data?.detail ??
    error?.message ??
    fallback
  );
}

export function getInitials(text: string): string {
  const name = text ?? 'Muvie Live';
  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0][0].toUpperCase();

  return (
    parts[0][0] + parts[parts.length - 1][0]
  ).toUpperCase();
}