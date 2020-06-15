const FAKE_DALAY = 2000;
const FAKE_API = 'https://rickandmortyapi.com/api/character/';
const FAKE_DATA = [];

export const addPicture = (newPicture) => Promise((resolve, reject) => {
    setTimeout(() => {
        newPicture.id = FAKE_DATA.length + 1;
        FAKE_DATA.push(newPicture);
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

  getApi()
  .then( data => {
    const picture  =  data.results.find((el) => parseInt(el.id) === parseInt(id))
    if(!picture) return reject({message:"No se ha encontrado la imagen :("});
    if(picture.name) return resolve(picture)
  });

});

// export const AddPicture = (newPicture) => new Promise((resolve,reject) => {
//    setTimeout(() => {
//     newPicture.id = FAKE_DATA.length + 1;
//     FAKE_DATA.push(newPicture);
//     return resolve({ok:1});
//    },FAKE_DALAY);
// });