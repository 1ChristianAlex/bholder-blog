import { Op } from 'sequelize';
import model from './post-model';
import { IPost } from '../../Interfaces';

export default class PostService {
  public async Create(post: IPost): Promise<IPost> {
    try {
      console.log(post);

      const query = await model
        .create(post)
        .then(postCreated => postCreated.toJSON() as IPost);

      return query;
    } catch (error) {
      console.log(error);

      throw Error(error);
    }
  }
  public async GetSinglePost(query: string): Promise<IPost> {
    try {
      return await model
        .findOne({
          where: {
            [Op.or]: [
              { id: { [Op.like]: query } },
              { title: { [Op.like]: `%${query}%` } },
            ],
          },
          order: [['id', 'DESC']],
        })
        .then(postFind => postFind.toJSON() as IPost);
    } catch (error) {
      throw Error(error);
    }
  }
  public async GetAll(query: object): Promise<Array<IPost>> {
    try {
      return await model
        .findAll({
          where: {
            ...query,
          },
          order: [['id', 'DESC']],
        })
        .then(postFind => postFind as Array<IPost>);
    } catch (error) {
      throw Error(error);
    }
  }
  async Update(id: string, updateValue: IPost): Promise<IPost> {
    try {
      const update = await model
        .update(updateValue, {
          where: { id },
        })
        .then(() =>
          model.findByPk(id).then(userUpdated => userUpdated.toJSON() as IPost),
        );
      return update;
    } catch (error) {
      throw Error(error);
    }
  }
  public async DeletePost(id: string): Promise<string> {
    try {
      return model
        .destroy({
          where: {
            id,
          },
        })
        .then(deleted => {
          if (deleted > 0) {
            return 'Post was deleted';
          }
          throw 'Post not found';
        });
    } catch (error) {
      throw Error(error);
    }
  }
}
