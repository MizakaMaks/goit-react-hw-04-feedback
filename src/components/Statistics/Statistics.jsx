import React from 'react';
import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, feedbackPercentage }) => {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.subtitle}>Good: {good}</p>
        </li>
        <li className={css.item}>
          <p className={css.subtitle}>Neutral: {neutral}</p>
        </li>
        <li className={css.item}>
          <p className={css.subtitle}>Bad: {bad}</p>
        </li>
        <li className={css.item}>
          <p className={css.resultTitle}>Total feedback: {total}</p>
        </li>
        <li className={css.item}>
          <p className={css.resultTitle}>Positive feedback: {feedbackPercentage}%</p>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  feedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
