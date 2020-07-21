

export class Prefs {
  text_me_borrow_requests: boolean;
  bffs_borrow_without_ok: boolean;
  fof_dont_see_items: boolean;

  constructor(text_me: boolean, borrow_ok: boolean, block_FoF: boolean) {
    this.text_me_borrow_requests = text_me;
    this.bffs_borrow_without_ok = borrow_ok;
    this.fof_dont_see_items = block_FoF;
  }
}

export class Person {
  id: number;
  name: string;
  phone: string;
  zipCode: string;
  preferences: Prefs;
  bestFriends: Array<Person>;
  items: Array<Item>;

  constructor(personId: number, theName: string, ph: string, zip: string) {
    this.id = personId;
    this.name = theName;
    this.phone = ph;
    this.zipCode = zip;
    this.preferences = new Prefs(false, false, false);
    this.bestFriends = new Array<Person>();
    this.items = new Array<Item>();
  }
  addItem(the_id: number, the_name: string, the_itemType: string, desc: string): Item {
    const newItem = new Item(the_id, the_name, the_itemType, desc, this);
    this.items.push(newItem);
    return newItem;
  }
}

export class Item implements Item {
  id: number;
  name: string;
  itemType: string;
  description: string;
  ownedBy: Person;
  lentTo = null;

  constructor(itemId: number, the_name: string, the_itemType: string, desc: string, owner: Person) {
    this.id = itemId;
    this.name = the_name;
    this.itemType = the_itemType;
    this.description = desc;
    this.ownedBy = owner;
  }
}

export interface IYourShareState {
  // Declaring a "global" variable (idCounter) here so that we can issue sequential, increasing ID numbers to
  // Person and Item objects
  // May we need this, maybe we don't, but it's often useful for looking things up / saving to a file, etc
  idCounter: number,
  people: Array<Person>,
  currentUser: Person
}

export default IYourShareState;