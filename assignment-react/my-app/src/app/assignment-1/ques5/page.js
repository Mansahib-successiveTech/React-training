import TaskList from "@/app/components/TaskList"
const getTaskList=()=>{
return(
    <>
    <h3>this is ques5</h3>
    <TaskList tasks={["reading","studying","running"]} />
    </>
)
}
export default getTaskList