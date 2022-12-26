
const tasks = {
    tasks: [
        {
            text: "Grocery Shopping",
            completed: false
        },
        {
            text: "Clean",
            completed: true
        },
        {
            text: "Programming",
            completed: false
        },
    ],

    getTasksToDo() {
        const todoArr = this.tasks.filter(t => {
            return !t.completed
        })
        return todoArr.map(t => t.text)
    }
}




console.log("Your tasks for today: ", tasks.getTasksToDo())
// console.log(task.tasks)