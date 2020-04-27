import Store from "./Store";

export default class StoreLocationData {
  static all(): Store[] {
    var states: Store[] = [];

    StoreLocationData.json.forEach((entry) => {
      states.push(new Store(entry.name, entry.city, entry.state))
    });
    
    return states;
  }

  static json = [
    {
      "name": "Microsoft Retail Store: Bellevue Square Mall",
      "city": "Bellevue",
      "state": "Washington"
    },
    {
      "name": "Corporate Sales Office: Bellevue",
      "city": "Bellevue",
      "state": "Washington"
    },
    {
      "name": "Microsoft Retail Store: University Village",
      "city": "Bellevue",
      "state": "Washington"
    },
    {
      "name": "Microsoft Retail Store: Pacific Place",
      "city": "Bellevue",
      "state": "Washington"
    },
    {
      "name": "Microsoft Retail Store: Westfield Southcenter",
      "city": "Bellevue",
      "state": "Washington"
    },
    {
      "name": "Microsoft Retail Store: Alderwood",
      "city": "Lynnwood",
      "state": "Washington"
    },
    {
      "name": "Microsoft Retail Store: University Village",
      "city": "Seattle",
      "state": "Washington"
    },
    {
      "name": "Microsoft Retail Store: Pacific Place",
      "city": "Seattle",
      "state": "Washington"
    },
    {
      "name": "Microsoft Retail Store: Westfield Southcenter",
      "city": "Seattle",
      "state": "Washington"
    }
  ]
}
