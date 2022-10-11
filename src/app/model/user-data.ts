export class UserData {
    name: string = "";
    email: string = "";
    password: string = "";
    mobileNumber: number = 0;
    isAdmin: string = "";
    address: string = "";
    pinCode: number = 0;
    locality: string = "";
    city: string = "";
    landmark: string = "";
    customerType: string = "";

    constructor(name: string, email: string, password: string, mobileNumber: number, isAdmin: string, address: string, pinCode: number, locality: string, city: string, landmark: string, customerType: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.isAdmin = isAdmin;
        this.address = address;
        this.pinCode = pinCode;
        this.locality = locality;
        this.city = city;
        this.landmark = landmark;
        this.customerType = customerType;
    }
}
