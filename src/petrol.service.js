import axios from "axios";
import * as cheerio from "cheerio";

export const getPetrolData = async () => {
  try {
    const htmlResult = await axios.get("https://hargapetrol.my/malaysia-petrol-prices-list.html");
    const $ = cheerio.load(htmlResult.data);

    const data = $("*[itemprop = 'priceComponent']").map((_, petrol) => { 
        const $petrol = $(petrol); 
        const startDate = $petrol.find("*[itemprop = 'validFrom']").text().trim()
        const endDate = $petrol.find("*[itemprop = 'validThrough']").text().trim()
        const ron95 = $petrol.find("div.ron95").text().trim()
        const ron97 = $petrol.next().find("div.ron97").text().trim()
        const diesel = $petrol.next().next().find("div.diesel").text().trim()
        return {'start': startDate, 'end': endDate,'ron95':ron95,'ron97':ron97,'diesel':diesel} 
    }).toArray(); 

    const result = data.filter((item) => item.start);
    return result
    
  } catch (error) {
    console.log("Error in the getPetrolData =>", error);
  }
};