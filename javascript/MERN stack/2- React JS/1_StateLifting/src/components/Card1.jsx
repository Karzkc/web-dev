/* eslint-disable react/prop-types */

const Card1 = (props) => {
  return (
    <div>
      I am Child 1
      <input
        type="text"
        name="child1"
        onChange={(e) => props.setText(e.target.value)} //lifting the state
      />
      
    </div>
  );
};

export default Card1;
