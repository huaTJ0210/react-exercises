import React, { useState } from 'react';
import styles from './List.module.scss';
import QuestionCard from '../components/QuestionCard.tsx';

const rawQuestionList = [
  {
    _id: 'q1',
    title: 'title1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: '3月10日 13:23'
  },
  {
    _id: 'q2',
    title: 'title2',
    isPublished: false,
    isStar: false,
    answerCount: 2,
    createdAt: '3月10日 13:23'
  },
  {
    _id: 'q3',
    title: 'title3',
    isPublished: false,
    isStar: true,
    answerCount: 3,
    createdAt: '3月10日 13:23'
  },
  {
    _id: 'q4',
    title: 'title4',
    isPublished: false,
    isStar: false,
    answerCount: 4,
    createdAt: '3月10日 13:23'
  }
];

const List: React.FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {questionList.map((item) => {
          return <QuestionCard key={item._id} {...item}></QuestionCard>;
        })}
      </div>
      <div className={styles.footer}>底部</div>
    </>
  );
};
export default List;
