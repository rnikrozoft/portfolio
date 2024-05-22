import glob from 'fast-glob';
import { StaticImageData } from 'next/image';

async function loadEntries<T>(directory: string, metaName: string): Promise<Array<MDXEntry<T>>> {
  const files = await Promise.all(
    (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(async (filename) => {
      let metadata = (await import(`../app/${directory}/${filename}`))[metaName] as T;
      return {
        ...metadata,
        metadata,
        href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
      };
    })
  );
  return files;
}

export type MDXEntry<T> = T & { href: string; metadata: T };

export interface App {
  release: string;
  youtube: string;
  title: string;
  description: string;
  image: StaticImageData;
  url: string;
  pathname: string;
  framework: string;
}

export function loadApps() {
  return loadEntries<App>('apps', 'appData');
}