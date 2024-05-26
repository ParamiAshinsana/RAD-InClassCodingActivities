export default function GDSEButton(props) {
    return (
      <button className={`${props.btnColor}  ${props.hoverEffect}  text-white font-bold py-2 px-4 rounded mr-4 mt-4`}>
       {props.btnName}
      </button>
    );
  }