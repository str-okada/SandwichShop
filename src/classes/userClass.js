class user {
  #cid;
  #firstName;
  #lastName;
  #username;
  #email;
  #address;
  #cardNum;
  #expDate;
  constructor(cid, firstName, lastName, username, email, address, cardNum, expDate) {
    this.#cid = cid;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#username = username;
    this.#email = email;
    this.#address = address;
    this.#cardNum = cardNum;
    this.#expDate = expDate;
  }
  toObject() {
    return {
      cid: this.#cid,
      fullname: `${this.#firstName} ${this.#lastName}`,
      uname: this.#username,
      email: this.#email,
      address: this.#address,
      cardNum: this.#cardNum,
      expDate: this.#expDate
    };
  }
}
export default user;