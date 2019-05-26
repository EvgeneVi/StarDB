import VisualService from './starwars-visual-service';

export default class SwapiService{
    _visualServ = new VisualService();

    _apiBase = "https://swapi.co/api";

    _transformPlanet = ({url, name, rotation_period, orbital_period, diameter, climate}) => {
      const id = this._extractId(url)//получение id планеты
      return this._visualServ.getImagePlanet(id).then(image=>{//прогоняем через сервис с картинками и полчуаем либо картинку, либо изобр ошибки
        return {
          id,
          name,
          image,
          rotationPeriod: rotation_period,
          orbitalPeriod: orbital_period,
          diameter,
          climate
        }
      })
    }
    _transformPeople = ({url, name, height, mass, birth_year, gender})=>{
      const id = this._extractId(url);
      return this._visualServ.getImagePeople(id).then(image => {
        return{
          id,
          image,
          name, 
          height,
          mass,
          birthYear:birth_year,
          gender
        }
      })
    }
    _extractId(item){
      const idRegExp = /\/([0-9]*)\/$/;
      return item.match(idRegExp)[1]
    }

    async _getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
      if(res.ok===false) throw new Error(`Couldn't fetch ${url} recived ${res.status} `)
      else return await res.json()
    }
    async getAllPlanets(){
     const res =  await this._getResource('/planets/');
     return res.results.map(planet=>this._transformPlanet(planet))

    }
    async getPlanet(id){
       const res = await this._getResource(`/planets/${id}/`);
       return this._transformPlanet(res)

     }
     
    async getAllPeople(){
      const res = await this._getResource(`/people/`);
      return res.results.map(people=>this._transformPeople(people))
    }
    async getPeople(id){
      const res = await this._getResource(`/people/${id}/`);
      return this._transformPeople(res)
    }
   
}