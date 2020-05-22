import Store from "./Store";
import StoreLocationData from "./StoreLocationData";

interface StoreLocator {
    /**
     * Return all stores
     */
    stores(): Store[]

    /**
     * Filter stores by city
     * @param city The city to filter by
     */
    storesForCity(city: string): Store[]

    /**
     * Filter stores by a list of cities
     * @param cities The cities to filter by
     */
    storesForCities(cities: [string]): Store[]
    
    /**
     * Return a store by name
     * @param name The Microsoft store name to filter for
     */
    store(name: string): Store
}

export default class StoreFilter implements StoreLocator {
    private storeData: Store[]
    
    constructor() {
        this.storeData = StoreLocationData.all()
    }

    stores(): Store[] {
        return this.storeData
    }

    store(name: string): Store {
        throw new Error("Method not implemented.");
    }

    storesForCity(city: string): Store[] {
        throw new Error("Method not implemented.");
    }

    storesForCities(cities: [string]): Store[] {
        throw new Error("Method not implemented.");
    }
}