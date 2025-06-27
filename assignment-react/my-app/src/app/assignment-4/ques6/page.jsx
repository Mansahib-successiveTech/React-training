import ControlledTodo from "@/components/ControlledTodo";
import SearchFilter from "@/components/SearchFilter";
import TemperatureConverter from "@/components/TempratureConvert";

const Home = () => {
  return (
    <>
      <p>
        6.Build a simple todo list component with a text input for adding new
        tasks and a list to display them. Use controlled components to handle
        the input and update the list of tasks.
      </p>
<ControlledTodo />
<SearchFilter />
<TemperatureConverter />
    </>
  );
};
export default Home