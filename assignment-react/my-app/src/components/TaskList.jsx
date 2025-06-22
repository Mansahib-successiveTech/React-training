import PropTypes from "prop-types";

function TaskList({tasks}){
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
TaskList.PropTypes={
    tasks:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TaskList;