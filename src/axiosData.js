import axios from "axios";

const axiosData = async (item, typeOperation) => {
    console.log("item",item);
    let url = '';
    if (typeOperation === "номер") {
        url = `https://baza-gai.com.ua/nomer/${item.toUpperCase()}`;
    }
    else if (typeOperation === "vin") {
        url = `https://baza-gai.com.ua/vin/${item.toUpperCase()}`;
    }
    else if (typeOperation === "модель" && item) {
        let arrayModel = item.trim().split(" ");
        if(arrayModel.length > 2){
            arrayModel = [arrayModel[0],(arrayModel.slice(1).join('-'))]
            console.log("template arrr",arrayModel);
        }

        console.log("arrayModel",arrayModel);
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
        
        console.log("Axios Error");
        alert(`Error fetching data: ${error} `, error);
        return axiosData("KA0007XB","номер");
    }
}

export default axiosData;