import PropTypes from "prop-types";

function taskList({tasks}){
return(
<div>
     {tasks.map((element,index)=>{
        return(
            <ul key={index}>
                <li >{element}</li>
            </ul>
        )
     }
    )
}
</div>
)
}
taskList.prototype={
    tasks:PropTypes.arrayOf(PropTypes.string)
}

export default taskList;