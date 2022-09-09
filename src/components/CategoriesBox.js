export default function CategoriesBox(props) {
  return (
    <div>
      <input type="checkbox" id={props.id} name={props.title} />
      <label>{props.title}</label>
    </div>
  );
}
