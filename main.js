// -----------------Bai 3 ----------------
const input = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]
const check = (arr) =>{
    console.log(arr);
    let arr1 = arr.map(() =>{ return 1})
    for( let i= 0 ; i< arr.length; i++){
        for( let j= i+1; j< arr.length; j++){
            if( arr[i] == arr[j]){
                arr1[i]++               
            }
        }
    }
    let count = arr1[0], value = 0;
    arr1.forEach((element,index) => {
        if( count < element){
            count= element
            value = index
        }       
    });
    const output = {
        value: arr[value],
        count: count
    }
    console.log(output);
}
check(input)

// -----------------Bai 4 ----------------
window.addEventListener("load", () => {
    const form = document.querySelector("#form-submit");
    const input = document.querySelector(".input");
    const input1 = document.querySelector(".input1");
    const input2 = document.querySelector(".input2");
    const todoListContainer = document.querySelector(".todolist-container");  //show item
    const show = () => {
        let toDoData = localStorage.getItem("todo")
            ? JSON.parse(localStorage.getItem("todo"))
            : [];
        todoListContainer.innerHTML = ``;
    // Sort alphabet   
        toDoData.sort(function(a, b){
        var nameA=a.inputValue.toLowerCase(), nameB=b.inputValue.toLowerCase();
        if (nameA < nameB) 
            return -1;
        if (nameA > nameB)
            return 1;
            return 0;
       });
        localStorage.setItem("todo", JSON.stringify(toDoData)); 
        toDoData.map((d, index) => {
        const itemTodo = document.createElement("div");
        itemTodo.classList.add("item");
        itemTodo.innerHTML = `
            <span class = 'name-todo'>${d.inputValue}</span>
            <span class = 'name-todo'>${d.inputValue1}</span>
            `;
        todoListContainer.appendChild(itemTodo);
        });  
    //delete same name
        const DeleteBtns = document.querySelector(".button3");
        DeleteBtns.addEventListener("click", () => {
            for( let i= 0 ; i< toDoData.length; i++){
                for( let j= i+1; j< toDoData.length; j++){
                    if( toDoData[i].inputValue == toDoData[j].inputValue){
                        toDoData.splice(j, 1);
                        localStorage.setItem("todo", JSON.stringify(toDoData));               
                   }
                }
            }       
            show();
        });
    };  
    show();
  // Search
    const searchInput = document.querySelector(".button2");
    const searchResults = document.querySelector('.search-list');
    searchInput.addEventListener('click', (e) => {
    e.preventDefault();
    let toDoData = localStorage.getItem("todo")
        ? JSON.parse(localStorage.getItem("todo"))
        : [];
    console.log(1);
    const search = input2.value
    console.log(search);
    if (search) {
        const res = toDoData.filter((item) =>
            item.inputValue.includes(search) 
        );
        searchResults.style.display = 'block';
        if (!res[0]) {
            searchResults.innerHTML = `
                <li class="search-no-result">
                    <i>No people with the same name</i>
                </li>
            `;
        }
        else {
            searchResults.innerHTML = res
                .map(
                    (d) => `
                    <li class="search-item">
                    <span class = 'name-todo'>${d.inputValue}</span>
                    <span class = 'name-todo'>${d.inputValue1}</span>
                    </li>
                `
                )
                .join('');   
            }
    }     
    else {
        searchResults.style.display = 'none';
    }
    });  
  //add item
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputValue = input.value;
        const inputValue1 = input1.value;
        let toDoData = localStorage.getItem("todo")
            ? JSON.parse(localStorage.getItem("todo"))
            : [];
  
        input.value = "";
        input1.value = "";
        toDoData = [...toDoData, {
            inputValue,
            inputValue1
        }];
        localStorage.setItem("todo", JSON.stringify(toDoData));
        show();
    });
});
  
  
  