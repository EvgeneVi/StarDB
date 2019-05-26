export default class StarwarsVisualService{
    _urlImg = 'https://starwars-visualguide.com/assets/img/'
  
    _queryOnServer = async (path) => {
        const url = await `${this._urlImg}${path}`;
        const res= await fetch(url);
       
        return await(res.ok) ? url :'http://lightform.ca/item-image-not-available.jpg'
    }


    getImagePlanet=(id)=>this._queryOnServer(`planets/${id}.jpg`);
    getImagePeople=(id)=>this._queryOnServer(`characters/${id}.jpg`)
  
}