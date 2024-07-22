const headers = {
    'Accept':'application/json',
    'x-api-key':'$2a$10$rVnnGf6WztLzli2pU3xIt.LeNYGvuVo3qGgQvQNb.ua3GrUOFXr2m'
};

let getCurseforgeData = async function (id) {
    return await fetch(`https://api.curseforge.com/v1/mods/${(id)}`, { method: 'GET', headers: headers}).then(res => res.json()).catch(error => error);
}

let getModrinthData = async function (id) {
    return await fetch(`https://api.modrinth.com/v2/project/${(id)}`).then(res => res.json()).catch(error => error);
}

let dls = document.getElementsByClassName("download-count");

let getNum = function (num) {
    if (num < 3) {
        return ""
    } if (num < 6) {
        return "k"
    } if (num < 9) {
        return "m"
    } else {
        return "b"
    }
}

async function idk () {   
    console.log(dls)
    for (let i = 0; i < dls.length; i++) {
        let ids = dls[i].id.split("-");
        cfdl = await getCurseforgeData(ids[0]).then(data => data.data.downloadCount);
        mddl = await getModrinthData(ids[1]).then(data => data.downloads);
        total = cfdl + mddl;

        length = Math.floor((total.toString().length - 1) / 3) * 3;
        rounded = (Math.floor(total / Math.pow(10, length - 1)) / 10) + getNum(length);
        dls[i].innerHTML = rounded;
    }
}

idk()