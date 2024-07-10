import axios from "axios";

const axiosData = async (item, typeOperation) => {
    let url = '';
    if (typeOperation === "номер") {
        url = `https://baza-gai.com.ua/nomer/${item.toUpperCase()}`;
    }
    else if (typeOperation === "vin") {
        url = `https://baza-gai.com.ua/vin/${item.toUpperCase()}`;
    }
    else if (typeOperation === "модель") {
        const arrayModel = item.split(" ")
        console.log(`https://baza-gai.com.ua/make/${arrayModel[0].toLowerCase()}/${arrayModel[1].toLowerCase()}`);
        url = `https://baza-gai.com.ua/make/${arrayModel[0].toLowerCase()}/${arrayModel[1].toLowerCase()}`;
    }
    else if (typeOperation === "регіон") {
        url = `https://baza-gai.com.ua/vin/${item.toUpperCase()}`;
    }


    const key = "c9fac9bee7ec8ba2f26a932d75d7c814";
    try {
        const response = await axios.get(url, {
            headers: {
                "Accept": "application/json",
                "X-Api-Key": key,
            },
        });

        const data = response.data;

        if(typeOperation === "модель"){
            console.log("data",data);
            return [data];
        }

        ///////////////////////////////////////////////////////
        data.operations = data.operations.map(item => item = { ...item, digits: data.digits });
        data.operations[0] = ({ ...data.operations[0], vin: data.vin });
        data.operations[0] = ({ ...data.operations[0], photo_url: data.photo_url });
        data.operations[0] = ({ ...data.operations[0], region: data.region.slug });

        console.log("data", data);
        console.log("data.operations", data.operations);
        return data.operations // Возвращаем данные

    } catch (error) {
        alert(`Error fetching data:${error} `, error);
        
        return axiosData("KA0007XB","номер"); // В случае ошибки возвращаем null
    }
}

export default axiosData;