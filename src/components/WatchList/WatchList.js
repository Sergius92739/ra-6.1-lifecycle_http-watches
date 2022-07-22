import Watch from "../Watch/Watch";
import PropTypes from "prop-types"

export default function WatchList(props) {
  const { list, onDelete } = props;
  
  return (
    <ul className="clock_list">
      {list.map((el) => <Watch key={el.id} {...el} onDelete={onDelete} />)}
    </ul>
  )
}

WatchList.propTypes = {
  list: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}
