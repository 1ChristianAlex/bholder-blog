enum PostStatus {
  draft = 1,
  saved,
  deleted,
}

const PostStatusDescription = {
  [PostStatus.saved.toString()]: 'Salvo',
  [PostStatus.draft.toString()]: 'Draft',
  [PostStatus.deleted.toString()]: 'Deletado',
};

enum PostVisibility {
  visible = 1,
  hidden,
}

const PostVisibilityDescription = {
  [PostVisibility.visible.toString()]: 'Visivel',
  [PostVisibility.hidden.toString()]: 'Escondido',
};

enum PostPublication {
  imediat = 1,
  scheduling,
}

const PostPublicationDescription = {
  [PostPublication.imediat.toString()]: 'Imediata',
  [PostPublication.scheduling.toString()]: 'Agendada',
};

export {
  PostStatus,
  PostStatusDescription,
  PostVisibility,
  PostVisibilityDescription,
  PostPublication,
  PostPublicationDescription,
};
