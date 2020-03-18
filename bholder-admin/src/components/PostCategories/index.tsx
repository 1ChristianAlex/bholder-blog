import React, { FC, useState } from 'react';
import { Card } from 'react-bootstrap';
import { InputRadio } from 'components';

const PostCategorieList: FC = () => {
  const [categorieList, setCategorieList] = useState([1, 2, 3, 4, 5]);

  return (
    <Card className="mt-4">
      <Card.Header>Categorias</Card.Header>
      <Card.Body>
        {categorieList.map((categorieItem, indexCategorie) => (
          <InputRadio
            InputText={`${indexCategorie} item`}
            inputId={`item-categorie-${indexCategorie}`}
            key={`item-categorie-${indexCategorie}`}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default PostCategorieList;
