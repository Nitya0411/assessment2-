const API = "https://demohotelsapi.pythonanywhere.com/hotels/";

export async function getHotels() {

    const response = await fetch(API);

    if (!response.ok) {

        throw new Error("Unable to fetch hotels");

    }

    const result = await response.json();

    return result.data;

}