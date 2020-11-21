const publicRoutes = {
  login: '/login',
};

const privateRoutes = {
  dashboard: '/dashboard',
  pages: '/dashboard/pages',
  singlePage: '/dashboard/pages/edit/:id?',
  posts: '/dashboard/posts',
  singlePosts: '/dashboard/posts/edit/:id?',
  config: '/dashboard/config',
};

export { publicRoutes, privateRoutes };
