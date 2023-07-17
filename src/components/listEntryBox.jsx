import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../globalState/index";

const ListEntryBox = () => {
  const textGlobalState = useSelector((state) => state.textBox);
  const dispatch = useDispatch();
  const { emptyTextBoxValue, textBoxValueChange } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const [taskName, setTaskName] = useState("");
  const handleTaskInputBox = (e) => {
    setTaskName(e.target.value);
  };
  const handleAddTask = () => {
    console.log("i am clicked");
    console.log(taskName);
    textBoxValueChange(taskName);
  };
  const handelReset = () => {
    setTaskName("");
    emptyTextBoxValue("");
  };
  return (
    <>
      <input
        name="Task"
        value={taskName}
        onChange={(e) => handleTaskInputBox(e)}
      />
      <button onClick={handleAddTask}>Add the Task</button>
      <button onClick={handelReset}>Reset</button>
    </>
  );
};

export default ListEntryBox;
