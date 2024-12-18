import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TiChevronRight } from "react-icons/ti";
import Mods from "../data/Mods";
import Headers from "../data/Headers";

const Projects = () => {
	return (
		<div className='grid justify-center justify-items-center py-8 gap-y-16 max-sm:gap-y-8 grid-cols-auto-fill-80'>
			{Mods.map((mod) => {
				const [downloads, setDownloads] = useState(0);
				const [links, setLinks] = useState({modrinth: '', curseforge: ''});

				useEffect(() => {
					const setInfo = async () => {
						const modrinthData = await fetch(`https://api.modrinth.com/v2/project/${mod.modrinthId}`, {method: 'GET', headers: {}}).then(res => res.json()).catch(() => null);
						const curseforgeData = (mod.curseforgeId ? await fetch(`https://api.curseforge.com/v1/mods/${mod.curseforgeId}`, {method: 'GET', headers: Headers.curseforge}).then(res => res.json()).catch(() => null) : null);

						setDownloads((modrinthData ? modrinthData.downloads : 0) + (curseforgeData ? curseforgeData.data.downloadCount : 0));
						setLinks({modrinth: (modrinthData ? `https://modrinth.com/mod/${modrinthData.slug}` : ''), curseforge: (curseforgeData ? curseforgeData.data.links.websiteUrl : '')})
					}; setInfo();
				}, []);

				return (
					<div className='flex flex-col w-80 card items-center gap-4 rounded-3xl border-16 bg-colour-primary-800 text-colour-text-400 border-colour-primary-900' key={mod.modrinthId}>
						<div className='flex justify-between items-center p-2 w-full border rounded-lg bg-colour-bg-200 bg-opacity-50 border-colour-bg-100'>
							<h5 className='font-bold'>{mod.name}</h5>
							<div className='flex gap-3'>
								{links.modrinth && <a href={links.modrinth}><svg className='w-6 h-6'><use href="/assets/v1/social/svg/round-solid.svg#modrinth"></use></svg></a>}
								{links.curseforge && <a href={links.curseforge}><svg className='w-6 h-6'><use href="/assets/v1/social/svg/round-solid.svg#curseforge"></use></svg></a>}
							</div>
						</div>
						<div className='w-40 h-40 bg-cover rounded-xl border-2 border-colour-primary-600' style={{backgroundImage: `url('https://lieonstudios.github.io/assets/v1/logo/png/project/mod/${mod.icon}')`}}></div>
						<div className='flex flex-col flex-1 justify-between items-center w-full border rounded-lg bg-colour-bg-200 bg-opacity-50 border-colour-bg-100'>
							<div className='flex justify-between items-center p-2 w-full-2 -m-1px border rounded-lg border-colour-bg-100'>
								<p className='font-bold'>Minecraft Mod</p>
								<Link className='flex gap-1 justify-center items-center uppercase text-xs font-bold'>More<TiChevronRight className='text-sm' /></Link>
							</div>
							<div className='flex flex-col flex-1 justify-between p-2 w-full-2 -m-1px'>
								<p>{mod.summary}</p>
								<div className='flex justify-between'>
									<p className="text-xl">Downloads:</p>
									<h4 className='text-xl font-bold'>{Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 2 }).format(downloads)}</h4>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Projects;