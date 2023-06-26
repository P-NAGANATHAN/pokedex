const Fruits = ({ data }) => {
    return (
      <div>
        <ul>
          {data.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Fruits;