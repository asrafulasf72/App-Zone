const getStoredApps=()=>{
    const stored=localStorage.getItem("installation")
    return stored?JSON.parse(stored):[];
}

const addStoredApp=(id,image,title,ratingAvg,downloads,size)=>{
    const storedApps=getStoredApps();

    const exsist =storedApps.some(app=> app.id===id)
    if(exsist){
        alert('App already Installed');
        return false
    }

    const newApp={id,image,title,ratingAvg,downloads,size};
    const updateApps=[...storedApps,newApp]
    localStorage.setItem("installation", JSON.stringify(updateApps))
    return true;

}

export {getStoredApps,addStoredApp};