import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import React from "react";

const axiosData = async (item, typeOperation) => {
    let url = '';
    if (typeOperation === "номер") {
        console.log("if nomer");
        url = `https://baza-gai.com.ua/nomer/${item.toUpperCase()}`
    }
    else if (typeOperation === "vin") {
        console.log("if vin");
        url = `https://baza-gai.com.ua/vin/${item.toUpperCase()}`
    }
    else if (typeOperation === "модель") {
        console.log("if model");
        url = `https://baza-gai.com.ua/make/lamborghini/huracan`;
    }
    else if (typeOperation === "регіон") {
        url = `https://baza-gai.com.ua/vin/${item.toUpperCase()}`
    }


    const key = "b58b989505dc6b035c5ee1739a12f057";
    try {
        const response = await axios.get(url, {
            headers: {
                "Accept": "application/json",
                "X-Api-Key": key,
            },
        });
        const data = response.data;
        ///////////////////////////////////////////////////////
        data.operations = data.operations.map(item => item = { ...item, digits: data.digits });
        data.operations[0] = ({ ...data.operations[0], vin: data.vin });
        data.operations[0] = ({ ...data.operations[0], photo_url: data.photo_url });
        data.operations[0] = ({ ...data.operations[0], region: data.region.slug });

        console.log("data", data);
        console.log("data.operations", data.operations);
        return data.operations // Возвращаем данные

    } catch (error) {
        console.error("Error fetching data: ", error);
        return null; // В случае ошибки возвращаем null
    }
}

// export const axiosDataNomer = async (item) => {
//     const url = ;
//     return await axiosData(url);
// };

// export const axiosDataVin = async (item) => {
//     const ;
//     return await axiosData(url);
// };

export default axiosData;