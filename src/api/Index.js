const FAKE_DALAY = 2000;
const FAKE_API = 'https://rickandmortyapi.com/api/character/';
const FAKE_DATA = [];

export const addVideo = (newVideo) => Promise((resolve, reject) => {
    setTimeout(() => {
        newVideo.id = FAKE_DATA.length + 1;
        FAKE_DATA.push(newVideo);
        return resolve({ok:1});
    }, FAKE_DALAY)
});

export const getRickandMorty = () => new Promise((resolve,reject) => {
  getApi()
  .then(data => {
	  return resolve(data.results)
  });
});

const getApi = async () => {
	try{
	  const resp = await fetch(FAKE_API);
	  return resp.json();
	}catch(error){
		throw error;
	}
}

export const getPictureDetail = ({id}) => new Promise((resolve,reject) => {
  setTimeout(()=> {
   const picture = FAKE_DATA.find((el) => parseInt(el.id) === parseInt(id));

   if(!picture) return reject({message:"No se ha encontrado el video :("});
   
   if(picture.description) return resolve(picture)
    
   return getApi().then(name => {
    picture.name = name.join();
       return resolve(picture);
   }).catch(console.error);
  }, FAKE_DALAY);
});