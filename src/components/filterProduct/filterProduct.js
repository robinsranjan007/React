import './filterProduct.css'

let FilterProduct=(props)=>{



function onFilterValueChanged(e){
 props.FilterValueSelected(e.target.value)
}


    return (
<div className="filter-area">
     <select name="isAvailable" onChange={onFilterValueChanged}>
         <option value="all">All</option>
         <option value="available">Available</option>
         <option value="unavailable">Unavailable</option>
     </select>
</div>


    )
}


export default FilterProduct