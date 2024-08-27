const headers = {
    'Accept':'application/json',
    'x-api-key':'$2a$10$rVnnGf6WztLzli2pU3xIt.LeNYGvuVo3qGgQvQNb.ua3GrUOFXr2m'
};

const mods = [
    "858032-HKKqmr2p",
    "932715-7jzrCiK0",
    "913586-C5hwIsg1",
    "550532-X4XNSWNM",
    "997888-twjW6Ggd",
    "1002272-aFKTqsnr",
    "n/a-46RgF8H2",
    "917744-oyJUwUv3",
    "581903-jCEmfHBM",
    "714218-GbO1YeS0",
    "915346-meHEWmih",
    "575963-n/a"
];

let profile = 0;

let getCurseforgeData = async function (id) {
    return await fetch(`https://api.curseforge.com/v1/mods/${(id)}`, { method: 'GET', headers: headers}).then(res => res.json()).catch(error => error);
}

let getModrinthData = async function (id) {
    return await fetch(`https://api.modrinth.com/v2/project/${(id)}`).then(res => res.json()).catch(error => error);
}

async function getModDownloads () {
    for (let i = 0; i < mods.length; i++) {
        let ids = mods[i].split("-");
        cfdl = await getCurseforgeData(ids[0]).then(data => data.data.downloadCount).catch(i => 0);
        if (cfdl == NaN || cfdl == undefined) {
            cfdl = 0;
        }
        mddl = await getModrinthData(ids[1]).then(data => data.downloads).catch(i => 0);
        if (mddl == NaN || mddl == undefined) {
            mddl = 0;
        }
        total = cfdl + mddl;

        profile += total;
        console.log(profile);
    }
    // console.log(profile)
}

getModDownloads()