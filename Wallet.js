class Wallet {
    constructor(money) {
        let _money = money;
        // Downloading current wallet content 
        // Pobieranie aktualnej zawartości portfela
        this.getWalletValue = () => _money;

        // Checking if the user has the right amount of money.
        //Sprawdzanie czy użytkownik ma odpowiednią ilość pieniędzy.
        this.checkCanPlay = (value) => {
            if (_money >= value) return true;
            return false;
        }
        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                }
                else if (type === "-") {
                    return _money -= value;
                }
                else {
                    throw new Error("invalid operation type"); //nieprawidłowy typ operacji
                }
            }
            else {
                console.log(typeof value);
                throw new Error("incorrect numbers"); //nieprawidłowa liczb
            }
        }
    }
}

const wallet = new Wallet(200); 