export type SidebarItem = {
  title: string;
  slug?: string;
  children: Array<{
    title: string;
    slug: string;
    status?: string;
  }>;
};

export const SIDEBAR: Array<SidebarItem> = [
  {
    title: 'Documentation',
    children: [
      {
        title: 'Getting Started',
        slug: '/docs',
      },
      {
        title: 'Streaming',
        slug: '/docs/streaming',
      },
    ],
  },
  {
    title: 'Features',
    children: [
      {
        title: 'Songs',
        slug: '/docs/songs',
      },
      {
        title: 'Lyrics',
        slug: '/docs/lyrics',
      },
      {
        title: 'Artists',
        slug: '/docs/artists',
      },
      {
        title: 'Albums',
        slug: '/docs/albums',
      },
      {
        title: 'Playlists',
        slug: '/docs/playlists',
      },
    ],
  },
];
