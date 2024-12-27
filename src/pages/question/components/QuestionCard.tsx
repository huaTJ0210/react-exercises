import React from 'react';
import styles from './QuestionCard.module.scss';

type PropType = {
  _id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createdAt: string;
};

const QuestionCard: React.FC<PropType> = (props: PropType) => {
  const { title, createdAt, answerCount, isPublished } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <a href="#">{title}</a>
        </div>
        <div className={styles.right}>
          {isPublished ? '已发布' : '未发布'}
          <span>答卷：{answerCount}</span>
          <span>{createdAt}</span>
        </div>
      </div>
    </div>
  );
};
export default QuestionCard;
