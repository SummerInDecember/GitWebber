document.getElementById('goBack').addEventListener('click', () => {
    window.electronAPI.goBack();
});

document.getElementById('goForth').addEventListener('click', () => {
    window.electronAPI.goForth();
});

document.getElementById('searchBar').addEventListener('keydown', async (e) => {
    if(e.key === 'Enter') 
    {
        window.electronAPI.enteredSearch(document.getElementById('searchBar').value);
        changeSrc();
    }
});

async function changeSrc()
{
    let newSrc = await window.electronAPI.changeFrame();
    document.getElementById('frame').setAttribute("src", newSrc);
}