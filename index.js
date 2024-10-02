const headers = {
    'Accept':'application/json',
    'x-api-key':'$2a$10$X5BedJMwNKGRXoetXlscbOhfxNMZmSXiLDwMFvlHTMM0xqCa5pUvG'
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

async function getModDownloads () {
    for (let i = 0; i < dls.length; i++) {
        dls[i].innerHTML = "loading";
        let ids = dls[i].id.split("-");
        cfdl = await getCurseforgeData(ids[0]).then(data => data.data.downloadCount).catch(i => 0);
        mddl = await getModrinthData(ids[1]).then(data => data.downloads).catch(i => 0);
        total = cfdl + mddl;

        length = Math.floor((total.toString().length - 1) / 3) * 3;
        rounded = (Math.floor(total / Math.pow(10, length - 1)) / 10) + getNum(length);
        dls[i].innerHTML = rounded;
    }
}

getModDownloads()