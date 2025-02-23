/* eslint-disable react/prop-types */

const Card2 = (props) => {
    return (
        <div>
            I am Child 2 <br />
            <p>Value From child 1 : {props.text}</p>
           
        </div>
    );
};

export default Card2;
