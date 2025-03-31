function NextButton({ isLastQuestion, answer, dispatch }) {
  let isLast = false;

  if (answer === null) return null;
  if (answer && isLastQuestion) isLast = true;

  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        if (isLast) {
          dispatch({ type: 'finished' });
        } else {
          dispatch({ type: 'nextQuestion' });
        }
      }}
    >
      {isLast ? 'Finish' : 'Next'}
    </button>
  );
}

export default NextButton;
