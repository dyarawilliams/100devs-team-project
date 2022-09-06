const deleteBtn = document.querySelectorAll('.del')
const studyComplete = document.querySelectorAll('span.mark-complete')
const studyIncomplete = document.querySelectorAll('span.mark-incomplete')
const editStudyBtn = document.querySelectorAll('.editBtn')


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteStudy)
})

Array.from(studyComplete).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(studyIncomplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

Array.from(editStudyBtn).forEach((el)=>{
    el.addEventListener('click', editStudy)
})

async function editStudy(){
    console.log('Im Reading a editStudy Function')
    // sessionStorage.setItem("StudyId", this.closest('section').dataset.id)
    const studyId = this.closest('section').dataset.id
    try {
        const response = await fetch('studies/editStudy', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'studyIdFromJSFile': studyId,
            })
        })
        console.log(response)
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function deleteStudy(){
    console.log('delete log',this.closest('section').dataset.id);
    const studyId = this.closest('section').dataset.id
    try{
        const response = await fetch('studies/deleteStudy', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'studyIdFromJSFile': studyId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload() 
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const studyId = this.closest('section').dataset.id
    try{
        const response = await fetch('studies/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'studyIdFromJSFile': studyId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const studyId = this.closest('section').dataset.id
    try{
        const response = await fetch('studies/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'studyIdFromJSFile': studyId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


