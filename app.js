// DOM ELEMENTS
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const body = document.querySelector('body')


const textArea = document.querySelector('#textarea')
const save = document.querySelector('#save-note')

const backButton = document.querySelector('#back-btn')
const output = document.querySelector('#out');

// // ADDING EVENT LISTENES TO BOTH LIGHT AND DARK ICON

// // LIGHT ICON
// light.addEventListener('click', () => {
//         light.style.display = 'none'
//         dark.style.display = 'initial';
//         body.classList.add('dark-theme')
// })

// // DARK ICON
// dark.addEventListener('click', () => {
//     light.style.display = 'initial';
//     dark.style.display = 'none';
//     body.classList.remove('dark-theme');
// })

// Function to save the textarea details into the local storage
function saveNotes(){
    const textVal = textArea.value;

    if (textVal == 0){
        alert('Please Enter a Note')
        return;
    }
    alert('Your note has been saved successfully \n Click on view notes to check')
    const noteData = JSON.parse(localStorage.getItem("Note")) || [];

    let noteDetails = {
        textVal
    }
    
    noteData.push(noteDetails)
    localStorage.setItem("Note", JSON.stringify(noteData))
    textArea.value = '';
}

// Event listener for when the SAVE button is clicked
save.addEventListener('click', saveNotes)

// Event listener for when you click the ENTER key
textArea.addEventListener('keypress', function(e){
    if (e.key === "Enter"){
        saveNotes()
        location.reload()
    }
})












    // const form = document.querySelector('.form');
    // const textAreaInput = document.querySelector('#textarea');
    // const view_notes = document.querySelector('#view-notes');
    
    // form.addEventListener('submit', function(e) {

    //     e.preventDefault();
    //     // const textAreaInputVal = textAreaInput.value
    //     if (!textAreaInput.value){
    //         alert("Please write in a note");
    //         return;
    //     }else{
    //         view_notes.innerHTML += `
    //         <div class="notes">
    //             <div class="note-content">
    //                 <input type="text" class="text" value="${textAreaInput.value}" readonly>
    //             </div>
    //             <div class="actions">
    //                 <button class="edit">EDIT</button>
    //                 <button class="delete">DELETE</button>
    //             </div>
    //         </div>
    //         `
    //     }
    // })
    //     const notesDiv = document.createElement("div");
    //     notesDiv.classList.add("notes");
    
    //     const noteContentDiv = document.createElement("div");
    //     noteContentDiv.classList.add("note-content");
    //     noteContentDiv.innerText = textAreaInput.value;
    
    //     notesDiv.appendChild(noteContentDiv);
        
    //     const noteContentDivInput = document.createElement("input");
    //     noteContentDivInput.classList.add("text");
    //     noteContentDivInput.type = "text";
    //     noteContentDivInput.value = textAreaInput.value;
    //     noteContentDivInput.setAttribute("readonly", "readonly");

    //     noteContentDiv.appendChild(noteContentDivInput)

    //     viewNotes.append(notesDiv)
        
    
    // })


















// const noteData = JSON.parse(localStorage.getItem("Note")) || []

// function getOutputs(){
   
// }

// backButton.addEventListener('click', dun)
