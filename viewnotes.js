const view_notes = document.querySelector('#view-notes');
const noteContent = document.querySelector('.note-content')
const back_btn = document.querySelector('#back')
const clearAll = document.querySelector('#clear-all')



const noteData = JSON.parse(localStorage.getItem("Note")) || [];


for (i = 0; i < noteData.length; i++){

    view_notes.innerHTML += `
            <div class="notes">
                <div class="note-content">
                <textarea class="text" readonly>🔴 ${noteData[i].textVal}</textarea>
                </div>
                <div class="actions">
                    <button class="delete">DELETE</button>
                </div>
            </div>
            `
}

const notes = document.querySelectorAll('.notes')
const text = document.querySelectorAll('.text')
// const edit = document.querySelectorAll('.edit')
const deleteNote = document.querySelectorAll('.delete')
const save = document.querySelector('.save')

// for (let i = 0; i < edit.length; i++){
//     edit[i].addEventListener('click', function(e){
//         if (edit[i].innerText == "EDIT"){
//         edit[i].innerText = "SAVE"
//         text[i].removeAttribute('readonly')
//     }
//     else{
//         const exist = noteData.find((oneNote) =>{
//             return text[i].value == noteData.textVal
//         })

//         noteData
//         // update = [];
//         const noteData = JSON.parse(localStorage.getItem("Note")) || [];

//         let test = {
//             newTest: text[i].value 
//         }
//         noteData.push(test)
//         edit[i].innerText = "EDIT"
//         text[i].setAttribute('readonly', 'readonly')
//         // noteData += `text[i]`
        
//         localStorage.setItem("Note", JSON.stringify(noteData)) 
//     }
//     })
// }


for (let i = 0; i < notes.length; i++){
    clearAll.addEventListener('click', function(){
        notes[i].remove()
        localStorage.removeItem('Note')

        // if (!notes.length == 0){
        // alert('You have succesfully deleted all notes')
        // }
    })
}

for (let i = 0; i < deleteNote.length; i++){
    deleteNote[i].addEventListener('click', function(){
        const noteData = JSON.parse(localStorage.getItem("Note")) || [];
        noteData.splice(notes[i], 1)
        notes[i].remove()
        localStorage.setItem("Note", JSON.stringify(noteData))
        alert('You have succesfully deleted a note')      
    })
}







