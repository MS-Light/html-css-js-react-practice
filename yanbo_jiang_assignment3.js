const tableInfo = [ 
    { 
        studentName: 'John', 
        Age: 19, 
        Phone: '455 - 983 - 0903', 
        Address: '123 Ave, San Francisco, CA, 94011'}, 
    { 
        studentName: 'Alex', 
        Age: 21, 
        Phone: '455 - 983 - 0912', 
        Address: '456 Rd, San Francisco, CA, 94012'}, 
    { 
        studentName: 'Josh', 
        Age: 22, 
        Phone: '455 - 345 - 0912', 
        Address: '789 Dr, Newark, CA, 94016'}, 
    { 
        studentName: 'Matt',
        Age: 23, 
        Phone: '321 - 345 - 0912', 
        Address: '223 Dr, Sunnyvale, CA, 94016'
    }, 
]; 


let body_t = document.querySelector('#body_t');
let div1 = document.createElement('div');
div1.className = "infoTable";
body_t.appendChild(div1);

let table = document.createElement('table');
table.className = 'table';
let table_head = document.createElement('thead');
table_head.className = 'table_head';
table.appendChild(table_head);
// table_head.innerHTML("<tr><th>Student Name</th><th>Age</th><th>Phone #</th><th>Address</th></tr>");
let table_body = document.createElement("tbody");
table_body.className = 'table_body';
table.appendChild(table_body);
div1.appendChild(table);

for (let i = 0; i < tableInfo.length; i++){
    let table_row = document.createElement('tr');
    table_body.appendChild(table_row);

    for (const k in tableInfo[i]){
        let table_d = document.createElement('td');
        table_d.innerHTML = tableInfo[i][k];
        table_row.appendChild(table_d);
    }
}

let div2 = document.createElement('div');
div2.className = "searchBar";
let input = document.createElement('input');
input.type = 'text';
input.placeholder = "Search";
input.addEventListener('keypress', (keyPressed)=>{
    if (keyPressed.key === "Enter"){
        alert(`${keyPressed.target.value}`);
    }
})
div2.appendChild(input);
body_t.appendChild(div2);


const list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java']; 

let div3 = document.createElement('div');
const OrderedList = document.createElement('ol');
const UnOrderedList = document.createElement('ul');
list.forEach((e) =>{
    let li = document.createElement('li');
    li.textContent = e;
    let li2 = document.createElement('li');
    li2.textContent = e;
    OrderedList.appendChild(li);
    UnOrderedList.appendChild(li2);
});
div3.appendChild(OrderedList);
div3.appendChild(UnOrderedList);
body_t.appendChild(div3);

const dropDownList = [ 
    { value: 'newark', content: 'Newark' }, 
    { value: 'santaClara', content: 'Santa Clara' }, 
    { value: 'unionCity', content: 'Union City' }, 
    { value: 'albany', content: 'Albany' }, 
    { value: 'dalyCity', content: 'Daly City' }, 
    { value: 'sanJose', content: 'San Jose' }, 
    ];

let div4 = document.createElement('div');
let dropDown = document.createElement('select');
dropDownList.forEach((e) =>{
    let option = document.createElement('option');
    option.setAttribute("value", e.value);
    option.innerHTML = e.content;
    dropDown.appendChild(option);
})
body_t.appendChild(dropDown);