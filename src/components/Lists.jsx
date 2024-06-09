
import PropTypes from 'prop-types'

function Lists(props) {
  return (
    <div style={{border: "1px solid black"}}>
        <h2>{props.name}</h2>
        <input type="checkbox" id={props.id} onChange={props.toggle} checked={props.bools}/>
    </div>
  )
}

Lists.propTypes = {
    name: PropTypes.string,
    toggle: PropTypes.func,
    bools: PropTypes.bool,
    id: PropTypes.string,

}

export default Lists;
