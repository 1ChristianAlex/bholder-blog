enum PostStatus {
  draft = 1,
  saved,
  deleted,
}

const PostStatusDescription = {
  [PostStatus.saved]: 'Salvo',
  [PostStatus.draft]: 'Draft',
  [PostStatus.deleted]: 'Deletado',
};

enum PostVisibility {
  visible = 1,
  hidden,
}

const PostVisibilityDescription = {
  [PostVisibility.visible]: 'Visivel',
  [PostVisibility.hidden]: 'Escondido',
};

enum PostPublication {
  imediat = 1,
  scheduling,
}

const PostPublicationDescription = {
  [PostPublication.imediat]: 'Imediata',
  [PostPublication.scheduling]: 'Agendada',
};

export {
  PostStatus,
  PostStatusDescription,
  PostVisibility,
  PostVisibilityDescription,
  PostPublication,
  PostPublicationDescription,
};
