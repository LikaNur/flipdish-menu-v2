import { Menu } from '@/types/flipdish';

const URL =
  'https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json';

export async function getMenu(): Promise<Menu> {
  const response = await fetch(URL);
  if (!response.ok) throw new Error(`Flipdish ${response.status}`);

  return await response.json();
}
