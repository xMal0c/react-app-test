export const Greeting = ({ name, messages }) => {
  let isMorning = new Date().getHours() < 12;

  if (!name) return null;

  let greetingHeader = isMorning ? (
    <h3>Good Morning!</h3>
  ) : (
    <h3>Good Afternoon!</h3>
  );
  return (
    <div>
      {greetingHeader}

      {/* You've got a message, {name}: {messages} */}
      {messages === 0 ? null : <p>You've got a message: {messages}</p>}
    </div>
  );
};

export default Greeting;
